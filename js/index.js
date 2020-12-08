//Toggle Menu
function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');

    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

//Mouse Effect
let cursor = document.querySelector('.cursor');
let cursor2 = document.querySelector('.cursor2');

document.addEventListener('mousemove', function(e) {
    cursor.style.cssText = cursor2.style.cssText = "left:" + e.clientX + 
    "px; top: " + e.clientY + "px;";
});