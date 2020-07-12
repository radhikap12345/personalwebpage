var panelOpen = 0;
console.log(window.innerHeight,window.innerWidth);
var a = document.getElementsByTagName ('a'); 
for (var i = 0; i < a.length; i++){
    a[i].setAttribute('target', '_blank');
}

var screenorientationVar = window.screen.orientation;
var heightOutput = window.innerHeight;
var widthOutput = window.innerWidth;
var body = document.getElementsByTagName("body")[0];
var panel = document.getElementById("panel");
var panelChildren = panel.children;
var panelContents = document.getElementsByClassName("panelcontent");
var mainGrid = document.getElementsByClassName("mainGrid")[0];
var orientationVar = "unknown";
body.style.display = "flex";
console.log(body.style.display)
console.log(screenorientationVar);
if(heightOutput>widthOutput || screenorientationVar === 'portrait-primary' || screenorientationVar === 'portrait-secondary' ){
    panel.style.visibility ="hidden";
    hidePanel();
    orientationVar = "portrait";
    console.log('whats the orientationVar here in if',orientationVar);
    panel.style.width = "100%";
    panel.style.height = "0%";
    body.style.flexDirection = "column";
    mainGrid.style.width = "100%";
    mainGrid.style.height = "100%";
    console.log('IF exected');
    
    }else{
        panel.style.visibility ="hidden";
        orientationVar = "landscape";
        panel.style.height = "100%";
        panel.style.width = "0%";
        body.style.flexDirection = "row";
        mainGrid.style.width = "100%";
        mainGrid.style.height = "100%";
        console.log('ELSE exected');
    }
console.log(heightOutput, widthOutput, orientationVar)
console.log('whats the orientationVar here outside',orientationVar);
window.addEventListener('resize', reportWindowSize);   

console.log('whats the orientationVar here up outside',orientationVar);

function reportWindowSize() {
  console.log(window.screen.orientationVar);
  console.log(heightOutput, widthOutput, orientationVar)
  heightOutput = window.innerHeight;
  widthOutput = window.innerWidth;
  panel.style.visibility ="hidden";
  panel.style.transition = "none";
  hidePanel();
  panelOpen = 0;
  if(heightOutput>widthOutput || screenorientationVar === "portrait-primary" || screenorientationVar === 'portrait-secondary' ){
    orientationVar = "portrait";
    panel.style.width = "100%";
    panel.style.height = "0%";
    body.style.flexDirection = "column";
    mainGrid.style.width = "100%";
    mainGrid.style.height = "100%";
    console.log('IF exected in func');
   

    
    }else{
        orientationVar = "landscape";
        panel.style.height = "100%";
        panel.style.width = "0%";
        body.style.flexDirection = "row";
        mainGrid.style.width = "100%";
        mainGrid.style.height = "100%";
        console.log('ELSE exected in func');
    }
  console.log(heightOutput, widthOutput, orientationVar)
}


console.log('whats the orientationVar here outside',orientationVar);

document.getElementById("cubeLinkNo3").addEventListener("mouseover",()=>{document.getElementById("cubeNo3").style.opacity="0.5";});
document.getElementById("cubeLinkNo3").addEventListener("touchmove",()=>{document.getElementById("cubeNo3").style.opacity="0.5";});
document.getElementById("cubeLinkNo3").addEventListener("mouseout",()=>{document.getElementById("cubeNo3").style.opacity="0.2";});
document.getElementById("cubeLinkNo3").addEventListener("touchend",()=>{document.getElementById("cubeNo3").style.opacity="0.2";});
document.getElementById("cubeLinkNo3").addEventListener("click",showPanel);

document.getElementById("cubeLinkNo2").addEventListener("mouseover",()=>{document.getElementById("cubeNo2").style.opacity="0.5";});
document.getElementById("cubeLinkNo2").addEventListener("touchmove",()=>{document.getElementById("cubeNo2").style.opacity="0.5";});
document.getElementById("cubeLinkNo2").addEventListener("mouseout",()=>{document.getElementById("cubeNo2").style.opacity="0.2";});
document.getElementById("cubeLinkNo2").addEventListener("touchend",()=>{document.getElementById("cubeNo2").style.opacity="0.2";});
document.getElementById("cubeLinkNo2").addEventListener("click",showPanel);

document.getElementById("cubeLinkNo1").addEventListener("mouseover",()=>{document.getElementById("cubeNo1").style.opacity="0.5";});
document.getElementById("cubeLinkNo1").addEventListener("touchmove",()=>{document.getElementById("cubeNo1").style.opacity="0.5";});
document.getElementById("cubeLinkNo1").addEventListener("mouseout",()=>{document.getElementById("cubeNo1").style.opacity="0.2";});
document.getElementById("cubeLinkNo1").addEventListener("touchend",()=>{document.getElementById("cubeNo1").style.opacity="0.2";});
document.getElementById("cubeLinkNo1").addEventListener("click",showPanel);


document.getElementById("closebtn").addEventListener("click",hidePanel);
    

function showPanel(){ 
    var panelContent = this.id + "-panelcontent";
    
    if(panelOpen){
        hidePanel();
        setTimeout(showPanelsub,1200);
    }else{
        showPanelsub()
    }
    console.log('whats the orientationVar here',orientationVar);
    function showPanelsub(){
        panel.style.visibility = "visible";
        panel.style.transition = "2s";
        console.log('using',orientationVar);
        if (orientationVar == "portrait"){
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
    
    if (orientationVar == "portrait"){
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