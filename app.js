let menu= document.querySelector('#menu-btn');
let navbar= document.querySelector('.navbar');
let home= document.querySelector('#home');
let loginbtn= document.querySelector('#login-btn');
let loginForm= document.querySelector('.login-form-container');
let closebtn= document.querySelector('.close-login-form');


menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

loginbtn.onclick=()=>{
    loginForm.classList.add('active');
}
closebtn.onclick=()=>{
    loginForm.classList.remove('active');
}


window.onscroll=()=>{

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }
    else{
        document.querySelector('.header').classList.remove('active');
    }

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

window.onload=()=>{

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }
    else{
        document.querySelector('.header').classList.remove('active');
    }
}

home.onmousemove = (e) =>{
    document.querySelectorAll('.home-parallax').forEach(elm => {
        let speed =elm.getAttribute('data-speed');
        let x=(window.innerWidth - e.pageX * speed) / 90;
        let y=(window.innerHeight - e.pageY * speed) / 90;

        elm.style.transform=`translateX(${y}px) translateY(${x}px)`;
    })
}
home.onmouseleave = () =>{
    document.querySelectorAll('.home-parallax').forEach(elm => {

        elm.style.transform=`translateX(0px) translateY(0px)`;
    })
}


