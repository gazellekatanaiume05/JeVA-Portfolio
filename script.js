/*=====================================================
    Jerome Gimenez Portfolio
    script.js
======================================================*/

//==============================
// PRELOADER
//==============================

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    preloader.style.opacity = "0";

    preloader.style.visibility = "hidden";

    preloader.style.transition = ".6s";

});

//==============================
// AOS
//==============================

AOS.init({

    duration:1000,

    once:true,

    offset:120,

    easing:"ease-in-out"

});

//==============================
// TYPING EFFECT
//==============================

new Typed(".typing",{

    strings:[

        "General Virtual Assistant",

        "Executive Virtual Assistant",

        "Amazon Virtual Assistant",

        "Shopify Virtual Assistant",

        "Technical Support Specialist",

        "Customer Service Professional"

    ],

    typeSpeed:70,

    backSpeed:40,

    backDelay:1800,

    loop:true

});

//==============================
// MOBILE MENU
//==============================

const menuBtn=document.querySelector(".menu-btn");

const navLinks=document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});

//==============================
// CLOSE MENU AFTER CLICK
//==============================

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});

//==============================
// STICKY NAVBAR
//==============================

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    header.classList.toggle("sticky",window.scrollY>80);

});

//==============================
// SCROLL PROGRESS BAR
//==============================

const progress=document.createElement("div");

progress.className="progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

    const total=

    document.documentElement.scrollHeight-

    document.documentElement.clientHeight;

    const progressWidth=

    (window.pageYOffset/total)*100;

    progress.style.width=progressWidth+"%";

});

//==============================
// SCROLL TO TOP BUTTON
//==============================

const topButton=document.createElement("div");

topButton.id="scrollTop";

topButton.innerHTML='<i class="fas fa-chevron-up"></i>';

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY>450){

        topButton.classList.add("active");

    }else{

        topButton.classList.remove("active");

    }

});

topButton.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

//==============================
// ACTIVE NAVIGATION
//==============================

const sections=document.querySelectorAll("section");

const nav=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-150;

        const height=section.clientHeight;

        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });

    nav.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

//==============================
// COUNTER ANIMATION
//==============================

const counters=document.querySelectorAll(".stat-box h2");

let started=false;

window.addEventListener("scroll",()=>{

    const stats=document.querySelector(".stats");

    if(!stats) return;

    const trigger=stats.offsetTop-400;

    if(window.scrollY>trigger && !started){

        started=true;

        counters.forEach(counter=>{

            let target=parseInt(counter.innerText);

            let current=0;

            let increment=Math.ceil(target/70);

            const update=()=>{

                current+=increment;

                if(current>target){

                    current=target;

                }

                if(counter.innerText.includes("%")){

                    counter.innerText=current+"%";

                }else if(counter.innerText.includes("+")){

                    counter.innerText=current+"+";

                }else{

                    counter.innerText=current;

                }

                if(current<target){

                    requestAnimationFrame(update);

                }

            };

            update();

        });

    }

});

//==============================
// FADE UP EFFECT
//==============================

const fadeItems=document.querySelectorAll(".fade-up");

function revealFade(){

    fadeItems.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        if(top<window.innerHeight-100){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealFade);

revealFade();

//==============================
// HERO PARALLAX
//==============================

window.addEventListener("mousemove",(e)=>{

    const image=document.querySelector(".hero-image img");

    if(!image) return;

    let x=(window.innerWidth/2-e.pageX)/40;

    let y=(window.innerHeight/2-e.pageY)/40;

    image.style.transform=

    `translate(${x}px,${y}px)`;

});

//==============================
// CARD TILT
//==============================

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const rotateX=((y/rect.height)-0.5)*-10;

        const rotateY=((x/rect.width)-0.5)*10;

        card.style.transform=

        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-10px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});

//==============================
// BUTTON RIPPLE
//==============================

document.querySelectorAll(".btn").forEach(button=>{

    button.addEventListener("click",(e)=>{

        const circle=document.createElement("span");

        const diameter=Math.max(

            button.clientWidth,

            button.clientHeight

        );

        circle.style.width=

        circle.style.height=

        diameter+"px";

        circle.style.left=

        e.offsetX-diameter/2+"px";

        circle.style.top=

        e.offsetY-diameter/2+"px";

        circle.classList.add("ripple");

        const ripple=

        button.getElementsByClassName("ripple")[0];

        if(ripple){

            ripple.remove();

        }

        button.appendChild(circle);

    });

});

//==============================
// SMOOTH SECTION REVEAL
//==============================

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{

    threshold:.15

});

document.querySelectorAll(".reveal").forEach(el=>{

    observer.observe(el);

});

//==============================
// HERO TEXT ANIMATION
//==============================

const heroText=document.querySelector(".hero-text");

if(heroText){

    heroText.animate([

        {

            opacity:0,

            transform:"translateY(50px)"

        },

        {

            opacity:1,

            transform:"translateY(0)"

        }

    ],{

        duration:1200,

        easing:"ease-out"

    });

}

//==============================
// FLOATING BACKGROUND PARTICLES
//==============================

for(let i=0;i<25;i++){

    const particle=document.createElement("div");

    particle.classList.add("particle");

    particle.style.left=Math.random()*100+"vw";

    particle.style.animationDuration=

    8+Math.random()*10+"s";

    particle.style.animationDelay=

    Math.random()*5+"s";

    particle.style.opacity=Math.random();

    document.body.appendChild(particle);

}

//==============================
// PARTICLE STYLE
//==============================

const particleStyle=document.createElement("style");

particleStyle.innerHTML=`

.particle{

position:fixed;

bottom:-20px;

width:6px;

height:6px;

background:rgba(255,123,0,.35);

border-radius:50%;

pointer-events:none;

animation:floatParticle linear infinite;

z-index:-1;

}

@keyframes floatParticle{

0%{

transform:translateY(0);

opacity:0;

}

20%{

opacity:1;

}

100%{

transform:translateY(-120vh);

opacity:0;

}

}

.ripple{

position:absolute;

border-radius:50%;

transform:scale(0);

background:rgba(255,255,255,.35);

animation:ripple .6s linear;

pointer-events:none;

}

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}

.nav-links.active{

display:flex;

flex-direction:column;

position:absolute;

top:80px;

left:0;

width:100%;

background:#111;

padding:30px;

gap:25px;

text-align:center;

}

.nav-links a.active{

color:#ff7b00;

}

header.sticky{

background:rgba(10,10,10,.95);

box-shadow:0 10px 30px rgba(0,0,0,.25);

}

`;

document.head.appendChild(particleStyle);

//==============================
// CONSOLE MESSAGE
//==============================

console.log(
"%cJerome Gimenez Portfolio Loaded Successfully",
"color:#ff7b00;font-size:16px;font-weight:bold;"
);
