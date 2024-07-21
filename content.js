const navbar = document.createElement('div');
navbar.innerHTML = `
    <div class="navbar">
        <a href="#semestre1" id="semestre1Btn">Bloc scientifique</a>
        <a href="#semestre2" id="semestre2Btn">Bloc transversal</a>
        <a href="https://edt.univ-lyon1.fr/">Emploi du temps</a>
        <a href="https://tomuss.univ-lyon1.fr/S/2024/Automne/logout">Se déconnecter</a>
    </div>
`;

const dedi = document.createElement('div');
dedi.innerHTML = `
    Made with ❤️ by @<a href="https://github.com/lgrndev">lgrndev</a>
`
dedi.style.color = "orange";
dedi.style.position = "absolute";
dedi.style.top = '10px';
dedi.style.left = '10px';

document.body.appendChild(dedi);



const TopLine = document.querySelector('hr');

// Vérifie si l'élément TopLine existe pour éviter les erreurs
if (TopLine) {
    // Utilise insertAdjacentElement pour insérer la navbar après TopLine
    TopLine.insertAdjacentElement('afterend', navbar);
} else {
    // Si TopLine n'existe pas, insère la navbar au début du body
    document.body.insertBefore(navbar, document.body.firstChild);
}

// Fonction pour masquer tous les éléments sauf 1LPC02BA
function showOnly1LPC02BA() {
    document.querySelector(`div[id$="BA/undefined"]`).style.display = 'none';
    document.querySelector(`div[id$="BB/undefined"]`).style.display = 'contents';
}

function showOnly1LPC02BB() {
    document.querySelector(`div[id$="BB/undefined"]`).style.display = 'none';
    document.querySelector(`div[id$="BA/undefined"]`).style.display = 'contents';
}

// Ajoutez des écouteurs d'événements pour les boutons de la navbar
document.getElementById('semestre1Btn').addEventListener('click', (event) => {
    event.preventDefault();
    showOnly1LPC02BB();
});

document.getElementById('semestre2Btn').addEventListener('click', (event) => {
    event.preventDefault();
    showOnly1LPC02BA();
});


// content.js
console.log("Better Email is running");
const style = document.createElement('style');
style.textContent = `
	body {
        background-color: #27272a !important;
        color : white !important;
        cursor: default !important;
    }
    #rightclip, .BodyRight {
        background-color: #27272a !important;
        border-radius: 10px !important;
    
    }
    .GT0S0,.BodyRight {
        border: 1px solid white;
    }
    .themeP, .themeP TABLE.colored TD, .themeP, .themeA, .BodyRight, .themeP>SPAN.BodyRight, td {
        background-color: #27272a !important;
    
    }
    a {
        color: orange !important;
    }
    .Civilite, .Picture {
        display: none !important;
    }
    .TopLine {
        display : flex !important;
        flex-direction: row !important;
        justify-content: center !important;
        padding-top: 20px !important;
        align-items: center !important;
        font-family: 'VT323', monospace;
        font-size: 50px !important;
    }
    th {
        background-color: #27272a !important;
        color: white !important;
    
    }
    [id^="UE-"], [id^="SP-"] {
        border: 1px solid white !important;
        padding: 20px 50px !important;
        border-radius: 5px !important;
    }
    [name^="UE-"], [name^="SP-"] {
        font-size: 20px !important;
    }
    .UEHeader {
        margin-bottom: 20px !important;
    }
    .CellBox {
        color: black;
        border-radius: 5px;
        border: 1px solid #52525b;
    }
    .CellValue {
        font-weight: bold;

    }
    .boxed_boxes_title {
        color: white !important;
        background-color: #27272a !important;
    }
    .UETitle {
        font-family: 'VT323', monospace;
    }
    td {
        
        font-family: 'VT323', monospace !important;
        font-size: 20px !important;
    }
    .Cell {
        background-color: #27272a !important;
        color: white !important;
    }
    .navbar {
        background-color: #333;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .navbar a {
        color: white;
        text-align: center;
        padding: 14px 20px;
        text-decoration: none;
        font-family: 'VT323', monospace;
        transition: background-color 0.3s ease, color 0.3s ease;
        font-size: 20px;
    }
    .navbar a:hover {
        background-color: hsl( 0 , 0% , 30% );
        color: black;
        text-decoration: none;
    }
    .displaygrey {
    }
    .CellRank, .CellAvg {
        color : white !important;
    }
    .Semesters {
        padding: 10px !important;    
    }
`;
document.head.append(style);

// Fonction pour supprimer les éléments
function removeElementsAndUpdateCellBox() {
    const elements = document.querySelectorAll('.User, .Preamble, .RSSStream, .IPAnnuelle, .LinksTable, .Civilite, .Picture, .UEMasters');
    elements.forEach(element => {
        element.remove();
        console.log(`${element.className} removed`);
    });
    updateCellBoxTextColor(); // Appelle la fonction pour mettre à jour la couleur du texte des CellBox
}

function updateCellBoxTextColor() {
    const cellBoxes = document.querySelectorAll('.CellBox');
    cellBoxes.forEach(cellBox => {
        // Vérifie si le backgroundColor est défini et différent de transparent
        if (!cellBox.style.backgroundColor || cellBox.style.backgroundColor === 'transparent') {
            cellBox.style.color = 'white'; // Change la couleur du texte en blanc
            cellBox.style.border = '1px solid white'; // Ajoute une bordure blanche
        }

    });
}

// Exécutez immédiatement pour supprimer les éléments existants et la div spécifique si elle existe
removeElementsAndUpdateCellBox();

// Utilisez MutationObserver pour détecter les changements dans le DOM
const observer = new MutationObserver(mutations => {
    removeElementsAndUpdateCellBox();
});

// Configuration de l'observateur : observe les ajouts d'enfants et les changements d'attributs
const config = { childList: true, subtree: true };

// Commencez à observer le document
observer.observe(document.body, config);

document.title = "BetterTomuss";

const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=VT323&display=swap';
document.head.appendChild(fontLink);
