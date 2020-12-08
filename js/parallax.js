window.addEventListener("scroll", () => {

    //parallax

    let pageYOffset = window.pageYOffset + screen.height;

    //나타나기
    if( pageYOffset > document.querySelector('#section1').offsetTop){
        document.querySelector('#section1').classList.add("show");
    } else {
        document.querySelector('#section1').classList.remove("show");
    }
    if( pageYOffset > document.querySelector('#section2').offsetTop){
        document.querySelector('#section2').classList.add("show");
    } else {
        document.querySelector('#section2').classList.remove("show");
    }
    if( pageYOffset > document.querySelector('#section3').offsetTop){
        document.querySelector('#section3').classList.add("show");
    } else {
        document.querySelector('#section3').classList.remove("show");
    }
    if( pageYOffset > document.querySelector('#section4').offsetTop){
        document.querySelector('#section4').classList.add("show");
    } else {
        document.querySelector('#section4').classList.remove("show");
    }
    if( pageYOffset > document.querySelector('#section5').offsetTop){
        document.querySelector('#section5').classList.add("show");
    } else {
        document.querySelector('#section5').classList.remove("show");
    }
    if( pageYOffset > document.querySelector('#section6').offsetTop){
        document.querySelector('#section6').classList.add("show");
    } else {
        document.querySelector('#section6').classList.remove("show");
    }
    if( pageYOffset > document.querySelector('#section7').offsetTop){
        document.querySelector('#section7').classList.add("show");
    } else {
        document.querySelector('#section7').classList.remove("show");
    }
});