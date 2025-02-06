const balloon = document.getElementById('balloon');
let size = 200;
let colorIndex = 0;
const colors = ['red', 'green', 'blue'];

balloon.addEventListener('click', function() {
    size += 10;
    if (size > 420) {
        size = 200;
        balloon.style.backgroundColor = 'red';
    } else {
        colorIndex = (colorIndex + 1) % colors.length;
        balloon.style.backgroundColor = colors[colorIndex];
    }
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
});

balloon.addEventListener('mouseenter', function() {
    if (size > 200) {
        size -= 5;
        balloon.style.width = size + 'px';
        balloon.style.height = size + 'px';
    }
});
