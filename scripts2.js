
let imgBox = document.getElementById("imgBox");

let myImg = document.getElementById("myImg");

let textQr = document.getElementById("textQr");


function qrGanarater(){

    if(textQr.value.length>0){
    myImg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textQr.value;

    imgBox.classList.add("showImg")

}
else{
    textQr.classList.add("error");

    setTimeout(()=>{
        textQr.classList.remove("error");
    },1000)
}
}