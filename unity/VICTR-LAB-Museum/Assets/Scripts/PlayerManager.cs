using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using UnityEngine.UI;
public class PlayerManager : MonoBehaviour
{
    public GameObject checkBoxWO;
    public GameObject checkBoxAO;
    public GameObject checkBoxSO;
    public GameObject checkBoxDO;
    public Toggle checkBoxW;
    public Toggle checkBoxA;
    public Toggle checkBoxS;
    public Toggle checkBoxD;

    public Toggle checkBoxLookLeft;
    public GameObject checkBoxLookLeftObj;
    
    public Toggle checkBoxLookRight;
    public GameObject checkBoxLookRightObj;

    public Toggle checkBoxPOISquare;
    public GameObject checkBoxPOISquareObj;
    public Toggle checkBoxPOISphere;
    public GameObject checkBoxPOISphereObj;
    public Toggle checkBoxExit;
    public GameObject checkBoxExitObj;
    public List<GameObject> checkList1;
    public List<Toggle> checkList2;
     public int listNum;

     public GameObject POISqObj;
     public GameObject POISphObj;
    void Start(){
        listNum = 0;
        checkBoxWO = GameObject.Find("Item1");
        checkBoxAO = GameObject.Find("Item2");
        checkBoxSO = GameObject.Find("Item3");
        checkBoxDO = GameObject.Find("Item4");

        checkBoxW = checkBoxWO.GetComponent<Toggle>();
        checkBoxA = checkBoxAO.GetComponent<Toggle>();
        checkBoxS = checkBoxSO.GetComponent<Toggle>();
        checkBoxD = checkBoxDO.GetComponent<Toggle>();
        
        checkList1 = new List<GameObject>();
        checkList1.Add(checkBoxWO);
        checkList1.Add(checkBoxAO);
        checkList1.Add(checkBoxSO);
        checkList1.Add(checkBoxDO);

        checkBoxLookLeftObj = GameObject.Find("Item5");
        checkBoxLookLeftObj.SetActive(false);
        checkBoxLookLeft = checkBoxLookLeftObj.GetComponent<Toggle>();

        checkBoxLookRightObj = GameObject.Find("Item6");
        checkBoxLookRightObj.SetActive(false);
        checkBoxLookRight = checkBoxLookRightObj.GetComponent<Toggle>();

        POISqObj = GameObject.Find("POISquare");
        POISphObj = GameObject.Find("POISphere");

        checkBoxPOISquareObj = GameObject.Find("Item7");
        checkBoxPOISquareObj.SetActive(false);
        checkBoxPOISquare = checkBoxPOISquareObj.GetComponent<Toggle>();
        
        checkBoxPOISphereObj = GameObject.Find("Item8");
        checkBoxPOISphereObj.SetActive(false);
        checkBoxPOISphere = checkBoxPOISphereObj.GetComponent<Toggle>();

        checkBoxExitObj = GameObject.Find("Item9");
        checkBoxExitObj.SetActive(false);
        checkBoxExit = checkBoxExitObj.GetComponent<Toggle>();

        
    }
    void Update(){
        if(listNum==0 && checkBoxW.isOn && checkBoxA.isOn && checkBoxS.isOn && checkBoxD.isOn) {
            listNum=1;
            foreach (GameObject item in checkList1)
            {
                item.SetActive(false);
            }
            checkBoxLookLeftObj.SetActive(true);
            checkBoxLookRightObj.SetActive(true);
        }
        if(listNum==1) {
            
            int layerMask = 1 << 8;
            layerMask = ~layerMask;

            RaycastHit hit;
            var ray = Camera.main.ScreenPointToRay(new Vector3(Screen.width/2f,Screen.height/2f,0f));
            if(checkBoxLookLeft.isOn && checkBoxLookRight.isOn) {
                listNum = 2;
                checkBoxLookLeftObj.SetActive(false);
                checkBoxLookRightObj.SetActive(false);

                checkBoxPOISquareObj.SetActive(true);
                checkBoxPOISphereObj.SetActive(true);
            }
            if (Physics.Raycast(ray, out hit))
            {
              var obj = hit.collider.gameObject;
              
              if(obj.name.Equals("LeftWall")) {
                  checkBoxLookLeft.isOn = true;
                  //Debug.Log("HIT LEFT WALL");
              }
              if(obj.name.Equals("RightWall")) {
                  checkBoxLookRight.isOn = true;
                  //Debug.Log("HIT Right WALL");
              }
         
            
           }
        }
        if(listNum==2) {
            int layerMask = 1 << 8;
            layerMask = ~layerMask;

            RaycastHit hit;
            var ray = Camera.main.ScreenPointToRay(new Vector3(Screen.width/2f,Screen.height/2f,0f));
            if(checkBoxPOISquare.isOn && checkBoxPOISphere.isOn) {
                listNum = 3;

                checkBoxPOISquareObj.SetActive(false);
                checkBoxPOISphereObj.SetActive(false);

                checkBoxExitObj.SetActive(true);
            }
            if (Physics.Raycast(ray, out hit))
            {
              var obj = hit.collider.gameObject;
              float dist = hit.distance;
              Debug.Log(dist);
              if(dist < 15 && obj.name.Equals("POISquare")) {
                  checkBoxPOISquare.isOn = true;
                  //Debug.Log("HIT LEFT WALL");
              }
              if(dist < 15 && obj.name.Equals("POISphere")) {
                  checkBoxPOISphere.isOn = true;
                  //Debug.Log("HIT Right WALL");
              }
            }
        }
        if(listNum==3){
            int layerMask = 1 << 8;
            layerMask = ~layerMask;

            RaycastHit hit;
            var ray = Camera.main.ScreenPointToRay(new Vector3(Screen.width/2f,Screen.height/2f,0f));
            if(checkBoxPOISquare.isOn && checkBoxPOISphere.isOn) {
                listNum = 3;
            }
            if (Physics.Raycast(ray, out hit))
            {
              var obj = hit.collider.gameObject;
              float dist = hit.distance;
              Debug.Log(dist);
              if(dist < 7 && obj.name.Equals("Exit")) {
                  //checkBoxPOISquare.isOn = true;
                  Debug.Log("EXIT REACHED");
                  checkBoxExit.isOn = true;
                  Application.Quit();
              }
              
            }
        }
        
        if (Input.GetKeyDown(KeyCode.LeftArrow) || Input.GetKeyDown(KeyCode.A))
        {
            checkBoxA.isOn = true;
        }
        if (Input.GetKeyDown(KeyCode.UpArrow) || Input.GetKeyDown(KeyCode.W))
        {
            checkBoxW.isOn = true;
        }
        if (Input.GetKeyDown(KeyCode.DownArrow) || Input.GetKeyDown(KeyCode.S))
        {
            checkBoxS.isOn = true;
        }
        if (Input.GetKeyDown(KeyCode.RightArrow) || Input.GetKeyDown(KeyCode.D))
        {
            checkBoxD.isOn = true;
        }
    }
}
