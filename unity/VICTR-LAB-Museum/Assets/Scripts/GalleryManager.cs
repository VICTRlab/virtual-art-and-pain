using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using UnityEngine.UI;
public class GalleryManager : MonoBehaviour
{
    public GameObject welcomeTextObj;
    public GameObject welcomePanelObj;
    public GameObject completeTextObj;
    

    private double timer = 0.0;
    public bool startTimer = true;
    public GameObject timeTextObj;
    public Text timeText;

    public int listNum;
    void Start(){
        listNum = -1;
        welcomeTextObj = GameObject.Find("Welcome");
        welcomePanelObj = GameObject.Find("Panel");
        completeTextObj = GameObject.Find("CompleteText");
        completeTextObj.SetActive(false);

        timeTextObj = GameObject.Find("TimeText");
        timeText = timeTextObj.GetComponent<Text>();
        timeTextObj.SetActive(false);
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
