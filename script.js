
//Counter Section
document.addEventListener('DOMContentLoaded',function(){
    function createCounter(id, max, delay, suffix = "+"){
        const el =document.getElementById(id);
        let i = 0;
        function update(){
            if(i <= max){
                el.innerHTML = i + suffix;
                i++;
                setTimeout(update, delay);
            }
            else
            {
                el.innerHTML = `${max}${suffix}`;
            }
        }
    }
});


// document.addEventListener('DOMContentLoaded', function() {
//     const choiceButtons = document.querySelectorAll('.choice-button');
//     const contentAreas = document.querySelectorAll('.content-area > div');

//     choiceButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             const targetId = this.getAttribute('data-target');

//             contentAreas.forEach(area => {
//                 if (area.id === targetId) {
//                     area.style.display = 'flex';
//                 } else {
//                     area.style.display = 'none';
//                 }
//             });
//         });
//     });

//     // Initially show option1 and hide option2
//     document.getElementById('option1').style.display = 'flex';
//     document.getElementById('option2').style.display = 'none';
// });


// const myElement1 = document.getElementById('btn-1');
// const myElement2 = document.getElementById('btn-2');

// myElement1.classList.toggle('btn-style');

// myElement1.addEventListener('click', function() {
//     this.classList.toggle('btn-style');
//     myElement2.classList.remove('btn-style');
// });

// myElement2.addEventListener('click', function() {
//     this.classList.toggle('btn-style');
//     myElement1.classList.remove('btn-style');
// });


document.addEventListener('DOMContentLoaded', function () {
    const choiceButtons = document.querySelectorAll('.choice-button');
    const contentAreas = document.querySelectorAll('.content-area > div');

    choiceButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');

            contentAreas.forEach(area => {
                area.style.display = (area.id === targetId) ? 'flex' : 'none';
            });

            choiceButtons.forEach(btn => btn.classList.remove('btn-style'));
            this.classList.add('btn-style');
        });
    });

    // Default active
    document.getElementById('option1').style.display = 'flex';
    document.getElementById('option2').style.display = 'none';
    document.getElementById('btn-1').classList.add('btn-style');
});

//////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.home-second-div'); // Select all elements you want to animate on scroll

    function checkSlide() {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            // Check if the element is within the viewport (with a bit of offset)
            const isVisible = (elementTop < window.innerHeight * 0.8) && (elementBottom >= 0);

            if (isVisible && !element.classList.contains('.awesome')) {
                element.classList.add('awesome');
            }
        });
    }

    window.addEventListener('scroll', checkSlide);
    window.addEventListener('resize', checkSlide); // Also check on window resize
    checkSlide(); // Initial check on page load
});