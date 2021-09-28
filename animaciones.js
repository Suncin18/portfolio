/*
skills = section skills
skillPack = html, css, js, nodejs, mongodb
iSKill = icono de skills
imgView = imagenes de proyectos
imgAbout = imagen de seccion about
xSkills = El scroll necesario para la animación de skills
xAbout = El scroll necesario para la animación de about
about-text = Texto del about, aparecerá desde la derecha hacia la izquierda
lightBox = contenedor del lightbox de proyectos
projectText = descripción del proyecto
btnProject = Enlace a cada proyecto
*/

// const goLeft = document.getElementById('go-left');
const skills = document.getElementById('go-right');
const imgView = document.querySelectorAll('.imgAnimation');
const imgAbout = document.getElementById('about-img');
const aboutText = document.getElementById('about-text');
const lightBox = document.querySelector('.container-lightbox');
const projectText = document.querySelector('.copy');
const projectText2 = document.querySelector('.copy-2');
const btnProject = document.getElementById('btn-project');
const skillPack = document.querySelectorAll('.skill_hover');
const imgSkills = document.getElementById('img-skills');

//Esta es la función para el hover en skills-sct
for(let i=0;i<skillPack.length;i++){
    skillPack[i].addEventListener('mouseover', ()=>{
        switch (i){
            case 0:
                imgSkills.src = 'img/html.png';
                break;
            case 1:
                imgSkills.src = 'img/css.png';
                break;
            case 2:
                imgSkills.src = 'img/javascript.png';
                break;
            case 3:
                imgSkills.src = 'img/nodejs.png';
                break;
            case 4:
                imgSkills.src = 'img/mongoDB.png';
                break;
            default:
                imgSkills.src = 'img/skills.png';
                break;
        }
    });
}

window.addEventListener('scroll', ()=>{
    let scrollActual = window.scrollY;

    // Aqui denifimos las variables en las que nos detendremos
    let xSkills;
    let detenerScrollSkills;
    let scrollMostrarProyectos;
    let empezarEfectoAbout;

    // Con este if cambiamos los valores del scroll en base a la resolución del dispositivo
    if((window.screen.width > 359)&&(window.screen.width < 767)){
        xSkills = (scrollActual - 700);
        detenerScrollSkills = 3;
        scrollMostrarProyectos = 1160;
        empezarEfectoAbout = 1745;
    }else if(window.screen.width < 360){
        xSkills = (scrollActual - 558);
    }else{
        xSkills = (scrollActual - 590);
        detenerScrollSkills = 58;
        scrollMostrarProyectos = 1200;
        empezarEfectoAbout = 1145;
    }

    let xAbout = (scrollActual - 1721);
    let xAboutText = (-scrollActual + 1700);
    if(xSkills<detenerScrollSkills){
        skills.style.transform = `translateX(${xSkills}px)`;
    }
    console.log('Scroll a cambiar: '+ xSkills);
    console.log('Detener scroll: '+ detenerScrollSkills);

    //1094
    if(scrollActual<scrollMostrarProyectos){
        imgView.forEach(element => {
            element.style.opacity = 0;
        });
    }else{
        imgView.forEach(element => {
            element.style.opacity = 1;
        });
    }

    //1721
    if(scrollActual<1721){
        imgAbout.style.transform = `translateX(${xAbout}px)`;
    }
    if(scrollActual<1721 && scrollActual>empezarEfectoAbout){
        aboutText.style.paddingLeft = `${xAboutText}px`;
    }
});

// LightBox
// imgView.forEach(element => {
//     element.addEventListener('click', ()=>{
//         lightBox.classList.toggle('move');
//         if(element[0]){
//             console.log('elemento 0');
//         }else{
//             console.log('other one');
//         }
//     });
// });
for(let i=0;i<imgView.length;i++){
    imgView[i].addEventListener('click', ()=>{
        lightBox.classList.toggle('move');
        switch (i){
            case 0:
                projectText.innerText = 'Tecnologías utilizadas: HTML, CSS y JS.';
                projectText2.innerText = 'Proyecto personal sobre una landing page para una barbería con atractivas animaciones.';
                btnProject.setAttribute('href', 'https://suncin18.github.io/BarberShop/');
                break;
            case 1:
                projectText.innerText = 'Tecnologías utilizadas: HTML, CSS.';
                projectText2.innerText = 'Proyecto de una landing page para la Universidad tomando un diseño de photoshop e implementandolo en código puro.';
                btnProject.setAttribute('href', 'https://suncin18.github.io/SoftLoop/');
                break;
            case 2:
                projectText.innerText = 'Tecnologías utilizadas: HTML, CSS, JS, NodeJS, MongoDB y Git';
                projectText2.innerText = 'FullStack app con HTML, CSS y JS en el front-end y NodeJS en el back-end, el back-end está en Heroku y el front-end en GitHub, la base de datos está almacenada por medio de AWS con la función que ofrece MongoDB Atlas. La aplicación tiene un log in básico, recibe información del usuario para generar una factura la cual se envía por un responsive HTML email, usando gmail y además se muestra en la sección "historial". Si no desea registrarse (la aplicación le permitirá hacerlo) puede usar estos credenciales: USUARIO: tdevelopment4@gmail.com CONTRASEÑA: Sun#66';
                btnProject.setAttribute('href', 'https://suncin18.github.io/FacturacionD/');
                break;
            case 3:
                projectText.innerText = 'Tecnologías utilizadas: HTML, CSS, JS';
                projectText2.innerText = 'Landing page para un restaurante ficticio con su respectivo menú de comidas, responsive y con un menú de navegación fijo.';
                btnProject.setAttribute('href', 'https://suncin18.github.io/restaurant/');
                break;
            default:
                break;
        }
    });
}

lightBox.addEventListener('click', ()=>{
    lightBox.classList.toggle('move');
});

// MENÚ RESPONSIVE
const btnMenuResponsive = document.getElementById('btn-menu-responsive');
const menu = document.querySelector('.nav_items_container');
btnMenuResponsive.addEventListener('click', ()=>{
    menu.classList.toggle('move');
});

document.addEventListener('click', (e)=>{
    if(!e.target.closest('#btn-menu-responsive')){
        menu.classList.remove('move');
    }
});