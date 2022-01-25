using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using UnityEngine.UI;
using TMPro;
using System.Runtime.InteropServices;
using Newtonsoft.Json;
using System.Linq;

public class GalleryManager : MonoBehaviour
{
    private class Payload {
        public int distance = 0;
        public int time = 0;
        public int clicks = 0; 
    }

    [DllImport("__Internal")]
    private static extern void GameOver(string data);


    Dictionary<string, (string, string, string)> timeMap = new Dictionary<string, (string, string, string)>();
    // Painting -> (distance, time, )
    Dictionary<string, Payload> objectMap = new Dictionary<string, Payload>();

    public GameObject welcomeTextObj;
    public GameObject welcomePanelObj;
    public GameObject completeTextObj;

    // public GameObject t1;
    public GameObject t2;
    public bool t1On = false;
    private double timer = 0.0;
    public bool startTimer;
    private bool secondTimerOn;

    public GameObject timeTextObj;
    public Text timeText;

    public GameObject paintingObj;
    public Text paintingText;

    public List<GameObject> frames;

    public int listNum;

    public bool textOn; // keeps track of if any text is in "on" state
    public string objOn; // gameobject that is "on", meaning it has text displayed

    public GameObject turnOffHint;
    public GameObject turnOnHint;
    public GameObject endTextObj;
    public GameObject endPanelObj;
    void Start()
    {
        timeMap.Clear();
        startTimer = true;
        secondTimerOn = false;
        textOn = false;
        objOn = null;
        
        //GameObject[] allGameObjects = GameObject.FindGameObjectsWithTag("Untagged");  //returns GameObject[]
        Object[] allGameObjects = GameObject.FindObjectsOfType(typeof(MonoBehaviour));
        Debug.Log(allGameObjects.Length);

        foreach (int value in Enumerable.Range(1, 20))
        {
            objectMap.Add("CompFrame (" + value + ")", new Payload());
        }
        //foreach (Object go in allGameObjects) {
        //    Debug.Log("Line 65 ");
        //    if(go.name.StartsWith("CompFrame")) {
        //        Debug.Log("Line 67" + go.name);
        //        objectMap.Add(go.name,new Payload());
        //    }
        //}
        objectMap.Add("Other", new Payload());

        Debug.Log("TEST");
        foreach(string key in objectMap.Keys)
        {
            Debug.Log("Key: " + key);
        }
        listNum = -1;

        //turnOffHint = GameObject.Find("turnOffHint");
        //Debug.Log("@@@start@@@@");
        turnOnHint = GameObject.Find("turnOnHint");
        welcomeTextObj = GameObject.Find("Welcome");
        welcomePanelObj = GameObject.Find("Panel");

        endTextObj = GameObject.Find("End");
        endPanelObj = GameObject.Find("EndPanel");

        endTextObj.SetActive(false);
        endPanelObj.SetActive(false);

        timeTextObj = GameObject.Find("TimeText");
        timeText = timeTextObj.GetComponent<Text>();
        timeTextObj.SetActive(false);

    }

    void Update()
    {

        int layerMask = 1 << 8;
        layerMask = ~layerMask;

        RaycastHit hit;
        var ray = Camera.main.ScreenPointToRay(new Vector3(Screen.width / 2f, Screen.height / 2f, 0f));
        if (Physics.Raycast(ray, out hit))
        {
            GameObject obj = hit.collider.gameObject;
            double minutes = Mathf.FloorToInt((float)timer / 60);
            double seconds = Mathf.FloorToInt((float)timer % 60);
            string curTime = string.Format("{0:00}:{1:00}", minutes, seconds);
            //Debug.Log("Non-painting " + curTime);
            var gObj = GameObject.Find("FirstPerson-AIO");
            if (gObj) {
                var pos = gObj.transform.position;
               // Debug.Log(pos+ " " + curTime);
            }
            //Debug.Log(pos);
            if (obj.name.StartsWith("CompFrame") && hit.distance <= 15)
            {

                foreach (string key in objectMap.Keys)
                {
                    Debug.Log("Key: " + key);
                }

                //Debug.Log("Viewing CF: "+  obj.name + " " + curTime);
                turnOnHint.SetActive(true);
                GameObject painting = obj.transform.GetChild(0).gameObject;
                GameObject myText = painting.transform.GetChild(0).gameObject;
                
                if(!timeMap.ContainsKey(""+minutes+" "+seconds)) {
                    //objectMap.Add(obj.name, objectMap);

                    Debug.Log("Line 122 - KEY: " + obj.name);
                    objectMap[obj.name].time += 1;
                    Debug.Log("Timer for " + obj.name + ": " + objectMap[obj.name].time);
                    timeMap.Add(minutes+" "+seconds, (gObj.transform.position.ToString(), obj.name, obj.transform.position.ToString()));    
                }
                
                if (Input.GetKeyDown(KeyCode.I))
                {
                    Debug.Log("Line 130 - KEY: " + obj.name);
                    objectMap[obj.name].clicks += 1;
                    Debug.Log("Clicks for " + obj.name + ": " + objectMap[obj.name].clicks);
                    if (textOn)
                    {
                        Debug.Assert(objOn != null);
                        if (objOn.Equals(obj.name))//looking at object with on text, so turn text off text
                        {
                            textOn = false;
                            objOn = null;
                            myText.SetActive(false);
                        }
                        else // looking at obj without on text, but another object has on text, so turn the other text off, turn this text on.
                        {
                            //textOn = true;
                            GameObject otherPainting = GameObject.Find(objOn).transform.GetChild(0).gameObject;
                            GameObject otherText = otherPainting.transform.GetChild(0).gameObject;
                            otherText.SetActive(false);
                            objOn = obj.name;
                            myText.SetActive(true);
                        }
                    }
                    else if (!textOn)
                    {
                        textOn = true;
                        objOn = obj.name;
                        myText.SetActive(true);
                    }
                }
            }
            else
            {
                turnOnHint.SetActive(false);
            }
        }
        if (listNum == -1)
        {
            if (Input.GetKeyDown(KeyCode.Mouse0))
            {
                listNum = 0;
                welcomeTextObj.SetActive(false);
                welcomePanelObj.SetActive(false);
                timeTextObj.SetActive(true);
            }
        }
        if (listNum == 0)
        {

            if (startTimer)
            {
                timer = 60;
                startTimer = false;
            }
            else
            {
                timer -= Time.deltaTime;
                double minutes = Mathf.FloorToInt((float)timer / 60);
                double seconds = Mathf.FloorToInt((float)timer % 60);
                
                if (secondTimerOn)
                {
                    if (minutes <= 0 && seconds <= 0)
                    {
                        Debug.Log("WEEEE " + JsonConvert.SerializeObject(objectMap, Formatting.Indented));
#if UNITY_WEBGL == true && UNITY_EDITOR == false
                            GameOver(JsonConvert.SerializeObject(objectMap, Formatting.Indented));
#endif

                        timeMap.Clear();
                        Application.Quit();
                    }
                    else
                    {
                        timeText.text = string.Format("{0:00}:{1:00}", minutes, seconds);
                    }
                }
                else if (minutes <= 0 && seconds <= 0)
                {
                    //Debug.Log("TIMER REACHED");
                    timeText.text = "00:00";
                    endTextObj.SetActive(true);
                    endPanelObj.SetActive(true);
                    secondTimerOn = true;
                    timer = 10.0;
                }
                else
                {
                    timeText.text = string.Format("{0:00}:{1:00}", minutes, seconds);
                }

            }

        }

    }
    void controlOffHint()
    {
        if (textOn)
        {
            turnOffHint.SetActive(true);
        }
        else if (!textOn)
        {
            turnOffHint.SetActive(false);
        }
    }
}
