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
let categorie = ["soleil", "lune"];
let year = [2008,2009,2010];
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
    }
    setPageSelector()
}
function setSFiltre(filtreP)
{
    let sFiltre = [];
    switch (categorie[filtreP]){
        case 'soleil': sFiltre = [2007, 2009];
            break;
        case 'lune': sFiltre = [2008, 2010];
            break;
        
    }
    let inHtml = "";
    for(let i = 0; i < sFiltre.length; i++)
    {
        inHtml += '<div class="Sselection" id="select'+sFiltre[i]+'" onclick="setImage('+filtreP+','+sFiltre[i]+')">'+sFiltre[i]+'</div>';
    }
    document.querySelector('#GsousSelection').innerHTML = inHtml;
}
function setPageSelector()
{
    if(filtredImg.length >= 5)
    {
        let numbrePage = numOfPage();
        let inHtml = '<button id="pagePlus" onclick="affichage(page + 1)"><</button>';
        for(let i = 0; i < numbrePage; i++)
        {
            inHtml += '<button id="page"'+i+' onclick="affichage('+i+')">' + (i + 1) +'</button>'
        }
        inHtml+= '<button id="pageMoin" onclick="affichage(page - 1)">></button>';
        document.querySelector('#GpageSel').innerHTML = inHtml;
    }
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