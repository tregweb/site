let clas = document.querySelectorAll('.list');
let lang = document.querySelectorAll('.lang');
const close = document.querySelector('.close');
close.addEventListener('click', () => {
    document.querySelector('.phoneMenu').classList.add('hidden')
});
document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.phoneMenu').classList.remove('hidden')
});
for (let i = 0; i < clas.length; i++)
    clas[i].addEventListener('click', () => {
        clas.forEach((elm, clas) => {
            elm.classList.remove('active');
        });
        clas[i].classList.add('active');
        document.querySelector('.phoneMenu').classList.add('hidden');
    });

for (let i = 0; i < lang.length; i++)
    lang[i].addEventListener('click', () => {
        lang.forEach((elm, lang) => {
            elm.classList.remove('active');
        });
        lang[i].classList.add('active');
    });
