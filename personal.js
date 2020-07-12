var panelOpen = 0;
console.log(window.innerHeight,window.innerWidth);
var a = document.getElementsByTagName ('a'); 
for (var i = 0; i < a.length; i++){
    a[i].setAttribute('target', '_blank');
}

var screenOrientation = window.screen.orientation;
var heightOutput = window.innerHeight;
var widthOutput = window.innerWidth;
var body = document.getElementsByTagName("body")[0];
var panel = document.getElementById("panel");
var panelChildren = panel.children;
var panelContents = document.getElementsByClassName("panelcontent");
var mainGrid = document.getElementsByClassName("mainGrid")[0];
body.style.display = "flex";
console.log(body.style.display)

if(heightOutput>widthOutput || screenOrientation == 'portrait-primary' || screenOrientation == 'portrait-secondary' ){
    panel.style.visibility ="hidden";
    hidePanel();
    var orientation = "portrait";
    panel.style.width = "100%";
    panel.style.height = "0%";
    body.style.flexDirection = "column";
    mainGrid.style.width = "100%";
    mainGrid.style.height = "100%";
    }else{
        panel.style.visibility ="hidden";
        var orientation = "landscape";
        panel.style.height = "100%";
        panel.style.width = "0%";
        body.style.flexDirection = "row";
        mainGrid.style.width = "100%";
        mainGrid.style.height = "100%";
    
    }
console.log(heightOutput, widthOutput, orientation)
window.addEventListener('resize', reportWindowSize);   

function reportWindowSize() {
  heightOutput = window.innerHeight;
  widthOutput = window.innerWidth;
  panel.style.visibility ="hidden";
  panel.style.transition = "none";
  hidePanel();
  panelOpen = 0;
  if(heightOutput>widthOutput || screenOrientation == 'portrait-primary' || screenOrientation == 'portrait-secondary' ){
    orientation = "portrait";
    panel.style.width = "100%";
    panel.style.height = "0%";
    body.style.flexDirection = "column";
    mainGrid.style.width = "100%";
    mainGrid.style.height = "100%";
   

    
    }else{
        orientation = "landscape";
        panel.style.height = "100%";
        panel.style.width = "0%";
        body.style.flexDirection = "row";
        mainGrid.style.width = "100%";
        mainGrid.style.height = "100%";
        
    }
  console.log(heightOutput, widthOutput, orientation)
}




document.getElementById("cubeLinkNo3").addEventListener("mouseover",()=>{document.getElementById("cubeNo3").style.opacity="0.5";});
document.getElementById("cubeLinkNo3").addEventListener("touchstart",()=>{document.getElementById("cubeNo3").style.opacity="0.5";});
document.getElementById("cubeLinkNo3").addEventListener("mouseout",()=>{document.getElementById("cubeNo3").style.opacity="0.2";});
document.getElementById("cubeLinkNo3").addEventListener("touchend",()=>{document.getElementById("cubeNo3").style.opacity="0.2";});

document.getElementById("cubeLinkNo3").addEventListener("click",showPanel);

document.getElementById("cubeLinkNo1").addEventListener("mouseover",()=>{document.getElementById("cubeNo1").style.opacity="0.5";});
document.getElementById("cubeLinkNo1").addEventListener("touchstart",()=>{document.getElementById("cubeNo1").style.opacity="0.5";});
document.getElementById("cubeLinkNo1").addEventListener("mouseout",()=>{document.getElementById("cubeNo1").style.opacity="0.2";});
document.getElementById("cubeLinkNo1").addEventListener("touchend",()=>{document.getElementById("cubeNo1").style.opacity="0.2";});
document.getElementById("cubeLinkNo1").addEventListener("click",showPanel);


document.getElementById("closebtn").addEventListener("click",hidePanel);
    

function showPanel(){ 
    var panelContent = this.id + "-panelcontent";
    this.style.opacity = "0.2";
    if(panelOpen){
        hidePanel();
        setTimeout(showPanelsub,1200);
    }else{
        showPanelsub()
    }
    
    function showPanelsub(){
        panel.style.visibility = "visible";
        panel.style.transition = "2s";
        console.log('using',orientation);
        if (orientation == "portrait"){
            mainGrid.style.height = "70%";
            panel.style.height = "30%";
            
        } else{
            mainGrid.style.width = "70%";
            panel.style.width = "30%";
        }
        document.getElementById(panelContent).style.visibility = "visible"
        
        panelOpen = 1;
    }
   
    
}
function hidePanel(){
    
    if (orientation == "portrait"){
        mainGrid.style.height = "100%";
        panel.style.height = "0%";
        
    } else{
        mainGrid.style.width = "100%";
        panel.style.width = "0%";
    }
    
    for (var i = 0; i < panelChildren.length; i++) {
        if (panelChildren[i].id != "closebtn"){
        panelChildren[i].style.visibility = "hidden";
        }
    }
    panel.style.visibility ="hidden";
    panel.style.transition = "none";
    panelOpen = 0;


}