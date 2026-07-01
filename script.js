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

Date: July 01, 2026 

Dear Kenneth,

I never imagined this day would come. I never expected that someone like you would enter my life.

First of all, thank you for accepting me completely—for loving me despite all my flaws. Thank you for being there on the days when I didn't even know how to smile. Thank you for making me feel valued, even if it was only for a chapter of my life. You made me feel loved in a way I will never forget.

But despite all of that, I'm truly sorry because I can no longer continue what we have.

The truth is, I've only recently realized that I'm not ready to spend my life committed to one person. I still have so much growing to do. I want the freedom to discover who I am, to meet new people without the weight of commitment, and to understand myself before I can truly give my heart to someone else.

You came into my life at the wrong time—not because you were wrong, but because I was still becoming the person I'm meant to be. My life is still full of confusion, and I'm still trying to find my own path.

Please believe me when I say this isn't because I've fallen for someone else. There is no one else. This decision isn't about replacing you; it's about finding myself again. I need to be free, to rebuild who I am, and to become someone I can be proud of.

I know I fell short in so many ways. I couldn't love you the way you loved me. I couldn't return everything you gave so selflessly. That wasn't your fault—it was mine. And I will always carry the guilt of knowing that I couldn't give you the love you truly deserved.

I'm sorry for coming into your life if all I did was leave you with pain. I'm sorry if you spent so much time, love, and effort on someone who couldn't stay. You deserved someone who was certain about you from the very beginning.

I'm also sorry that we won't get to fulfill the dreams we once talked about together. It breaks my heart knowing that those dreams will remain unfinished because of me.

Please take care of yourself. Keep chasing your dreams. You are an incredible person—kind, brave, and stronger than you realize. I sincerely hope that life gives you every happiness you've always deserved.

No amount of "I'm sorry" will ever be enough to heal the pain I've caused. If I could take away your hurt, I would. But all I can do now is apologize with all my heart and hope that, one day, you'll find peace.

Even though our story won't last forever, I want you to know that I truly loved you. My love may not have been enough, but it was real.

I hope that someday you'll meet someone who can love you better than I ever could—someone who will fill every space where I failed and give you the future that I couldn't.

I will never forget you. You will always remain one of the most beautiful memories of my life. I'll continue praying for your healing, your happiness, and for the day when the wounds I caused become nothing more than distant memories.

I deeply regret everything I've done. Some mistakes cannot be undone, and I know I may never deserve your forgiveness. But I will carry the lessons you taught me for the rest of my life.

I don't know how to continue this letter anymore. Maybe this is where my words have to end.

I love you, Kenneth.

Goodbye.



— Emil John Rey 
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
