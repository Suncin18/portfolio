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
const pSkills = document.querySelector('.p_skills');
const btnAllProjects = document.getElementById('btn-all-projects');
const btnLanding = document.getElementById('btn-landing');
const btnNode = document.getElementById('btn-node');

//Esta es la función para el hover en skills-sct
for(let i=0;i<skillPack.length;i++){
    skillPack[i].addEventListener('mouseover', ()=>{
        switch (i){
            case 0:
                pSkills.textContent = 'Aquí inicia todo, tengo más 10 meses trabajando con HTML y sé sobre los nuevos estandares de HTML5, semantica, buenas prácticas y SEO.';
                pSkills.style.color = 'orange';
                break;
            case 1:
                pSkills.textContent = 'Tengo experiencia con la adaptación a diferentes resoluciones de pantalla (Responsive design) en lo cuál tengo más de 10 meses de experiencia, incluyendo HTML emails y los nuevos estandares de CSS3.';
                pSkills.style.color = 'blue';
                break;
            case 2:
                pSkills.textContent = 'El lenguaje de la web, tengo más de 6 meses de experiencia tanto al utilizarlo para crear animaciones, como para complementar junto con los media queries de CSS al realizar el responsive design hasta lo que implica el front end al momento de consumir APIs, conectar con el back end para el intercambio de información, manipulación del DOM, promesas, this, POO, protocolos HTTP, eventos, await/async, JSON, XML y los nuevos estandares de ESC6.';
                pSkills.style.color = 'yellow';
                break;
            case 3:
                pSkills.textContent = 'Continuando con JavaScript, ahora del lado del servidor, tengo más de 6 meses de experiencia trabajando el backend con NodeJS, utilizando NPM y populares dependencias como Express, Nodemon, CORS, Mongoose, Body-Parse. Amplio conocimiento en el uso de export/import, rutas, modelos, creación de APIs, MVC, comunicación con base de datos (MongoDB) y el front-end.';
                pSkills.style.color = 'greenyellow';
                break;
            case 4:
                pSkills.textContent = 'Tengo 1 mes trabajando con ASP.Net, MVC, POO, Entities, comunicación con base de datos SQL para realizar consultas, métodos GET y POST.';
                pSkills.style.color = 'purple';
                break;
            case 5:
                pSkills.textContent = 'Experiencia de 2 meses con Git para control de versiones, he utilizado Shell, GitKraken, BitBucket y GitHub.';
                pSkills.style.color = '#f34f29';
                break;
            case 6:
                pSkills.textContent = 'Complementando el stack de JavaScript, tengo más de 6 meses de experiencia en la creación de CRUDs. Comprendo el sistema de esquemas, colecciones, documentos y subdocumentos de MongoDB, los métodos POST, PUT, GET y DELETE.';
                pSkills.style.color = 'green';
                break;
            case 7:
                pSkills.textContent = 'Experiencia de 2 meses en el lenguaje de base de datos relacional SQL, he utilizado Oracle SQL y SQL Server para consultas, filtros, envío de datos y actualizaciones de los mismos, métodos JOIN, SET, UPDATE, DELETE.';
                pSkills.style.color = 'lightblue';
                break;
            default:
                // imgSkills.src = 'img/skills.png';
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
    // console.log('Scroll a cambiar: '+ xSkills);
    // console.log('Detener scroll: '+ detenerScrollSkills);

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

// Filtrar proyectos
btnAllProjects.addEventListener('click', ()=>{
    for(let i=0;i<imgView.length;i++){
        imgView[i].classList.remove('ocultar');
    }
});
btnLanding.addEventListener('click', ()=>{
    for(let i=0;i<imgView.length;i++){
        if(imgView[i].classList.contains('landing')){
            imgView[i].classList.remove('ocultar');
        }else{
            imgView[i].classList.add('ocultar');
        }
    }
});
btnNode.addEventListener('click', ()=>{
    for(let i=0;i<imgView.length;i++){
        if(imgView[i].classList.contains('node')){
            imgView[i].classList.remove('ocultar');
        }else{
            imgView[i].classList.add('ocultar');
        }
    }
});

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
                projectText.innerText = 'Tecnologías utilizadas: HTML, CSS, JS';
                projectText2.innerText = 'Landing page para un restaurante ficticio con su respectivo menú de comidas, responsive y con un menú de navegación fijo.';
                btnProject.setAttribute('href', 'https://suncin18.github.io/restaurant/');
                break;
            case 3:
                projectText.innerText = 'Tecnologías utilizadas: HTML, CSS, JS, NodeJS, MongoDB y Git';
                projectText2.innerText = 'FullStack app con HTML, CSS y JS en el front-end y NodeJS en el back-end, el back-end está en Heroku y el front-end en GitHub, la base de datos está almacenada por medio de AWS con la función que ofrece MongoDB Atlas. La aplicación tiene un log in básico, recibe información del usuario para generar una factura la cual se envía por un responsive HTML email, usando gmail y además se muestra en la sección "historial". Si no desea registrarse (la aplicación le permitirá hacerlo) puede usar estos credenciales: USUARIO: tdevelopment4@gmail.com CONTRASEÑA: Sun#66';
                btnProject.setAttribute('href', 'https://suncin18.github.io/FacturacionD/');
                break;
            case 4:
                projectText.innerText = 'Tecnologías utilizadas: HTML, CSS, JS, NodeJS, MongoDB y Git';
                projectText2.innerText = 'FullStack JavaScrip app para agendar citas en un gimnasio, se genera un código aleatoreo y se almacena en una base de datos, tiene un CRUD por lo que el usuario también puede cancelar su cita y el administrador puede ver la lista de todas las citas agendadas además de poder filtrarlas por fecha o código. Se implementan peticiones con la biblioteca AXIOS, se utiliza mongoose, express, nodemon, routes y otras bibliotecas en el back end.';
                btnProject.setAttribute('href', 'https://suncin18.github.io/gym-ticket/');
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