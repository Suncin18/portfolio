/*
skills = section skills
imgView = imagenes de proyectos
imgAbout = imagen de seccion about
xSkills = El scroll necesario para la animación de skills
xAbout = El scroll necesario para la animación de about
about-text = Texto del about, aparecerá desde la derecha hacia la izquierda
lightBox = contenedor del lightbox de proyectos
projectText = descripción del proyecto
*/

// const goLeft = document.getElementById('go-left');
const skills = document.getElementById('go-right');
const imgView = document.querySelectorAll('.imgAnimation');
const imgAbout = document.getElementById('about-img');
const aboutText = document.getElementById('about-text');
const lightBox = document.querySelector('.container-lightbox');
const projectText = document.querySelector('.copy');
const projectText2 = document.querySelector('.copy-2');

console.log('Resolusión de la pantalla: '+ window.screen.width);

window.addEventListener('scroll', ()=>{
    let scrollActual = window.scrollY;
    // let xN = -scrollActual+"px";
    // Aqui denifimos las variables en las que nos detendremos
    let xSkills;
    let detenerScrollSkills;
    let scrollMostrarProyectos;
    let empezarEfectoAbout;

    // Con este if cambiamos los valores del scroll en base a la resolución del dispositivo
    // 359
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
    // goLeft.style.transform = `translateX(${xN})`;
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
                break;
            case 1:
                projectText.innerText = 'Tecnologías utilizadas: HTML, CSS.';
                projectText2.innerText = 'Proyecto de una landing page para la Universidad tomando un diseño de photoshop e implementandolo en código puro.';
                break;
            case 2:
                projectText.innerText = 'Tecnologías utilizadas: HTML, CSS y JS.';
                projectText2.innerText = 'Proyecto en JavaScript puro implementando validación de formularios para nombres, correo, contraseña segura, campos obligatorios, concruencia en las contraseñas y generando mensajes de error y/o éxito dinámicamente.';
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