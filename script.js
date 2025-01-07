let inpBox = document.querySelector('.ip-box');
let btn = document.querySelector('.btn');
let qrImg = document.querySelector('.qr-img');
const qrBox = document.querySelector('.qrBox')

btn.addEventListener('click',()=>{
    function generateQR(){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inpBox.value;
        qrBox.classList.add("show-img");
        inpBox.value = '';
    }
    generateQR();
});