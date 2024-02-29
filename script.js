const images=document.querySelectorAll(".products .card");
var idd=0;
const pickles=[[0,0,0],[1,2,3],[2,3,4],[2,3,4],[8,9,10],[1,2,3],[2,3,4],[5,6,7],[8,9,10],[8,9,10],[1,2,3],[2,3,4],[5,6,7],[8,9,10],[1,2,3],[2,3,4],[5,6,7],[8,9,10],[8,9,10],[1,2,3],[2,3,4],[5,6,7],[8,9,10],[8,9,10],[1,2,3],[2,3,4],[5,6,7],[8,9,10],[1,2,3],[2,3,4],[5,6,7],[8,9,10]];
const names=["name1","name2","name3","name4","name5","name6","name7","name8","name9","name10","name11","name12","name13","name14","name15","name16","name17","name18","name19","name20"];
images.forEach((im)=>{
    const divv=document.querySelector(".details");
    const divvv=divv.cloneNode(true);
    divvv.id=idd;
    im.appendChild(divvv);
    idd=idd+1;
})
const all=document.querySelectorAll(".card");
const imagesArray = Array.from(all);
imagesArray.forEach((one)=>{
    const det=one.querySelector(".details")
    const onee=one.querySelector("#quar");
    const two=one.querySelector("#half");
    const three=one.querySelector("#full");
    const identity=det.id;
    onee.innerHTML=`${pickles[Number(identity)][0]}`;
    two.innerHTML=`${pickles[Number(identity)][1]}`;
    three.innerHTML=`${pickles[Number(identity)][2]}`;
})
images.forEach((ima)=>{
    const deet=ima.querySelector(".details");
    const nam=deet.querySelector(".head1");
    const idddd=deet.id;
    nam.innerHTML=`${names[idddd]}`;
})