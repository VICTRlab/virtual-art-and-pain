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
    public List<GameObject> checkList1;
    public List<Toggle> checkList2;
     public int listNum;
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
            if (Physics.Raycast(ray, out hit))
            {
              var obj = hit.collider.gameObject;
              if(obj.name.Equals("LeftWall")) {
                  checkBoxLookLeft.isOn = true;
                  Debug.Log("HIT LEFT WALL");
              }
              if(obj.name.Equals("RightWall")) {
                  checkBoxLookRight.isOn = true;
                  Debug.Log("HIT Right WALL");
              }
              //Debug.Log($"looking at {obj.name}", this);    
              //Debug.DrawRay(transform.position, transform.TransformDirection(Vector3.forward) * hit.distance, Color.yellow);
              //Debug.Log("Did Hit");
            
           }
         else
         {
            //Debug.DrawRay(transform.position, transform.TransformDirection(Vector3.forward) * 1000, Color.white);
            //Debug.Log("Did not Hit");
          }
            //Debug.Log("222 HIT");
            /*var ray = Camera.main.ScreenPointToRay(new Vector3(Screen.width/2f,Screen.height/2f,0f));
            RaycastHit hit;
            
            if(Physics.Raycast(ray,out hit)){
                Debug.Log("hit.transform");
                var selection = hit.transform;
                var selectionRenderer = selection.GetComponent<Renderer>().ToString();
                if(selectionRenderer.Equals("LeftWall")) {
                    Debug.Log("LEFTWALL HIT");
                    //selectedObject = GameObject.Find(CastingToObject.selectedObject);
            }*/
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
