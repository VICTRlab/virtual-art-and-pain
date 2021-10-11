using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using UnityEngine.UI;
public class GalleryManager : MonoBehaviour
{
    public GameObject welcomeTextObj;
    public GameObject welcomePanelObj;
    public GameObject completeTextObj;
    
    public GameObject t1;
    public GameObject t2;
    public bool t1On = false;
    private double timer = 0.0;
    public bool startTimer = true;
    public GameObject timeTextObj;
    public Text timeText;

    public int listNum;
    void Start(){
        listNum = -1;
        welcomeTextObj = GameObject.Find("Welcome");
        welcomePanelObj = GameObject.Find("Panel");
        //completeTextObj = GameObject.Find("CompleteText");
        //completeTextObj.SetActive(false);

        timeTextObj = GameObject.Find("TimeText");
        timeText = timeTextObj.GetComponent<Text>();
        timeTextObj.SetActive(false);

        t1 = GameObject.Find("t1");
        t2 = GameObject.Find("t2");
        t1.SetActive(false);
        t2.SetActive(false);
    }
    void Update(){
        if(listNum==-1) {
            if (Input.GetKeyDown(KeyCode.Mouse0)) {
                listNum=0;
                welcomeTextObj.SetActive(false);
                welcomePanelObj.SetActive(false);
                timeTextObj.SetActive(true);
            }
        }
        if(listNum==0) {
            if (Input.GetKeyDown(KeyCode.I))
            {
                if(t1On){
                    t1.SetActive(false);
                    t2.SetActive(false);
                    t1On = !t1On;
                } else {
                    t1.SetActive(true);
                    t2.SetActive(true);
                    t1On = !t1On;
                }
            }
            if(startTimer) {
                timer = 600.0;
                startTimer=false;
            } else {
                timer -= Time.deltaTime;
                double minutes = Mathf.FloorToInt((float)timer / 60);
                double seconds = Mathf.FloorToInt((float)timer % 60);
                
                timeText.text = string.Format("{0:00}:{1:00}", minutes, seconds);
            }
            
        }
        
    }
}
