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
    ["Taches solaires le 3 juin 2007 en rayonnement H alpha, lunette FSQ 106", "tjc30607.jpg", 0, 2007],
    ["Mosaïque lunaire réalisée le 28 mai 2012 grâce à un télescope de 250mm de diamètre muni d'une caméra DMK 31. ", "lune2805124.jpg",1, "AUTRE"],
    [" Le cratère Bullialdus photographiée grâce à la lunette de 160 mm de diamètre de l'observatoire", 
    "Bullialdus_200305.jpg",1, "AUTRE"],
    ["Le cratère Julius", "Julius_170305.jpg",1,"AUTRE"],
    ["Croissant lunaire photographié le 18 avril 2013 au foyer d'un télescope de 250 mm de diamètre", "lune180413.jpg",1,"AUTRE"],
    [" La région de l'ancien cirque lunaire Stöfler ( 140 km de diamètre )."
    +"Télescope Schmidt-Cassegrain de 200 mm de diamètre et lentille de barlow X2. ", "lune191008.jpg",1,"STÖFLER"],
    ["Progression des ombres sur le cratère Stöfler."+"Animation réalisée le 1er juin 2017 de 20h 08 à 21h 06 TU grâce à un télescope Cassegrain"+ 
    "de 250 mm de diamètre muni d'une lentille de barlow x1,6 et d'une caméra ASI 120MC", "lune010617.gif",1,"STÖFLER"],
    ["La région du cratère Stöfler photographiée au foyer d'un télescopeCassegrain de 250 mm de diamètre muni d'une caméra ASI120MC ", "stofler260515.jpg",1,"STÖFLER"],
    ["La région des cratères Walter et Stöfler photographiée au foyer d'un télescope Cassegrain de 250 mm de diamètre muni d'une caméra ASI120MC", "walter180116.jpg",1,"STÖFLER"],
    ["La région lunaire du cirque Heraclite photographiée grâce à un télescope de 250mm de diamètre muni d'une caméra DMK 31.", "lune2805125.jpg",1,"HERACLITE"],
    ["Animation des ombres sur la région du cratère Heraclite réalisée le 3 avril 2017 de 19h 15 à 20h 15 TU au foyer d'un télescope Cassegrain de 250mm de diamètre muni"+
    " d'une lentille de barlow x1,6 et d'une caméra ASI 120MC.", "heraclite030417.gif",1,"HERACLITE"],
    [" La région du cratère Héraclite photographiée grâce à un télescope Cassegrain de 250 mm de diamètre muni d'une lentille de barlow x3 "+
    "et d'un appareil photo numérique Sony A7s", "heraclite120519.jpg",1,"HERACLITE"],
    ["SC 200 + Vesta pro + barlow x2", "lune11.jpg",1,"COPERNIC"],
    ["SC 200 + Vesta pro au foyer", "lune13.jpg",1,"COPERNIC"],
    ["Le cratère Copernic de 90 km de diamètre et ses remparts en gradins", "cop.jpg",1,"COPERNIC"],
    ["La région du cirque lunaire Copernic de 90 km de diamètre avec ses remparts de 3800 m de hauteur. Télescope LX 90 de 200 mm de diamètre", "copernic120909.jpg",1,"COPERNIC"],
    [" Le cirque lunaire Copernic de 90 km de diamètre, avec ses remparts de 3800 m et ses pitons centraux. "+
    "Télescope de 200 mm de diamètre muni d'une barlow X2 et d'une caméra DMK 31.", "lune230210.jpg",1,"COPERNIC"],
    ["Le cirque lunaire jeune Copernic, de 90 km de diamètre. Photographie réalisée grâce à un télescope C.11 de 280 mm de diamètre "+
    "muni d'une lentille de barlow x2 et d'une caméra DMK 31", "copernic120211.jpg",1, "COPERNIC"],
    ["La région lunaire du cirque Copernic et des Apennins photographiée grâce à un télescope de 250 mm de diamètre", "lune1403112.jpg",1, "COPERNIC"],
    ["Mosaïque de la région lunaire du cirque Copernic réalisée au foyer d'un télescope de 250 mm de diamètre", "copernic120511.jpg",1, "COPERNIC"],
    ["La région lunaire du cirque Copernic photographiée grâce à la lunette de 160 mm de diamètre de l'Observatoire munie d'une caméra DBK 21", "lune1106112.jpg", 1, "COPERNIC"],
    ["Le cirque Copernic photographié grâce à un télescope de 250mm de diamètre muni d'une caméra DMK 31.", "lune102126.jpg", 1, "COPERNIC"],
    ["La région du cratère Copernic photographiée au foyer d'un télescope Cassegrain de 250 mm de diamètre muni d'une caméra ASI120MC", "copernic140219.jpg", 1, "COPERNIC"],
    ["La région des cratères Copernic (à gauche) et Eratosthène (en haut à droite) photographiée grâce à un télescope Cassegrain de 250 mm de diamètre muni d'une "+
    "lentille de barlow x1,6 et d'une caméra ASI 120MC", "lune130519.jpg", 1, "COPERNIC"],
    ["Progression des ombres sur le cratère Copernic. Animation réalisée sur une durée de 45 min le 16 avril 2016  grâce à un télescope Cassegrain de" + 
    "250 mm de diamètre muni d'une lentille de barlow x1,6 et d'une caméra ASI 120MC", "copernic1604161.gif", 1, "COPERNIC"],
    ["Le cratère Copernic photographié le 16 avril 2016 grâce à un télescope Cassegrain de 250 mm de diamètre muni d'une lentille de barlow x1,6 et d'une caméra ASI 120MC", "copernic160416.jpg", 1, "COPERNIC"],
    ["La région du cratère Copernic photographiée grâce à un télescope Cassegrain de 250 mm de "+
    "diamètre muni d'une lentille de barlow x1,6 et d'une caméra ASI120MC", "copernic230321.jpg", 1, "COPERNIC"],
    ["Clavius, avec ses 220 km de diamètre, est l'un des plus grands cratères lunaires", "clav.jpg", 1, "CLAVIUS"],
    ["Clavius photographié grâce à la lunette de 160 mm de diamètre de l'observatoire", "Clavius_200305.jpg", 1, "CLAVIUS"],
    ["Clavius photographié grâce au télescope de 300 mm de diamètre de l'observatoire T 300 - photo argentique sur du TP 2415", "luneag9.jpg", 1, "CLAVIUS"],
    ["Clavius photographié grâce au télescope de 300 mm de diamètre de l'observatoire T 300 + Vesta pro + barlow x3", "lune10.jpg", 1, "CLAVIUS"],
    ["Région du cratère Clavius", "regionclavius.jpg", 1, "CLAVIUS"],
    ["La région du cratère Clavius et du pôle sud lunaire photographiée grâce à un télescope LX 90", "lune171008.jpg", 1, "CLAVIUS"],
    ["Mosaïque lunaire de la région des cirques Clavius et Tycho. Télescope Maksutov de 127 mm de diamètre et barlow X2", "claviustycho.jpg", 1, "CLAVIUS"],
    ["La région du cirque Clavius et du pôle sud lunaire. Télescope LX 90", "lune140809.jpg", 1, "CLAVIUS"],
    ["La région du cirque lunaire Clavius photographiée grâce à un télescope LX 90 de 200 mm de diamètre muni d'une lentille de barlow X2 et d'une caméra DMK 31", "claviusdmk.jpg", 1, "CLAVIUS"],
    ["Le grand cirque Clavius photographié près du terminateur lunaire. Télescope Schmidt-Cassegrain de 200 mm de diamètre muni d'une barlow X2 et " +
    "d'une caméra DMK 31", "claviusdmk2.jpg", 1, "CLAVIUS"],
    ["Le très vieux cirque lunaire Clavius, de 220 km de diamètre avec ses murailles pouvant atteindre 4600 m de hauteur. " +
    "Photographie réalisée grâce à un télescope C.11 de 280 mm de diamètre muni d'une lentille de barlow x2 et d'une caméra DMK 31", "clavius120211.jpg", 1, "CLAVIUS"],
    ["Le célèbre cratère lunaire Clavius photographié à l'aide d'un télescope de 127mm de diamètre muni d'une lentille de barlow X 2", "clavius210811.jpg", 1, "CLAVIUS"],
    ["La région des cratères Clavius et Moretus photographiée au foyer d'un télescope C.11 de 280mm de diamètre muni d'une lentille de barlow X2 et d'une caméra DMK 31.", "clavius10412.jpg", 1, "CLAVIUS"],
    ["Animation de deux images du cratère lunaire Clavius réalisée au foyer d'un télescope C.11 de 280mm de diamètre muni d'une lentille de barlow X2 et d'une caméra DMK 31. "+
    "On distingue une légère progression des ombres et les effets de la libration lunaire.", "clavius1avril2012.gif", 1, "CLAVIUS"],
    ["La région lunaire du cirque Clavius photographiée grâce à un télescope de 250mm de diamètre muni d'une caméra DMK 31.", "lune10212.jpg", 1, "CLAVIUS"],
    ["Le cirque Clavius photographié grâce à un télescope de 250mm de diamètre muni d'une caméra DMK 31.", "lune102122.jpg", 1, "CLAVIUS"],
    ["Le cratère lunaire Clavius photographié grâce au C.11 de l'observatoire muni d'une caméra ASI 224 MC", "clavius130219.jpg", 1, "CLAVIUS"],
    ["Animation des ombres sur le cratère lunaire Clavius réalisée le 6 avril 2017 de 22h 51 à 23h 27 TU au foyer d'un télescope Cassegrain de 250mm de "+
    "diamètre muni  d'une caméra ASI 120MC.", "clavius060417.gif", 1, "CLAVIUS"],
    ["La région du pôle sud lunaire et du cratère Clavius photographiée au foyer d'un télescope Schmidt-Cassegrain de 200 mm de diamètre", "clavius150516.jpg", 1, "CLAVIUS"],
    [" La région du cratère Clavius photographiée grâce à un télescope Cassegrain de 250 mm de diamètre muni d'une lentille de barlow x3 et d'un appareil photo numérique Sony A7s ", "clavius181219.jpg", 1, "CLAVIUS"],
    ["La région du cratère Clavius photographiée grâce à un télescope Cassegrain de 250 mm de diamètre muni d'une lentille de barlow x2 et d'une caméra ASI 120MC", "clavius090414.jpg", 1, "CLAVIUS"],
    ["La région du cratère Clavius photographiée au foyer d'un télescope Cassegrain de 250 mm de diamètre muni d'une caméra ASI120MC", "clavius170316.jpg", 1, "CLAVIUS"],
    ["La région du cratère Clavius photographiée au foyer d'un télescope Cassegrain de 250 mm de diamètre muni d'une caméra ASI120MC", "clavius180116.jpg", 1, "CLAVIUS"],
    ["Animation des ombres sur le cratère lunaire Clavius réalisée le 1er avril 2020 de 19h 39 à " +
    "21h 42 TU au foyer d'un télescope Cassegrain de 250mm de diamètre muni d'une lentille de barlow x1,6 et d'une caméra ASI 120MC.", "clavius010420.gif", 1, "CLAVIUS"],
    ["La région du cratère Clavius photographiée au foyer d'un télescope Cassegrain de 250 mm de diamètre muni d'une caméra ASI120MC", "clavius230121.jpg", 1, "CLAVIUS"],

];
let categorie = ["soleil", "lune", "planetes", "cometes", "nebuleses", "amasDetoile", "etoileDouble", 
    "galaxies", "eclipsesLune", "eclipsesSol", "phenomenesDivers"];
let filtredImg;
let page = 0;
let startSubFiltre = 0;
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
let sFiltre;
function setSFiltre(filtreP)
{
    sFiltre = [];
    switch (categorie[filtreP]){
        case 'soleil': sFiltre = [2001, 2005, 2007, 2008, 2009, 2010,
            2011, 2012, 2013, 2014, 2015, 2016, 
            2017, 2018, 2019, 2020, 2021]; 
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
        case 'etoileDouble': break;
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
        inHtml += '<div class="Sselection" id="select'+sFiltre[i]+'" onclick="setImage('+filtreP+','+ "'" + sFiltre[i]+"'"+')">'+sFiltre[i]+'</div>';
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
        inHtml = '<button class="PagesButtons" id="pagePlus" onclick="affichage(page + 1)"><</button>';
        for(let i = 0; i < numbrePage; i++)
        {
            inHtml += '<button class="PagesButtons" id="page"'+i+' onclick="affichage('+i+')">' + (i + 1) +'</button>'
        }
        inHtml+= '<button class="PagesButtons" id="pageMoin" onclick="affichage(page - 1)">></button>';
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
            document.querySelector(imgPointer).style.display = "block";
            document.querySelector(imgPointer).src = "rsc/image/galerie/" + filtredImg[i + n][1];
            document.querySelector(descPointer).innerHTML = filtredImg[i + n][0];
        }
        else
        {
            document.querySelector(imgPointer).src = "";
            document.querySelector(imgPointer).style.display = "none";
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
setImage(-1);
affichage(0)