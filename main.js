const nav=document.querySelector(".navigation-mobile");
const bars=document.getElementById('bars');
const close=document.getElementById('close')
bars.addEventListener('click', ()=>{
    if(nav.style.top=="0%"){
    nav.style.top="-100%";
    bars.src="images/icon-hamburger.svg";
    }else{
        nav.style.top="0%";
        bars.src="images/icon-close.svg";
        
    }
});
