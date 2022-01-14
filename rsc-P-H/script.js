let jt = 0;

function journalToggle(x) {
    if (jt) {
        document.querySelector('#journal_img').classList.remove('active');
        jt = 0;
    }
    else {
        document.querySelector('#journal_img').classList.add('active');
        jt++;
    }
}

let serie_photo_caron = [
    './h.2.0-slide-halley1910.jpg',
    './h.2.1-slide-eclipse1912.jpg',
    './h.2.2-slide-eclipse1912.jpg',
    './h.2.3-slide-cometemorehouse.png'
]

function slide_photo_caron(img) {
    console.log(img);

    if (img == undefined) {
        console.log('lol');
        // document.querySelector('#slide_photo_caron').classList.remove('active');
    }
    else {
        // document.querySelector('#slide_photo_caron').classList.add('active');
    }

    document.querySelector('#slide_photo_caron_img').src = serie_photo_caron[img];
    console.log(serie_photo_caron[img]);
}