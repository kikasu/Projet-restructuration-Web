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