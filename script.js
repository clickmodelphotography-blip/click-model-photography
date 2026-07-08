// ===============================
// CLICK MODEL PHOTOGRAPHY
// SCRIPT.JS
// ===============================

// LIGHTBOX

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

galleryImages.forEach((img) => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;

    });

});

// CLOSE BUTTON

if(closeBtn){

    closeBtn.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}

// CLOSE WHEN CLICK OUTSIDE

if(lightbox){

    lightbox.addEventListener("click", (e) => {

        if(e.target === lightbox){

            lightbox.style.display = "none";

        }

    });

}

// ESC KEY CLOSE

document.addEventListener("keydown", (e)=>{

    if(e.key === "Escape"){

        lightbox.style.display = "none";

    }

});

// HEADER SHADOW

window.addEventListener("scroll",()=>{

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.background = "rgba(0,0,0,0.85)";

    }else{

        header.style.background = "rgba(0,0,0,0.65)";

    }

});

// CONTACT FORM

const form = document.querySelector(".contact-form");

if(form){

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        alert("Thank you! We will contact you soon.");

        form.reset();

    });

}