const qiqi = document.querySelector('.qiqi');
const obstaculo = document.querySelector ('.obstaculo');

const jump = () => {
qiqi.classList.add ('jump');

setTimeout(() => {
    qiqi.classList.remove('jump');
}, 500);
}

const loop = setInterval(() => {

const obstaculoPosition = obstaculo .offsetleft;

if (obstaculoposition ≤ 20 ) {

obstaculo .style.animation = 'none';