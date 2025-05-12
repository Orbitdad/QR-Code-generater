let QR = document.getElementById("qrCode");
document.getElementById("submit").addEventListener("click",()=>{
    let userInput = document.getElementById("textinput").value;
    if (!userInput) {
        document.getElementById("error").style.display="block"
        setTimeout(() => {
            document.getElementById("error").style.display="none"
        }, 1500);
    }else{
        QR.setAttribute("src",`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${userInput}`);
    QR.style.display="block"
    document.getElementById("menu").style.display="flex"
    }
})