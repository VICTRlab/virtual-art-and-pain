using UnityEngine;
using System.Collections;

public class SM : MonoBehaviour
{
    public GameObject selectedObject;
    public int blueCol;
    public int redCol;
    public int greenCol;
    public bool lookingAtObject = false;
    public bool flashingIn = true;
    public bool startedFlashing = false;

    [SerializeField] private Material highlightMaterial;
    
    void Update()
    {
        if(lookingAtObject == true) {
            selectedObject.GetComponent<Renderer>().material.color = new Color32((byte)redCol, (byte)greenCol,(byte)blueCol,255);
        }
        
        var ray = Camera.main.ScreenPointToRay(new Vector3(Screen.width/2f,Screen.height/2f,0f));
        RaycastHit hit;
        if(Physics.Raycast(ray,out hit)){
            var selection = hit.transform;
            var selectionRenderer = selection.GetComponent<Renderer>();
            if(selectionRenderer != null) {
                selectedObject = GameObject.Find(CastingToObject.selectedObject);
        
                if(startedFlashing==false) {
                    startedFlashing = true;
                    StartCoroutine(FlashObject());
                }
            }
        }
    }
    /*void OnMouseOver(){
        selectedObject = GameObject.Find(CastingToObject.selectedObject);
        lookingAtObject = true;
        if(startedFlashing==false) {
            startedFlashing = true;
            StartCoroutine(FlashObject());
        }
    }
    void OnMouseExit() {
        startedFlashing=false;
        lookingAtObject = false;
        StopCoroutine(FlashObject());
        selectedObject.GetComponent<Renderer>().material.color=new Color32(255,255,255,255);
    }*/
    IEnumerator FlashObject() {
        while(lookingAtObject==true) {
            yield return new WaitForSeconds(0.05f);
            if(flashingIn==true) {
                if(blueCol <= 30) {
                    flashingIn = false;
                } else {
                    blueCol -= 25;
                    greenCol-=1;
                }
            }
            if(flashingIn==false) {
                if(blueCol>=250) {
                    flashingIn=true;
                } else {
                    blueCol+=25;
                    greenCol+=1;
                }
            }
        }
    }
}
