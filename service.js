const boxes = document.querySelectorAll(".box");

const btnDark = document.querySelector(".Dark")
const btnLight = document.querySelector(".Light")
const frame = document.querySelector(".frame")

const sectionRight = document.querySelector(".section_right")
const langFr = document.querySelector(".langFr")
const langEn = document.querySelector(".langEn")

const header = document.querySelector(".header")

window.addEventListener('scroll',checkBoxes);
function checkBoxes(){
    const triggerBottom = window.innerHeight/ 5 *4
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}

const darkMode = function (){
    document.body.style.backgroundColor = "#181818"
    btnDark.style.display = "none"
    btnLight.style.display = "block"
    frame.style.borderColor = "#FFFFFF"
    boxes.forEach(box => {
        box.style.backgroundColor = "#282828"
        box.style.color = "#FFFFFF"
        box.children[0].style.color = "#FFFFFF"
    })
    header.style.backgroundColor = "#181818"

    localStorage.setItem("theme", "dark-mode");
}
const lightMode = function(){
    document.body.style.backgroundColor = "white"
    btnDark.style.display = "block"
    btnLight.style.display = "none"
    frame.style.borderColor = "black"
    boxes.forEach(box => {
        box.style.backgroundColor = "white"
        box.style.color = "black"
        box.children[0].style.color = "black"
    })
    header.style.backgroundColor = "white"

    localStorage.setItem("theme", "light-mode");
}
const langOptionEn = function(){
    sectionRight.children[0].children[1].innerHTML = "32 years old"
    sectionRight.children[0].children[2].innerHTML = "Professional retraining in web developer"
    sectionRight.children[1].children[0].innerHTML = "Some projects available on my github or scrolling on this page"
    
    //body main div a div p
    document.body.children[2].children[0].children[0].children[1].children[1].innerHTML = "Show the statistics of a NBA player during a season with the API available on <i>balldontlie.io</i>"
    document.body.children[2].children[1].children[0].children[1].children[1].innerHTML = "Extension to install on a Chrome browser. Click on the blue cross to add a time bookmark on a youtube video (only). You can go back to this bookmark or you can delete it."
    document.body.children[2].children[2].children[0].children[1].children[1].innerHTML = "In the game of life, you can see the evolution of cellular automaton acccording to simple rules. The user can see this evolution with fixing the number of iterations and the size of the grid."
    document.body.children[2].children[3].children[0].children[1].children[1].innerHTML = "The timeline exposes 60 mathematicians from the newspaper \"Le Monde\" which dedicated a book for each of them. You can click on a name to see a short description. <span>En savoir plus</span> leads you to a page with the cover and the back cover of the book."
    document.body.children[2].children[4].children[0].children[1].children[1].innerHTML = "After registering, you can see the list of users and send private messages to one of them."
    document.body.children[2].children[5].children[0].children[1].children[1].innerHTML = "A site for posting some short news. An authentification system with <i>laravel/breeze</i>. Two languages available: french and english."

    langEn.style.borderBottom = "5px solid #0096FF"
    langFr.style.borderBottom = "5px solid white"

    localStorage.setItem("lang", "EN");
}
const langOptionFr = function(){
    sectionRight.children[0].children[1].innerHTML = "32 ans"
    sectionRight.children[0].children[2].innerHTML = "En reconversion d??veloppeur web"
    sectionRight.children[1].children[0].innerHTML = "Quelques projets disponibles sur mon github ou en scrollant sur cette page"
    
    //body main div a div p
    document.body.children[2].children[0].children[0].children[1].children[1].innerHTML = "Affiche les statistiques sur une saison d'un joueur NBA gr??ce ?? l'API disponible sur <i>balldontlie.io</i>"
    document.body.children[2].children[1].children[0].children[1].children[1].innerHTML = "Extension ?? installer sur un navigateur chrome. Ajout de l'overley croix bleue qui permet de marquer un temps sur une vid??o youtube (uniquement). Possibilit?? de revenir ?? cette marque ou de le supprimer."
    document.body.children[2].children[2].children[0].children[1].children[1].innerHTML = "Le jeu de la vie consiste ?? regarder l'??volution d'un automate cellulaire au cours du temps selon des r??gles simples. L'utilisateur peut voir l'??volution de l'automate selon le nombre d'it??rations choisi. Il peut ??galement modifier la taille de la grille."
    document.body.children[2].children[3].children[0].children[1].children[1].innerHTML = "Frise chronologique repr??sentant 60 math??maticiens abord??s dans les 60 livres de la collection <b>G??nies des math??matiques</b> publi??e par \"Le Monde\". Vous pouvez cliquer sur un  nom pour voir sa fiche r??capitulative. <span>En savoir plus</span> m??ne sur une page avec la couverture du livre et son r??sum??."
    document.body.children[2].children[4].children[0].children[1].children[1].innerHTML = "Apr??s s'??tre enregistr??, vous pouvez voir la liste des utilisateurs inscrits et leurs envoyer des messages priv??s avec actualisation instantan??e."
    document.body.children[2].children[5].children[0].children[1].children[1].innerHTML = "Un site pour poster une nouvelle. Syst??me d'authentification avec <i>laravel/breeze</i>. Site en fran??ais ou en anglais."

    langFr.style.borderBottom = "5px solid #0096FF"
    langEn.style.borderBottom = "5px solid white"
   
    localStorage.setItem("lang", "FR");
}

;(()=>{
    let theme = localStorage.getItem("theme")
    let lang = localStorage.getItem("lang")

    if(theme == "dark-mode"){
        darkMode()
    }else{
        lightMode()
    }
    if(lang == "EN"){
        langOptionEn()
    }else{
        langOptionFr()
    }
})()

btnDark.addEventListener("click",darkMode)
btnLight.addEventListener("click",lightMode)

langEn.addEventListener("click",langOptionEn)
langFr.addEventListener("click",langOptionFr)
