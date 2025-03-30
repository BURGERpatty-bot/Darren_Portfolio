// calls

makeDraggable(document.getElementById('arduinoContainer'));
makeDraggable(document.getElementById('digitalArtContainer'));
makeDraggable(document.getElementById('indieGameContainer'));

//var

const leftBody = document.querySelector(".leftBody");
const rightBody = document.querySelector(".rightBody");
let isPhone = false;

// functions

function checkDevice() {
    const bodyContainer = document.querySelector(".bodyContainer");
    const infoContent = document.querySelector(".infoContainer");
    const bady = document.querySelector("html");
    const htiml = document.querySelector("body");
    const kanan = document.querySelector(".rightBodyContainer");
    const folderKanan = document.querySelector(".folderContainer");
    const abtme = document.getElementById("abtMe");
    const skels = document.getElementById("skils");
    const resum = document.getElementById("resume");
    const content = document.querySelector(".contentContainer");
    const propayl = document.querySelector(".imageContainer");
    const pilian = document.querySelector(".pilian");
    const rowsan = document.querySelector(".rowS");
    const textA = document.getElementById("arduinoText");
    const textB = document.getElementById("indieText");
    const textC = document.getElementById("digitalText");
    const arduino = document.getElementById("arduinoContainer");
    const indie = document.getElementById("indieGameContainer");
    const art = document.getElementById("digitalArtContainer");
    const rowQ = document.querySelectorAll(".row1");
    const folderText = document.querySelectorAll(".foldersingText");

    if (window.innerWidth <= 1150) {
        isPhone = true;
        bodyContainer.style.flexDirection = "column";
        bodyContainer.style.height = "2030px";

        leftBody.style.width = "100%";
        leftBody.style.flexDirection = "column";
        leftBody.style.padding = "5% 20% 30px 10%";
        leftBody.style.opacity = "1";
        leftBody.style.filter = "blur(0)";

        rightBody.style.width = "100%";
        rightBody.style.opacity = "1";
        rightBody.style.filter = "blur(0)";
        kanan.style.padding = "90px 10% 10% 10%";

        infoContent.style.margin = "5% 20% 0 0";

        bady.style.overflowY = "scroll";
        htiml.style.overflowY = "scroll";

        if (window.innerWidth <= 900) {
            folderKanan.style.flexDirection = "column";
        } else {
            folderKanan.style.flexDirection = "row";
        }

        if (window.innerWidth <= 500) {
            abtme.style.fontSize = "20px";
            skels.style.fontSize = "20px";
            resum.style.fontSize = "20px";
            leftBody.style.padding = "5% 20% 30px 5%";

            content.style.width = "320px";
            pilian.style.width = "330px";

            propayl.style.width = "320px";
            propayl.style.height = "320px";
            bodyContainer.style.height = "1845px";
            rowsan.style.width = "200px";
            textA.style.opacity = "1";
            textB.style.opacity = "1";
            textC.style.opacity = "1";

            kanan.style.padding = "30px 5% 10% 5%";

            art.style.width = "90%";
            art.style.top = "20%";
            art.style.left = "3%";
            indie.style.width = "90%";
            indie.style.top = "20%";
            indie.style.left = "3%";
            arduino.style.width = "90%";
            arduino.style.top = "20%";
            arduino.style.left = "3%";

            rowQ.forEach(element => {
                element.style.flexDirection = "column";
            });
            folderText.forEach(element => {
                element.style.opacity = "1";
            });
        
        } else {
            abtme.style.fontSize = "35px";
            skels.style.fontSize = "35px";
            resum.style.fontSize = "35px";

            content.style.width = "525px";

            propayl.style.width = "400px";
            propayl.style.height = "400px";
            pilian.style.width = "550px";

            textA.style.opacity = "0";
            textB.style.opacity = "0";
            textC.style.opacity = "0";
            folderText.style.opacity = "0";
        }

    } else {
        isPhone = false;
        bodyContainer.style.flexDirection = "row";
        bodyContainer.style.height = "100%";

        leftBody.style.width = "80%";
        leftBody.style.flexDirection = "row";
        leftBody.style.textAlign = "unset";
        leftBody.style.padding = "200px 20px 0 10%"
        leftBody.style.opacity = "1";
        leftBody.style.filter = "blur(0)";

        rightBody.style.width = "20%";
        rightBody.style.opacity = ".3";
        rightBody.style.filter = "blur(5px)";
        kanan.style.padding = "200px 10% 10% 10%";

        infoContent.style.margin = "0 0 0 100px";

        bady.style.overflowY = "hidden";
        htiml.style.overflowY = "hidden";

        folderKanan.style.flexDirection = "row";
        content.style.width = "525px";

        abtme.style.fontSize = "35px";
        skels.style.fontSize = "35px";
        resum.style.fontSize = "35px";
        propayl.style.width = "400px";
        propayl.style.height = "400px";
        pilian.style.width = "550px";

        textA.style.opacity = "0";
        textB.style.opacity = "0";
        textC.style.opacity = "0";
        folderText.style.opacity = "0";

        art.style.width = "100%";
        art.style.top = "30%";
        art.style.left = "20%";
        indie.style.width = "100%";
        indie.style.top = "30%";
        indie.style.left = "20%";
        arduino.style.width = "100%";
        arduino.style.top = "30%";
        arduino.style.left = "20%";

        rowQ.style.flexDirection = "row";

        rowQ.forEach(element => {
            element.style.flexDirection = "row";
        });
        folderText.forEach(element => {
            element.style.opacity = "0";
        });
    }
}

window.onload = checkDevice;
window.onresize = checkDevice;

document.addEventListener("DOMContentLoaded", function () {
    const leftBody = document.querySelector(".leftBody");
    const rightBody = document.querySelector(".rightBody");

    function leftClickHandler() {
        if (isPhone) return; // Disable clicks on phones
        leftBody.style.width = "80%";
        leftBody.style.opacity = "1";
        leftBody.style.filter = "blur(0)";

        rightBody.style.width = "20%";
        rightBody.style.opacity = "0.3";
        rightBody.style.filter = "blur(5px)";
        rightBody.style.zIndex = "4";
    }

    function rightClickHandler() {
        if (isPhone) return; // Disable clicks on phones
        rightBody.style.width = "80%";
        rightBody.style.opacity = "1";
        rightBody.style.filter = "blur(0)";
        rightBody.style.zIndex = "6";

        leftBody.style.width = "20%";
        leftBody.style.opacity = "0.5";
        leftBody.style.filter = "blur(5px)";
    }

    leftBody.addEventListener("click", leftClickHandler);
    rightBody.addEventListener("click", rightClickHandler);
});

function makeDraggable(element) {
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    element.addEventListener('mousedown', (event) => {
        isDragging = true;
        offsetX = event.clientX - element.getBoundingClientRect().left;
        offsetY = event.clientY - element.getBoundingClientRect().top;
        element.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (event) => {
        if (isDragging) {
            element.style.left = `${event.clientX - offsetX}px`;
            element.style.top = `${event.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        element.style.cursor = 'grab';
    });
}

function togglePopup(x, y) {
    let popup = document.getElementById(x);
    popup.style.display = "flex";

    document.addEventListener("click", function closePopup(event) {
        if (!popup.contains(event.target) && event.target.id !== y) {
            popup.style.display = "none";
            document.removeEventListener("click", closePopup);
        }
    });
}

function showDivBaby(x, y, z) {
    let contentA = document.getElementById(x);
    let contentB = document.getElementById(y);
    let contentC = document.getElementById(z);
    contentA.style.display = "flex";
    contentB.style.display = "none";
    contentC.style.display = "none"
}

function changeColor(x, y, z) {
    let contentA = document.getElementById(x);
    let contentB = document.getElementById(y);
    let contentC = document.getElementById(z);
    contentA.style.color = "#9ec8b9";
    contentB.style.color = "#5c8374";
    contentC.style.color = "#5c8374";
}

function openModal(imgElement) {
    let modal = document.getElementById("imageModal");
    let modalImage = document.getElementById("modalImage");

    modal.style.display = "flex";
    modal.style.visibility = "visible";
    modalImage.src = imgElement.src;
}

// Close Modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
