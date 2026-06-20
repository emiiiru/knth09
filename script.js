// ===============================
// PAGE NAVIGATION
// ===============================

function showSection(id){

    const sections = document.querySelectorAll(".screen");

    sections.forEach(sec=>{
        sec.classList.add("hidden");
    });

    document.getElementById(id).classList.remove("hidden");
}

// ===============================
// INTRO SLIDES
// ===============================

function nextSlide(num){

    document.querySelectorAll(".intro-card")
    .forEach(card => card.classList.add("hidden"));

    document.getElementById("slide"+num)
    .classList.remove("hidden");

    if(num === 3){
        startDistance();
    }
}

function showPassword(){
    showSection("password-section");
}

// ===============================
// PASSWORD
// ===============================

function checkPassword(){

    const input = document.getElementById("passwordInput").value;

    if(input === "52326"){
        showSection("home-section");
        startDays();
        startHearts();
    }else{
        document.getElementById("passwordMessage")
        .innerText = "Wrong password ❤️";
    }
}

// ===============================
// DISTANCE ANIMATION
// ===============================

function startDistance(){

    let km = 0;

    const el = document.getElementById("distanceCounter");

    const interval = setInterval(()=>{

        km += 1;
        el.innerText = km + " KM";

        if(km >= 15){
            clearInterval(interval);
        }

    },50);
}

// ===============================
// DAYS COUNTER
// ===============================

function startDays(){

    const startDate = new Date("2026-05-23");
    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("daysCounter")
    .innerText = days + " Days ❤️";
}

function updateDays(){
    startDays();
}

// ===============================
// NAV BUTTONS
// ===============================

function openLetter(){
    showSection("letter-section");
    startTyping();
}

function openGallery(){
    showSection("gallery-section");
}

function openSong(){
    showSection("song-section");
}

function openAbout(){
    showSection("about-section");
}

// return home
function returnHome(){
    showSection("home-section");
}

// ===============================
// LETTER TYPING EFFECT
// ===============================

const letterText = `
My Love,

I don't know how to start this letter, but I want to begin by saying thank you. Thank you for your support and for staying with me through everything. I never expected that I would find you during such a difficult time in my life.

I also want to apologize for the days when I wasn't able to show you how much I love and appreciate you. I'm sorry for the changes you've noticed in me. However, those changes do not mean an ending—they are simply the beginning of something new.

There were times when I couldn't get you out of my mind. There were times when I felt like I couldn't do anything without you. But as time passed, I slowly became okay. The sadness started to fade, and I learned how to do the things I used to do before we met.

What I mean is that we should continue growing as individuals. We should keep doing the things we loved and dreamed about before we met each other. Love can wait, and sometimes giving each other space is also a way of loving.

I hope we both continue to grow and achieve our dreams together someday. Whether that day finds us still together or not, you will always have a special place in my heart. You are one of my favorite characters in the story of my life—a story that remains untold.

Please always take care of yourself. You are important, and we only have one life to live. Since I am far from your side, I hope you stay strong and continue moving forward no matter what challenges come your way.

If life ever becomes too difficult and you feel like you can't handle it alone, remember that I am here for you, even from afar. You are very important to me, and I will always care about your well-being.

I will continue to pray for you, for your happiness, your safety, and for the path that lies ahead of us. No matter where life takes us, I hope that we both find the strength and courage to keep going.
Lastly, I want to say this: if an opportunity comes your way, don't hesitate to take it. Grab it and make the most of it. No matter how far apart we may be, I will always be here, supporting you from a distance.

Again, I love you, my Kenneth.

— Emil ❤️
`;

function startTyping(){

    const el = document.getElementById("typedLetter");
    el.innerHTML = "";

    let i = 0;

    function type(){
        if(i < letterText.length){
            el.innerHTML += letterText.charAt(i);
            i++;
            setTimeout(type, 25);
        }
    }

    type();
}

// ===============================
// GALLERY LIGHTBOX
// ===============================

const images = document.querySelectorAll(".knth");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

images.forEach(img=>{
    img.addEventListener("click", ()=>{
        lightbox.classList.remove("hidden");
        lightboxImg.src = img.src;
    });
});

document.getElementById("closeLightbox")
.addEventListener("click", ()=>{
    lightbox.classList.add("hidden");
});

// ===============================
// HEART ANIMATION
// ===============================

function createHeart(){

    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

    document.getElementById("heart-container")
    .appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);
}

function startHearts(){
    setInterval(createHeart, 400);
}

// ===============================
// CLICK HEART EFFECT
// ===============================

document.addEventListener("click", (e)=>{

    const burst = document.createElement("div");

    burst.innerHTML = "💖";

    burst.style.position = "fixed";
    burst.style.left = e.clientX + "px";
    burst.style.top = e.clientY + "px";

    burst.style.fontSize = "18px";
    burst.style.pointerEvents = "none";

    burst.style.animation = "floatUp 1s linear forwards";

    document.body.appendChild(burst);

    setTimeout(()=>{
        burst.remove();
    },1000);

});



function openClue(){
    document.getElementById("clue-modal")
    .classList.remove("hidden");
}

function closeClue(){
    document.getElementById("clue-modal")
    .classList.add("hidden");
}