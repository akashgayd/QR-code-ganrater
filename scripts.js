
let imgBox = document.getElementById("imgBox");

let myImg = document.getElementById("myImg");

 let qrGanrater = document.getElementById("qrText");



 function qrGanraterFun(){


        if(qrGanrater.value.length >0){
        myImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrGanrater.value;
        imgBox.classList.add("showImg")

        }
        else{
                
                qrGanrater.classList.add("error");
                setTimeout(()=>{
                        qrGanrater.classList.remove("error");
                },1000);

              
        }

 }
