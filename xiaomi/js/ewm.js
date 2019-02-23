let fixedBox=document.querySelector(".fixedBox:first-child");
console.log(fixedBox);
let ewm=document.querySelector(".ewm");
fixedBox.onmouseenter=function(){
    ewm.style.display="block"
};
fixedBox.onmouseleave=function () {
    ewm.style.display="none"
};