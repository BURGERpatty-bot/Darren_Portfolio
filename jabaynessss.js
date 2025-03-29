// calls

makeDraggable(document.getElementById('arduinoContainer'));
makeDraggable(document.getElementById('digitalArtContainer'));
makeDraggable(document.getElementById('indieGameContainer'));

// functions

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

document.addEventListener("DOMContentLoaded", function () {
    const leftBody = document.querySelector(".leftBody");
    const rightBody = document.querySelector(".rightBody");

    leftBody.addEventListener("click", function () {
        leftBody.style.width = "80%";
        leftBody.style.opacity = "1";
        leftBody.style.filter = "blur(0)";

        rightBody.style.width = "20%";
        rightBody.style.opacity = "0.3";
        rightBody.style.filter = "blur(5px)";
    });

    rightBody.addEventListener("click", function () {
        rightBody.style.width = "80%";
        rightBody.style.opacity = "1";
        rightBody.style.filter = "blur(0)";

        leftBody.style.width = "20%";
        leftBody.style.opacity = "0.5";
        leftBody.style.filter = "blur(5px)";
    });
});

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