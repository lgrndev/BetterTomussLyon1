console.log("Better Tomuss is running");
document.title = "BetterTomuss";






// Barre de navigation

const navbar = document.createElement('div');
navbar.innerHTML = `
    <div class="navbar">
        <a href="#blocscience" id="blocscienceBtn">Bloc scientifique</a>
        <a href="#bloctransversal" id="bloctransversalBtn">Bloc transversal</a>
        <a href="https://edt.univ-lyon1.fr/">Emploi du temps</a>
        <a href="https://tomuss.univ-lyon1.fr/S/2024/Automne/logout">Se déconnecter</a>
    </div>
`;









// Dedi

const dedi = document.createElement('div');
dedi.innerHTML = `
    Made with ❤️ by @<a href="https://github.com/lgrndev">lgrndev</a>
`;
dedi.style.color = "orange";
dedi.style.position = "absolute";
dedi.style.top = '10px';
dedi.style.left = '10px';
dedi.style.fontFamily = "VT323";
document.body.appendChild(dedi);









// Ajout de la navbar au DOM

function AddNavBar() {
    const TopLine = document.querySelector('hr');
    if (TopLine) {
        TopLine.insertAdjacentElement('afterend', navbar);
        document.getElementById('blocscienceBtn').addEventListener('click', (event) => {
            event.preventDefault();
            showOnlyEndBA();
        });
        document.getElementById('bloctransversalBtn').addEventListener('click', (event) => {
            event.preventDefault();
            showOnlyEndBB();
        });
    }
    else {
        document.body.insertBefore(navbar, document.body.firstChild);
    }
    console.log("Navbar added");
}














// Fonction pour masquer tous les éléments sauf certains

function showOnlyEndBB() {
    document.querySelector(`div[id$="BA/undefined"]`).style.display = 'none';
    document.querySelector(`div[id$="BB/undefined"]`).style.display = 'contents';
}

function showOnlyEndBA() {
    document.querySelector(`div[id$="BB/undefined"]`).style.display = 'none';
    document.querySelector(`div[id$="BA/undefined"]`).style.display = 'contents';
}










// Changement du style général de la page

const style = document.createElement('style');
style.textContent = `
	body {
        background-color: #27272a !important;
        color : white !important;
        cursor: default !important;
        margin-left: 0px !important;
    }
    .GT0S0 {
        border: 1px solid white;
    }
    .BodyRight {
        height : 100vh !important;
        background-color: #18181b !important;
    }
    .themeP, .themeP TABLE.colored TD, .themeP, .themeA, .themeP>SPAN.BodyRight, td {
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
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-style: normal;
        font-size: 40px !important;
    }
    th {
        background-color: #18181b !important;
        color: white !important;
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-style: normal;
    
    }
    [id^="UE-"], [id^="SP-"] {
        background-color: #18181b !important;
        padding: 20px 50px !important;
        border-radius: 5px !important;
    }
    [name^="UE-"], [name^="SP-"] {
        font-size: 13px !important;
    }
    .UEHeader {
        margin-bottom: 20px !important;
        margin-left: 20px !important;
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
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-style: normal;
        color: white !important;
    }
    td {
        
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-style: normal;
        font-size: 13px !important;
    }
    .Cell {
        background-color: #27272a !important;
        color: white !important;
    }
    .navbar {
        background-color: #18181b;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 105%;
        margin-top: 20px;
    }
    .navbar a {
        color: white;
        text-align: center;
        padding: 14px 20px;
        text-decoration: none;
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-style: normal;
        transition: background-color 0.3s ease, color 0.3s ease;
        font-size: 13px;
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
    .poppins-bold {
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-style: normal;
    }
    hr {
        width: 105%;
        display : none;
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











// Fonction pour mettre à jour la couleur du texte des CellBox en fonction de leur bg

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











// Ajout de la police poppins-bold

const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
document.head.appendChild(fontLink);

// Ajout de la police VT323

const fontLink2 = document.createElement('link');
fontLink2.rel = 'stylesheet';
fontLink2.href = 'https://fonts.googleapis.com/css2?family=VT323&display=swap';
document.head.appendChild(fontLink2);








// Ajout de la fonctionnalité pour afficher uniquement les notes

const BoutonNotes = document.createElement('div');

const textBoutonNotes = document.createElement('span');
textBoutonNotes.textContent = "Afficher uniquement les notes";
textBoutonNotes.style.color = "white";
textBoutonNotes.classList = "poppins-bold";
textBoutonNotes.style.fontSize = "12px";

const buttonBoutonNotes = document.createElement('input');
buttonBoutonNotes.type = 'checkbox';
buttonBoutonNotes.id = 'boutonNotesCheckbox';

BoutonNotes.appendChild(textBoutonNotes);
BoutonNotes.appendChild(buttonBoutonNotes);
BoutonNotes.style.display = "flex";
BoutonNotes.style.flexDirection = "row";
BoutonNotes.style.padding = "10px";
BoutonNotes.style.backgroundColor = "orange";
BoutonNotes.style.borderRadius = "10px";
BoutonNotes.style.marginTop = "20px";
BoutonNotes.style.color = "black";





// Ajout de la fonctionnalité pour enlever les messages

const BoutonMessage = document.createElement('div');

const textBoutonMessage = document.createElement('span');
textBoutonMessage.textContent = "Enlever les messages";
textBoutonMessage.style.color = "white";
textBoutonMessage.classList = "poppins-bold";
textBoutonMessage.style.fontSize = "12px";

const buttonBoutonMessage = document.createElement('input');
buttonBoutonMessage.type = 'checkbox';
buttonBoutonMessage.id = 'BoutonMessageCheckbox';

BoutonMessage.appendChild(textBoutonMessage);
BoutonMessage.appendChild(buttonBoutonMessage);
BoutonMessage.style.display = "flex";
BoutonMessage.style.flexDirection = "row";
BoutonMessage.style.padding = "10px";
BoutonMessage.style.backgroundColor = "orange";
BoutonMessage.style.borderRadius = "10px";
BoutonMessage.style.marginTop = "20px";
BoutonMessage.style.color = "black";




// Afficher les cases vides

const BoutonCasesVides = document.createElement('div');

const textBoutonCasesVides = document.createElement('span');
textBoutonCasesVides.textContent = "Cacher les cases vides";
textBoutonCasesVides.style.color = "white";
textBoutonCasesVides.classList = "poppins-bold";
textBoutonCasesVides.style.fontSize = "12px";

const buttonBoutonCasesVides = document.createElement('input');
buttonBoutonCasesVides.type = 'checkbox';
buttonBoutonCasesVides.id = 'BoutonCasesVidesCheckbox';

BoutonCasesVides.appendChild(textBoutonCasesVides);
BoutonCasesVides.appendChild(buttonBoutonCasesVides);
BoutonCasesVides.style.display = "flex";
BoutonCasesVides.style.flexDirection = "row";
BoutonCasesVides.style.padding = "10px";
BoutonCasesVides.style.backgroundColor = "orange";
BoutonCasesVides.style.borderRadius = "10px";
BoutonCasesVides.style.marginTop = "20px";
BoutonCasesVides.style.color = "black";












// Fonction pour ajouter les boutons

function ajoutBoutonNotes() {
    const displaySemesters = document.querySelector('.DisplaySemesters');
    displaySemesters.appendChild(BoutonNotes);
    ecouteBoutonNotesCheckbox();
    displaySemesters.appendChild(BoutonMessage);
    ecouteBoutonMessageCheckbox();
    displaySemesters.appendChild(BoutonCasesVides);
    ecouteBoutonCasesVidesCheckbox();
    restaurerEtats();
}










// Fonctions pour écouter les boutons

function ecouteBoutonMessageCheckbox() {
    document.getElementById('BoutonMessageCheckbox').addEventListener('change', function() {
        const displayUECommentElements = document.querySelectorAll('.DisplayUEComment');
        if (this.checked) {
            displayUECommentElements.forEach(element => {
                element.style.display = 'none';
            });
        } else {
            displayUECommentElements.forEach(element => {
                element.style.display = '';
            });
        }
        sauvegarderEtat('cacherMessages', this.checked);
    });
}

function ecouteBoutonNotesCheckbox() {
    document.getElementById('boutonNotesCheckbox').addEventListener('change', function() {
        const displayTypeNoteElements = document.querySelectorAll('.DisplayTypeText, .TypeJe_Viens , .DisplayTypeCode_Etape, .DisplayTypeCod_Cat , .DisplayTypeEnumeration, .DisplayTypeUpload , .DisplayTypeBool, .DisplayTypeDate, .boxed_boxes   ');
        if (this.checked) {
            displayTypeNoteElements.forEach(element => {
                element.style.display = 'none';
            });
        } else {
            displayTypeNoteElements.forEach(element => {
                element.style.display = '';
            });
        }
        sauvegarderEtat('cacherNotes', this.checked);
    });
}


function ecouteBoutonCasesVidesCheckbox() {
    document.getElementById('BoutonCasesVidesCheckbox').addEventListener('change', function() {
        const displayTypeNoteElements = document.querySelectorAll('.is_empty');
        if (this.checked) {
            displayTypeNoteElements.forEach(element => {
                element.style.display = 'none';
            });
        } else {
            displayTypeNoteElements.forEach(element => {
                element.style.display = '';
            });
        }
        sauvegarderEtat('cacherCasesVides', this.checked);
    });
}













function sauvegarderEtat(cle, valeur) {
    localStorage.setItem(cle, valeur);
}

function restaurerEtats() {
    const etats = {
        cacherCasesVides: localStorage.getItem('cacherCasesVides') === 'true',
        cacherMessages: localStorage.getItem('cacherMessages') === 'true',
        cacherNotes: localStorage.getItem('cacherNotes') === 'true'
    };

    buttonBoutonCasesVides.checked = etats.cacherCasesVides;
    buttonBoutonMessage.checked = etats.cacherMessages;
    buttonBoutonNotes.checked = etats.cacherNotes;

    // Appliquer les états restaurés
    const displayTypeNoteElements = document.querySelectorAll('.is_empty');
    displayTypeNoteElements.forEach(element => {
        element.style.display = etats.cacherCasesVides ? 'none' : '';
    });

    const displayUECommentElements = document.querySelectorAll('.DisplayUEComment');
    displayUECommentElements.forEach(element => {
        element.style.display = etats.cacherMessages ? 'none' : '';
    });

    const displayTypeNoteElementsAll = document.querySelectorAll('.DisplayTypeText, .TypeJe_Viens , .DisplayTypeCode_Etape, .DisplayTypeCod_Cat , .DisplayTypeEnumeration, .DisplayTypeUpload , .DisplayTypeBool, .DisplayTypeDate, .boxed_boxes');
    displayTypeNoteElementsAll.forEach(element => {
        element.style.display = etats.cacherNotes ? 'none' : '';
    });
}












// Créez une instance de MutationObserver
const observer2 = new MutationObserver((mutations, obs) => {
    const displaySemesters = document.querySelector('.DisplaySemesters');
    if (displaySemesters) {
        ajoutBoutonNotes(); 
        obs.disconnect(); 
    }
});

// Configuration de l'observateur : observe les ajouts d'enfants et les changements d'attributs
const config2 = { childList: true, subtree: true };

// Commencez à observer le document
observer2.observe(document.body, config2);

// Créez une instance de MutationObserver
const observer3 = new MutationObserver((mutations, obs) => {
    const displaySemesters = document.querySelector('hr');
    if (displaySemesters) {
        AddNavBar();
        obs.disconnect(); 
    }
});

// Configuration de l'observateur : observe les ajouts d'enfants et les changements d'attributs
const config3 = { childList: true, subtree: true };

// Commencez à observer le document
observer3.observe(document.body, config3);












// Fonction pour compter les occurrences des valeurs CellValue

function countCellValueOccurrences() {
    const cellValues = document.querySelectorAll('.DisplayTypeNote .CellValue');
    const occurrences = {};

    // Initialiser toutes les notes possibles de 0 à 20 avec un compteur à 0
    //for (let i = 0; i >= 20; i--) {
    //    occurrences[i] = 0;
    //}

    cellValues.forEach(cell => {
        let value = cell.textContent || cell.innerText;
        value = value.replace(/\u00a0/g, ' ').trim(); // Remplace &nbsp; par un espace normal et supprime les espaces blancs

        // Extraction de la note et du total possible
        const match = value.match(/(\d+(?:\.\d+)?)\/(\d+(?:\.\d+)?)/);
        if (match) {
            let note = parseFloat(match[1]);
            const totalPossible = parseFloat(match[2]);

            // Ajustement de la note pour qu'elle soit sur 20
            if (totalPossible !== 20) {
                note = (note / totalPossible) * 20;
            }

            // Arrondissement de la note ajustée à l'entier le plus proche
            const noteArrondie = Math.round(note);

            occurrences[noteArrondie] = (occurrences[noteArrondie] || 0) + 1;
        } else {
            console.log("Format de note non reconnu : ", value);
        }
    });

    return occurrences;
}




// Fonction pour afficher le tableau des occurrences dans DisplaySemesters


function displayOccurrencesTable(occurrences) {
    const displaySemesters = document.querySelector('.DisplaySemesters');
    const table = document.createElement('table');
    Object.entries(occurrences).forEach(([value, count]) => {
        const row = table.insertRow();
        const cellValue = row.insertCell(0);
        const cellCount = row.insertCell(1);
        cellValue.textContent = value;
        cellCount.textContent = count;
    });
    displaySemesters.appendChild(table);
}

function displayBarChart(occurrences) {
    const displaySemesters = document.querySelector('.DisplaySemesters');
    const chartContainer = document.createElement('div');
    chartContainer.style.display = 'flex';
    chartContainer.style.flexDirection = 'column';
    chartContainer.style.alignItems = 'flex-start';
    chartContainer.style.gap = '0px';
    chartContainer.style.marginTop = '20px';
    chartContainer.style.width = '90%';

    const titreGraphique = document.createElement('div');
    titreGraphique.textContent = 'Répartition des notes';
    titreGraphique.classList = 'poppins-bold';
    titreGraphique.style.fontSize = '13px';
    titreGraphique.style.color = 'white';
    titreGraphique.style.marginBottom = '10px';
    chartContainer.appendChild(titreGraphique);

    const maxOccurrences = Math.max(...Object.values(occurrences));


    Object.entries(occurrences).forEach(([value, count]) => {
        const barreContainer = document.createElement('div');

        const bar = document.createElement('div');
        const barWidth = (count / maxOccurrences) * 100;
        bar.style.width = `${barWidth}%`;
        bar.style.height = '20px';
        bar.style.backgroundColor = 'orange';
        bar.style.margin = '0px 0';
        bar.style.borderRadius = '0px 5px 5px 0px';
        bar.style.textAlign = 'right';
        bar.style.paddingRight = '5px';
        bar.style.color = 'black';
        bar.textContent = `${value}`;

        chartContainer.appendChild(bar);
    });

    displaySemesters.appendChild(chartContainer);
}





// Utilisez MutationObserver pour détecter les changements dans le DOM
const observer5 = new MutationObserver(mutations => {
    const cellValuesExist = document.querySelector('.CellValue');
    if (cellValuesExist) {
        observer5.disconnect(); // Arrêtez d'observer une fois que les CellValue sont chargés
        const occurrences = countCellValueOccurrences();
        //displayOccurrencesTable(occurrences);
        displayBarChart(occurrences);
    }
});

// Configuration de l'observateur : observe les ajouts d'enfants et les changements d'attributs
const config5 = { childList: true, subtree: true };

// Commencez à observer le document
observer5.observe(document.body, config5);