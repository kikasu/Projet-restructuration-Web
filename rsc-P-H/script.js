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



let index_slide_photo_caron = 0;
let serie_photo_caron = [
    './h.2.0-slide-halley1910.jpg',
    './h.2.1-slide-eclipse1912.jpg',
    './h.2.2-slide-eclipse1912.jpg',
    './h.2.3-slide-cometemorehouse.png'
]

function slide_photo_caron(x) {
    console.log(x);

    if (x == undefined) {
        console.log('hide');
        // document.querySelector('#slide_photo_caron').classList.remove('active');
    }
    else if (x == '<') {
        console.log('prec');
        index_slide_photo_caron--;

        if (index_slide_photo_caron < 0) index_slide_photo_caron = serie_photo_caron.length -1;
    }
    else if (x == '>') {
        console.log('next');
        index_slide_photo_caron++;

        if (index_slide_photo_caron > serie_photo_caron.length -1) index_slide_photo_caron = 0;
    }
    else {
        console.log('show');
        index_slide_photo_caron = x;
        // document.querySelector('#slide_photo_caron').classList.add('active');
    }
    document.querySelector('#slide_photo_caron_img').src = serie_photo_caron[index_slide_photo_caron];
    console.log(index_slide_photo_caron, serie_photo_caron[index_slide_photo_caron]);
}
