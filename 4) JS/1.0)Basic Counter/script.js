let count=document.querySelector('h1');
let tcount=0;
let plus=document.querySelector(".plus");
let minus=document.querySelector(".minus");

plus.addEventListener("click",()=>{
        tcount++;
        count.textContent=tcount;
        count.style.color="red";
})
minus.addEventListener("keydown",()=>{
        tcount--;
        count.textContent=tcount;
        count.style.color="red";
})