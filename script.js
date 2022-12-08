const qiqi = document.querySelector('.qiqi');


const jump = () => {
qiqi.classList.add ('jump')
setTimeout(() => {
    qiqi.classList.remove('jump')
}, 500);
}
document.addEventListener('keydown', jump)
