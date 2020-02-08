function hide(changeDisplay){
    var x = document.getElementById(changeDisplay);
    if(x.style.display == "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
}