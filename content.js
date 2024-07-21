
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
        justify-content: space-between !important;
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

        // Récupérer le contenu de CellRank associé à la cellule
        const cellRank = document.querySelectorAll('.CellRank');
        cellRank.forEach(cellRank => {
            cellRank.classList.remove('hidden');
            cellRank.style.color = 'orange';
            cellRank.style.backgroundColor = '#27272a';
            console.log(cellRank);
        });


            


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




// Ajoutez ce code à la fin de votre fichier content.js

// Créez un nouvel élément pour le texte personnalisé
const customTextElement = document.createElement('a');
customTextElement.textContent = 'Emploi du temps'; // Remplacez par votre texte
customTextElement.style.position = 'fixed';
customTextElement.style.top = '0';
customTextElement.style.left = '50%';
customTextElement.style.transform = 'translateX(-50%)'; // Décalez l'élément de 50% de sa propre largeur vers la gauche
customTextElement.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Fond semi-transparent noir
customTextElement.style.fontWeight = 'bold';
customTextElement.style.color = 'white'; // Texte blanc
customTextElement.style.fontFamily = 'Arial, sans-serif';
customTextElement.style.padding = '10px';
customTextElement.href = 'https://edt.univ-lyon1.fr/'; // Lien vers votre page

// Ajoutez l'élément au corps du document
document.body.appendChild(customTextElement);

document.title = "BetterTomuss";



const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=VT323&display=swap';
document.head.appendChild(fontLink);
