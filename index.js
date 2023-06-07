const divEjemplo=document.getElementById("ejemplo");
console.log(divEjemplo);

const btnSi = () => alert("Sabia que si");
const btnNo = (event) =>  {
    console.log(event)
    console.log(event.target);
    let target = event.target;
    randomX = numeroRandom(0,500);
    randomY = numeroRandom(0,500);
    target.style.position = "absolute";
    target.style.top = randomX + "px";
    target.style.left = randomY + "px";
    console.log(target);
} 

const numeroRandom = (min,max) => {
    return Math.floor(Math.random()*(max-min))
}
