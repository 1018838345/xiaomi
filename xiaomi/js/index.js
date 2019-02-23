let pagers=document.querySelectorAll(".pagerBox>li");
let images=document.querySelectorAll(".imgBox>li");
let banner=document.querySelector(".banner");
console.log(banner);
let flag=false;
pagers.forEach(function (ele,index) {
    ele.onclick=function () {
        flag=true;                       //当flag为真，下面的条件继续执行
        now=index;
        for (let i=0;i<pagers.length;i++){
            pagers[i].classList.remove("active");
            images[i].classList.remove("active");
        }
        pagers[now].classList.add("active");
        images[now].classList.add("active");
    };
    });

let now=0;
function move() {
    now++;
    if (now===images.length){
        now=0;
    }
    if (now===-1){
        now=images.length-1;
    }
    for (let i=0;i<pagers.length;i++) {
        images[i].classList.remove("active");
        pagers[i].classList.remove("active");
    }
    images[now].classList.add("active");
    pagers[now].classList.add("active");
}

let st=setInterval(move,3000);
banner.onmouseenter=function () {
    clearInterval(st);
};
banner.onmouseleave=function () {
    if (flag){
        return;
    }
    st=setInterval(move,3000)
};

let next=document.querySelector(".right");
let prev=document.querySelector(".left");
let flag2=true;
next.onclick=function () {
    if (flag2) {
        // flag2=false;
        flag=true;
        move();
    }
};
prev.onclick=function () {
    if (flag2) {
        // flag2=false;
        now -= 2;
        flag = true;
        move();
    }
};
// banner.addEventListener("click",function () {
//      alert(666)
// })
// images.forEach(function (ele,index) {
//     ele.addEventListener("transitionend",function(){
//         flag2=true
//     })
// });