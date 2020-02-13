// grab everthing we need 
const crazyButtons = document.querySelectorAll('.btn-crazy');

//  define our function 
function moveBall() {
    //  get a random number
    const offsetLeft = Math.random() * (window.innerWidth - this.clientWidth);
    const offsetTop = Math.random() * (window.innerHeight - this.clientHeight);

    console.log(offsetLeft, offsetTop);

    this.style.top = offsetTop + 'px';
    this.style.left = offsetLeft + 'px';

}

// add event listner
crazyButtons.forEach(button => button.addEventListener('mouseenter', moveBall));