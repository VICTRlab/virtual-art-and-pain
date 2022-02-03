using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using UnityEngine.UI;
using System.Runtime.InteropServices;
public class TutorialManager : MonoBehaviour
{
    public GameObject welcomeTextObj;
    public GameObject uuidTextObj;
    public GameObject completeTextObj;
    public GameObject sphereInfoTextObj;
    public GameObject squareInfoTextObj;

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

    public Toggle checkList4Item9Toggle;
    public GameObject checkList4Item9;

    public Toggle checkList4Item10Toggle;
    public GameObject checkList4Item10;

    public Toggle checkBoxExit;
    public GameObject checkBoxExitObj;
    public List<GameObject> checkList1;
    public List<Toggle> checkList2;
    public int listNum;

    public GameObject POISqObj;
    public GameObject POISphObj;

    private float timer = 0.0f;
    private float waitTime = 5.0f;
    public bool startTimer = true;
    public string uuid = "PLACEHOLDER";
    public void SetUUID(string uuid)
    {
        this.uuid = uuid;
    }
    [DllImport("__Internal")]
    private static extern void GameOver(string data);
    void Start()
    {
        listNum = -1;

        uuidTextObj = GameObject.Find("UUID");
        uuidTextObj.GetComponent<Text>().text = uuid;

        welcomeTextObj = GameObject.Find("Welcome");
        completeTextObj = GameObject.Find("CompleteText");
        completeTextObj.SetActive(false);

        squareInfoTextObj = GameObject.Find("SquareInfo");
        squareInfoTextObj.SetActive(false);

        sphereInfoTextObj = GameObject.Find("SphereInfo");
        sphereInfoTextObj.SetActive(false);

        //welcomeText = welcomeTextObj.GetComponent<Text>();

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
        foreach (GameObject item in checkList1)
        {
            item.SetActive(false);
        }
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

        checkList4Item9 = GameObject.Find("Item9");
        checkList4Item9.SetActive(false);
        checkList4Item9Toggle = checkList4Item9.GetComponent<Toggle>();

        checkList4Item10 = GameObject.Find("Item10");
        checkList4Item10.SetActive(false);
        checkList4Item10Toggle = checkList4Item10.GetComponent<Toggle>();

        checkBoxExitObj = GameObject.Find("ExitItem");
        checkBoxExitObj.SetActive(false);
        checkBoxExit = checkBoxExitObj.GetComponent<Toggle>();


    }
    void Update()
    {

        //uuidTextObj = GameObject.Find("UUID");
        //uuidTextObj.GetComponent<Text>().text = uuid;

        squareInfoTextObj.transform.LookAt(Camera.main.transform);
        sphereInfoTextObj.transform.LookAt(Camera.main.transform);

        if (listNum == -1)
        {
            if (Input.GetKeyDown(KeyCode.Mouse0))
            {
                listNum = 0;
                welcomeTextObj.SetActive(false);
                foreach (GameObject item in checkList1)
                {
                    item.SetActive(true);
                }
            }
        }
        if (listNum == 0 && checkBoxW.isOn && checkBoxA.isOn && checkBoxS.isOn && checkBoxD.isOn)
        {
            listNum = 1;
            foreach (GameObject item in checkList1)
            {
                item.SetActive(false);
            }
            checkBoxLookLeftObj.SetActive(true);
            checkBoxLookRightObj.SetActive(true);
        }
        if (listNum == 1)
        {

            int layerMask = 1 << 8;
            layerMask = ~layerMask;

            RaycastHit hit;
            var ray = Camera.main.ScreenPointToRay(new Vector3(Screen.width / 2f, Screen.height / 2f, 0f));
            if (checkBoxLookLeft.isOn && checkBoxLookRight.isOn)
            {
                listNum = 2;
                checkBoxLookLeftObj.SetActive(false);
                checkBoxLookRightObj.SetActive(false);

                checkBoxPOISquareObj.SetActive(true);
            }
            if (Physics.Raycast(ray, out hit))
            {
                var obj = hit.collider.gameObject;

                if (obj.name.Equals("LeftWall"))
                {
                    checkBoxLookLeft.isOn = true;
                    //Debug.Log("HIT LEFT WALL");
                }
                if (obj.name.Equals("RightWall"))
                {
                    checkBoxLookRight.isOn = true;
                    //Debug.Log("HIT Right WALL");
                }


            }
        }
        if (listNum == 2)
        {
            int layerMask = 1 << 8;
            layerMask = ~layerMask;

            RaycastHit hit;
            var ray = Camera.main.ScreenPointToRay(new Vector3(Screen.width / 2f, Screen.height / 2f, 0f));
            if (checkBoxPOISquare.isOn)
            {
                listNum = 3;

                //checkBoxPOISquareObj.SetActive(false);
                checkBoxPOISphereObj.SetActive(true);
            }
            if (Physics.Raycast(ray, out hit))
            {
                var obj = hit.collider.gameObject;
                float dist = hit.distance;
                Debug.Log(dist);
                if (dist < 15 && obj.name.Equals("POISquare"))
                {
                    checkBoxPOISquare.isOn = true;

                    //Debug.Log("HIT LEFT WALL");
                }
            }
        }
        if (listNum == 3)
        {
            int layerMask = 1 << 8;
            layerMask = ~layerMask;

            RaycastHit hit;
            var ray = Camera.main.ScreenPointToRay(new Vector3(Screen.width / 2f, Screen.height / 2f, 0f));
            if (checkBoxPOISphere.isOn)
            {
                listNum = 4;
                checkBoxPOISphereObj.SetActive(false);
                checkBoxPOISquareObj.SetActive(false);
                checkList4Item9.SetActive(true);
            }
            if (Physics.Raycast(ray, out hit))
            {
                var obj = hit.collider.gameObject;
                float dist = hit.distance;
                Debug.Log(dist);
                if (dist < 15 && obj.name.Equals("POISphere"))
                {
                    checkBoxPOISphere.isOn = true;
                    //Debug.Log("HIT Right WALL");
                }
            }
        }
        if (listNum == 4)
        {
            int layerMask = 1 << 8;
            layerMask = ~layerMask;

            RaycastHit hit;
            var ray = Camera.main.ScreenPointToRay(new Vector3(Screen.width / 2f, Screen.height / 2f, 0f));

            if (Physics.Raycast(ray, out hit))
            {
                var obj = hit.collider.gameObject;
                float dist = hit.distance;
                Debug.Log(dist);
                if (obj.name.Equals("POISquare") && Input.GetKeyDown(KeyCode.I))
                {
                    checkList4Item9Toggle.isOn = true;
                    listNum = 5;
                    squareInfoTextObj.SetActive(true);
                    checkList4Item10.SetActive(true);
                }
            }

        }
        if (listNum == 5)
        {
            int layerMask = 1 << 8;
            layerMask = ~layerMask;

            RaycastHit hit;
            var ray = Camera.main.ScreenPointToRay(new Vector3(Screen.width / 2f, Screen.height / 2f, 0f));

            if (Physics.Raycast(ray, out hit))
            {
                var obj = hit.collider.gameObject;
                float dist = hit.distance;
                Debug.Log(dist);
                if (obj.name.Equals("POISphere") && Input.GetKeyDown(KeyCode.I))
                {
                    checkList4Item10Toggle.isOn = true;
                    listNum = 6;
                    checkList4Item9.SetActive(false);
                    sphereInfoTextObj.SetActive(true);
                    checkList4Item10.SetActive(false);
                    completeTextObj.SetActive(true);
                }
            }

        }
        if (listNum == 6)
        {
            if (startTimer)
            {
                timer = 0;
                startTimer = false;
            }
            else
            {
                timer += Time.deltaTime;
            }

            if (timer > waitTime)
            {
                Debug.Log("Timer REACHED");
#if UNITY_WEBGL == true && UNITY_EDITOR == false
                GameOver("TUTORIAL COMPLETED");
#endif
                Application.Quit();
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
