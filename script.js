// Makes the starbucks rewards stay fixed when scrolling down
window.addEventListener('scroll', function(e) {
    container = document.getElementById('visual');
    container.classList.toggle('scrolling', window.scrollY > 0); 
  });
// Makes the starbucks rewards stay fixed when scrolling down


let pic = document.getElementById('image');
let h2Text = document.getElementById('h2');
let pText = document.getElementById('p');

function img1() {
    pic.src = 'images/3.webp' ;
    h2Text.innerHTML = 'Customize your drink';
    pText.innerHTML = 'Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.';
}

function img2() {
    pic.src = 'images/4.webp' ;
    h2Text.innerHTML = 'Brewed hot or iced coffee or tea, bakery item, packaged snack and more';
    pText.innerHTML = 'Treat yourself to an iced coffee, buttery croissant, bag of chips and more.';    
}

function img3() {
    pic.src = 'images/5.webp' ;
    h2Text.innerHTML = 'Handcrafted drink (Cold Brew, lattes and more) or hot breakfast';
    pText.innerHTML = 'Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.';
}

function img4() {
    pic.src = 'images/6.webp' ;
    h2Text.innerHTML = 'Sandwich, protein box or at-home coffee';
    pText.innerHTML = 'Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.';
}

function img5() {
    pic.src = 'images/7.webp' ;
    h2Text.innerHTML = 'Select Starbucks® merchandise';
    pText.innerHTML = 'Select Starbucks® merchandise';
}

document.getElementById('btn1').addEventListener('click', img1);
document.getElementById('btn2').addEventListener('click', img2);
document.getElementById('btn3').addEventListener('click', img3);
document.getElementById('btn4').addEventListener('click', img4);
document.getElementById('btn5').addEventListener('click', img5);


