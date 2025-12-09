var num = 1;
var element=document.getElementById("img");

function Goback(){
    if(num>1){
        num--;
    }
    else{
        num=2;
    }
    PlayAnimation();
}

function Gonext(){
    if(num<2){
        num++;
    }
    else{
        num=1;
    }
    PlayAnimation();
}

function PlayAnimation() {
element.src = "images/"+num+".gif";
element.classList.remove("play");//resent animation 
void element.offsetWidth;//trigger reflow of img tag 
element.classList.add("play");
}

