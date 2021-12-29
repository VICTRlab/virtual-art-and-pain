using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using UnityEngine.UI;
using TMPro;
using System.Runtime.InteropServices;
public class GalleryManager : MonoBehaviour
{

    [DllImport("__Internal")]
    private static extern void GameOver();
   

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
        startTimer = true;
        secondTimerOn = false;
        textOn = false;
        objOn = null;
        frames = new List<GameObject>();
        frames.Add(GameObject.Find("CompFrame (7)"));
        frames.Add(GameObject.Find("CompFrame (8)"));

        foreach (GameObject frame in frames)
        {
            GameObject painting = frame.transform.GetChild(0).gameObject;
            //Debug.Log(frame.name);
            GameObject text = painting.transform.GetChild(0).gameObject;
            text.SetActive(false);
        }
        listNum = -1;

        //turnOffHint = GameObject.Find("turnOffHint");
        Debug.Log("@@@start@@@@");
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
            //Debug.Log(obj.name);
            if (obj.name.StartsWith("CompFrame"))
            {
                turnOnHint.SetActive(true);
                GameObject painting = obj.transform.GetChild(0).gameObject;
                GameObject myText = painting.transform.GetChild(0).gameObject;
                //string db = myText.GetComponent<TMPro.TextMeshProUGUI>().text;
                //Debug.Log(db);
                //paintingText = myText.GetComponent<Text>(); 
                if (Input.GetKeyDown(KeyCode.I))
                {
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
                timer = 600.0;
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
#if UNITY_WEBGL == true && UNITY_EDITOR == false
                        GameOver();
#endif
                        Application.Quit();
                    }
                    else
                    {
                        timeText.text = string.Format("{0:00}:{1:00}", minutes, seconds);
                    }
                }
                else if (minutes <= 0 && seconds <= 0)
                {
                    Debug.Log("TIMER REACHED");
                    timeText.text = "00:00";
                    endTextObj.SetActive(true);
                    endPanelObj.SetActive(true);
                    secondTimerOn = true;
                    timer = 15.0;
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
    void controlOnHint()
    {
        int layerMask = 1 << 8;
        layerMask = ~layerMask;
        RaycastHit hit;
        var ray = Camera.main.ScreenPointToRay(new Vector3(Screen.width / 2f, Screen.height / 2f, 0f));
        if (Physics.Raycast(ray, out hit))
        {
            GameObject obj = hit.collider.gameObject;
            //Debug.Log(obj.name);
            if (obj.name.StartsWith("CompFrame"))
            {
                GameObject painting = obj.transform.GetChild(0).gameObject;
                GameObject text = painting.transform.GetChild(0).gameObject;
                //Debug.Log(text.name);
                if (Input.GetKeyDown(KeyCode.I))
                {
                    if (textOn)
                    {
                        Debug.Assert(objOn != null);
                        if (objOn.Equals(obj.name))//looking at object with on text, so turn text off text
                        {
                            textOn = false;
                            objOn = null;
                            text.SetActive(false);
                        }
                        else // looking at obj without on text, but another object has on text, so turn the other text off, turn this text on.
                        {
                            //textOn = true;
                            GameObject otherPainting = GameObject.Find(objOn).transform.GetChild(0).gameObject;
                            GameObject otherText = otherPainting.transform.GetChild(0).gameObject;
                            otherText.SetActive(false);
                            objOn = obj.name;
                            text.SetActive(true);
                        }
                    }
                    else if (!textOn)
                    {
                        textOn = true;
                        objOn = obj.name;
                        text.SetActive(true);
                    }
                }
            }
        }
    }
    void controlText()
    {

    }
}
