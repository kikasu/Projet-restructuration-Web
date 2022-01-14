//Entrer le text lier l'image, le nom de l'image, un entier point dans 'categori', puis l'années
let imgAndText = [
    ["Tache solaire le 1 mai 2007, télescope SC 200 ", "sol10507.jpg", 0, 2007],
    ["Tache solaire le 3 juin 2007", "sol30607.jpg", 0, 2007],
    ["Protubérances photographiées le 14 janvier 2007 grâce au PST de l'Observatoire", "sol140107.jpg", 0, 2007],
    ["Tache solaire le 2 mai 2007", "sol20507.jpg", 0, 2007],
    ["Protubérance le 11 mars 2007", "sol110307.jpg", 0, 2007],
    ["Protubérance le 6 avril 2007", "sol060407.jpg", 0, 2007],
    ["Protubérances le 17 août 2007 au PST","sol170807.jpg", 0, 2007],
    ["Le globe solaire le 26 août 2007","sol260807.jpg", 0, 2007],
    ["Taches solaires le 3 juin 2007 en rayonnement H alpha, lunette FSQ 106", "tjc30607.jpg", 0, 2007]
];
let categorie = ["soleil", "lune", "planetes", "cometes", "nebuleses", "amasDetoile", 
    "galaxies", "eclipsesLune", "eclipsesSol", "phenomenesDivers"];
let filtredImg;
let page = 0;
function setImage(filtre1, filtre2)
{
    filtredImg = [];
    for( let i = 0; i < imgAndText.length; i++)
    {
        if(imgAndText[i][2] == filtre1 && imgAndText[i][3] == filtre2)
        {
            filtredImg.push(imgAndText[i]);
        }
        else if(imgAndText[i][2] == filtre1 && filtre2 == 0)
        {
            filtredImg.push(imgAndText[i]);
        }
        else if(filtre1 == -1)
        {
            filtredImg.push(imgAndText[i]);
        }
    }
    setPageSelector()
}
function setSFiltre(filtreP)
{
    let sFiltre = [];
    switch (categorie[filtreP]){
        case 'soleil': sFiltre = [2001, 2005, 2007, 2008, 2009, 2010,
            2011, 2012, 2013, 2014, 2015, 2016, 
            2017, 2018, 2019, 2020, 2021, "AUTRE"];
            break;
        case 'lune': sFiltre = ["STÖFLER", "HERACLITE", "COPERNIC", "CLAVIUS", 
            "CYRILLE, THEOPHILE & CATHERINE", "ALPHONSE, ARZACHEL & PTOLEMEE", 
            "PLATON", "ARISTOTE & EUDOXE", "ATLAS & HERCULES", "FAILLE D'HYGINUS", 
            "MUR DROIT", "ARCHIMEDES", "MORETUS", "JANSSEN", "TYCHO", "APENNINS", 
            "MAUROLYCUS", "PICCOLIMINI", "FRACASTOR", "GOLFE DES IRIS", 
            "TETE DE COBRA", "GASSENDI", "POSIDONIUS", "MER DES CRISES", 
            "LUMIERE CENDREE", "SCHICKARD & SCHILLER", "AUTRE"];
            break;
        case 'planetes': sFiltre = ["MERCURE", "VENUS", "MARS", "JUPITER", 
            "SATURNE", "URANUS", "NEPTUNE", "PLUTON", "AUTRE"];
            break;
        case 'cometes': sFiltre = ["C/2006 M4 SWAN", "17P / HOLMES", "LULIN", "CHRISTENSEN", 
            "HARTLEY 2", "GARRADD", "PANSTARRS", "LOVEJOY", "TUTTLE-JACOBINI-KRESAK",
            "GIACOBINI-ZINNER", "WIRTANEN", "JACQUES", "ENCKE", "ATLAS", "ATLAS", "AUTRE"];
            break;
        case 'nebuleses': sFiltre = ["MESSIER 16", "OMEGA", "ORION", "DE LA ROSETTE", 
            "TETE DE CHEVAL", "IC 1396", "BIFIDE & TRIFIDE", "NGC 281", "DU COCON", "AMERICA", "NGC 6820 & 6823",
            "DE LA BULLE", "NGC 7380", "DU CROISSANT", "IC 1805", "AUTRE"];
            break;
        case 'amasDetoile': sFiltre = ["MESSIER 11", "DE PERSEE", "DES PLEIADES", "AUTRE"];
            break;
        case 'galaxies': sFiltre = ["MESSIER 81 & 82", "NGC 5907", "ANDROMEDE", "NGC 891", 
            "TRIO DU LION", "MESSIER 108", "NGC 6946", "MESSIER 33", "NGC 7331", 
            "CHIENS DE CHASSE", "MESSIER 61", "SOMBRERO", 
            "QUINTETTE DE STEPHAN", "NGC 4565", "NGC 7814", 
            "NGC 7479", "MESSIER 101", "MESSIER 106", "MESSIER 64", 
            "MESSIER 95 & 96", "NGC 2903", "MESSIER 63", "AMAS DE LA VIERGE", "AUTRE"];
            break;
        case 'eclipsesLune': sFiltre = [1994, 2001, 2003, 2008, 2009, 2010, 2015, 2018, 2019, "AUTRE"];
            break;
        case 'eclipsesSol' : sFiltre = [1999, 2002, 2003, 2006, 2008, 2012, 2017, 2021, "AUTRE"];
            break;
        case 'phenomenesDivers' : sFiltre = ["AURORES BOREALES", "TRANSIT DE MERCURE", "TRANSITE DE VENUS",
            "SPECTRES STELLAIRES", "METEORES", "VOIE LACTEE", "ASTEROÏDE 2014 JO 25", "AUTRE"];
            break;
    }
    let inHtml = "";
    for(let i = 0; i < sFiltre.length; i++)
    {
        inHtml += '<div class="Sselection" id="select'+sFiltre[i]+'" onclick="setImage('+filtreP+','+sFiltre[i]+')">'+sFiltre[i]+'</div>';
    }
    document.querySelector('#GsousSelection').innerHTML = inHtml;
    setImage(filtreP, 0);
}
function setPageSelector()
{   
    let inHtml = ''
    if(filtredImg.length >= 5)
    {
        
        let numbrePage = numOfPage();
        inHtml = '<button id="pagePlus" onclick="affichage(page + 1)"><</button>';
        for(let i = 0; i < numbrePage; i++)
        {
            inHtml += '<button id="page"'+i+' onclick="affichage('+i+')">' + (i + 1) +'</button>'
        }
        inHtml+= '<button id="pageMoin" onclick="affichage(page - 1)">></button>';
    }
    document.querySelector('#GpageSel').innerHTML = inHtml;
    affichage(0)
}
function affichage(numP)
{
    let numOP = numOfPage() -1;
    if(numP > numOP)
        numP = 0;
    else if(numP < 0)
        numP = numOP;
    let n = 6*numP;
    for(let i = 0; i < 6; i++)
    {
        let imgPointer = '#image' + i;
        let descPointer = '#desc' + i;
        if(i + n < filtredImg.length)
        {
            console.log(i + n);
            document.querySelector(imgPointer).src = "rsc/image/galerie/" + filtredImg[i + n][1];
            document.querySelector(descPointer).innerHTML = filtredImg[i + n][0];
        }
        else
        {
            document.querySelector(imgPointer).src = "";
            document.querySelector(descPointer).innerHTML ="";
        }
    }
    page = numP;
}
function numOfPage()
{
    let r = Math.floor(filtredImg.length / 6)
    if(r == filtredImg.length / 6)
        return r;
    else
        return r + 1;
}