const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")

const qrCodeInput = document.querySelector("#qr-form input")

const qrCodeImg = document.querySelector("#qr-code img")

// Eventos
function generateQrCode() {

    const qrCodeInputValue = qrCodeInput.value;

    if(!qrCodeInputValue) return; // se eu n tiver um valor retornarei isso ao usuario
    
    qrCodeBtn.innerText = "Gerando código..." // faz o load

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`; //acha a imagem pela api

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        qrCodeBtn.innerText = "Código criado!"
    }) // e exibe

}

qrCodeBtn.addEventListener("click", () => {
    generateQrCode()
})