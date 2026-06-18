/* =========================
   TYPEWRITER ANIMATION
========================= */

const text = `Dear Princess 👑🌸

If I made any mistake, I truly apologize.

I am trying every day to become a better person,
so that no one ever gets hurt because of me.

I only wish for your happiness and smile. ✨`;

let i = 0;
const typeDiv = document.getElementById("typewriter");

function typeWriter(){
if(i < text.length){
typeDiv.innerHTML += text.charAt(i);
i++;
setTimeout(typeWriter, 40);
}
}
typeWriter();


/* =========================
   MUSIC TOGGLE BUTTON
========================= */

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
if(music.paused){
music.play();
musicBtn.innerHTML = "⏸ Pause Piano";
}else{
music.pause();
musicBtn.innerHTML = "🎵 Play Piano";
}
});


/* =========================
   SAKURA PETALS RAIN
========================= */

function createSakura(){
const sakura = document.createElement("div");
sakura.innerHTML = "🌸";
sakura.style.position = "fixed";
sakura.style.left = Math.random() * 100 + "vw";
sakura.style.top = "-20px";
sakura.style.fontSize = (15 + Math.random() * 20) + "px";
sakura.style.opacity = "0.8";
sakura.style.zIndex = "5";
sakura.style.pointerEvents = "none";

document.body.appendChild(sakura);

let fall = setInterval(() => {
let top = parseFloat(sakura.style.top);
sakura.style.top = top + 2 + "px";

if(top > window.innerHeight){
sakura.remove();
clearInterval(fall);
}
}, 20);
}

setInterval(createSakura, 250);


/* =========================
   FLOATING HEARTS
========================= */

function createHeart(){
const heart = document.createElement("div");
heart.innerHTML = "💖";
heart.style.position = "fixed";
heart.style.left = Math.random() * 100 + "vw";
heart.style.bottom = "-20px";
heart.style.fontSize = (15 + Math.random() * 25) + "px";
heart.style.zIndex = "6";
heart.style.pointerEvents = "none";

document.body.appendChild(heart);

let rise = setInterval(() => {
let bottom = parseFloat(heart.style.bottom);
heart.style.bottom = bottom + 2 + "px";

if(bottom > window.innerHeight){
heart.remove();
clearInterval(rise);
}
}, 20);
}

setInterval(createHeart, 400);


/* =========================
   TWINKLING STARS CANVAS
========================= */

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for(let i=0;i<150;i++){
stars.push({
x: Math.random() * canvas.width,
y: Math.random() * canvas.height,
r: Math.random() * 2,
d: Math.random() * 0.5
});
}

function drawStars(){
ctx.clearRect(0,0,canvas.width,canvas.height);

for(let s of stars){
ctx.beginPath();
ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
ctx.fillStyle = "white";
ctx.fill();

s.y += s.d;

if(s.y > canvas.height){
s.y = 0;
s.x = Math.random() * canvas.width;
}
}

requestAnimationFrame(drawStars);
}
drawStars();


/* =========================
   SAKURA WISH BUTTON
========================= */

const wishBtn = document.getElementById("wishBtn");
const hiddenMessage = document.getElementById("hiddenMessage");
const particleBox = document.getElementById("particle-container");

wishBtn.addEventListener("click", () => {

hiddenMessage.style.display = "block";

/* PARTICLE EXPLOSION */
for(let i=0;i<80;i++){
const p = document.createElement("div");
p.innerHTML = "✨";
p.style.position = "fixed";
p.style.left = "50%";
p.style.top = "50%";
p.style.fontSize = (10 + Math.random()*20) + "px";
p.style.zIndex = "20";
p.style.pointerEvents = "none";

document.body.appendChild(p);

const angle = Math.random() * 2 * Math.PI;
const speed = Math.random() * 6;

let x = 0;
let y = 0;

let move = setInterval(() => {
x += Math.cos(angle) * speed;
y += Math.sin(angle) * speed;

p.style.transform = `translate(${x}px,${y}px)`;

if(Math.abs(x) > 400 || Math.abs(y) > 400){
p.remove();
clearInterval(move);
}
}, 20);
}
});


/* =========================
   RESIZE FIX
========================= */

window.addEventListener("resize", () => {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
});