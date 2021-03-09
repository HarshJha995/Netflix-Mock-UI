const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

tabItems.forEach(item => item.addEventListener('click', changeContent))

function changeContent(e) {
    removeBorder();
    this.classList.add('tab-border');
    removeShow();
    tabContentItems.forEach(item => {
        console.log(this.id + '-content')
        if (this.id + '-content' === item.id) {
            item.classList.add('show')
        }
    })
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}