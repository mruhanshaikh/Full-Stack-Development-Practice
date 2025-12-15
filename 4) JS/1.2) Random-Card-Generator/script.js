//  <i class="ri-trophy-fill"></i>
let teams=[
    {
      captain:"url(asset/dhoni.jpg)",
      name:"Mahendra Singh Dhoni",
      logo:"asset/chennai-logo.jpg",
      trophy:"5"
    },
    {
      captain:"url(asset/kohli.jpg)",
      name:"Virat Kohli",
      logo:"asset/rcb-logo.jpg",
      trophy:"1"
    },
    {
      captain:"url(asset/rohit.jpg)",
      name:"Rohit Sharma",
      logo:"asset/mumbai-logo.jpg",
      trophy:"5"
    },
    {
      captain:"url(asset/gautum.jpg)",
      name:"Gautam Gambhir",
      logo:"asset/kkr-logo.jpg",
      trophy:"2"
    },
];
let btn=document.querySelector('button');
let card=document.querySelector('.card');
let item1=document.querySelector('.item1');
let h1=document.querySelector('h1');
let item2=document.querySelector('.item2');
let item3=document.querySelector('.item3');
let item4=document.querySelector('.item4');
btn.addEventListener('click',()=>{
    let random=Math.floor(Math.random()*teams.length);
    item1.style.backgroundImage=teams[random].captain;
    h1.innerHTML=teams[random].name;
    item3.style.backgroundImage=`url(${teams[random].logo})`;
    let icons="";
    for(let i=0;i<teams[random].trophy;i++){
        icons+='<i class="ri-trophy-fill"></i>';
    }
    item4.innerHTML=icons;
    card.style.backgroundImage="none";
})