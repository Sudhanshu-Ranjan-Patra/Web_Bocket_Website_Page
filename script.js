//counter
{
    const pf = document.getElementById('pf'); // Replace 'yourParagraphId' with the actual ID of your paragraph element

    let i = 0;

    function updateCounter() {
        if (i <= 50) {
            pf.textContent = i + "+"; // Use textContent for plain text
            i++;
            setTimeout(updateCounter, 50); // Adjust the delay (100ms) for speed
        } else {
            pf.textContent = "50+";
        }
    }
}
updateCounter();
{
    const hc = document.getElementById('hc'); // Replace 'yourParagraphId' with the actual ID of your paragraph element

    let i = 0;

    function updateCounter() {
        if (i <= 40) {
            hc.textContent = i + "+"; // Use textContent for plain text
            i++;
            setTimeout(updateCounter, 100); // Adjust the delay (100ms) for speed
        } else {
            hc.textContent = "40+";
        }
    }
}
updateCounter();
{
    const team = document.getElementById('team'); // Replace 'yourParagraphId' with the actual ID of your paragraph element

    let i = 0;

    function updateCounter() {
        if (i <= 30) {
            team.textContent = i + "+"; // Use textContent for plain text
            i++;
            setTimeout(updateCounter, 50); // Adjust the delay (100ms) for speed
        } else {
            team.textContent = "30+";
        }
    }
}
updateCounter();



document.addEventListener('DOMContentLoaded', function() {
    const choiceButtons = document.querySelectorAll('.choice-button');
    const contentAreas = document.querySelectorAll('.content-area > div');

    choiceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');

            contentAreas.forEach(area => {
                if (area.id === targetId) {
                    area.style.display = 'flex';
                } else {
                    area.style.display = 'none';
                }
            });
        });
    });

    // Initially show option1 and hide option2
    document.getElementById('option1').style.display = 'flex';
    document.getElementById('option2').style.display = 'none';
});


const myElement1 = document.getElementById('btn-1');
const myElement2 = document.getElementById('btn-2');

myElement1.classList.toggle('btn-style');

myElement1.addEventListener('click', function() {
    this.classList.toggle('btn-style');
    myElement2.classList.remove('btn-style');
});

myElement2.addEventListener('click', function() {
    this.classList.toggle('btn-style');
    myElement1.classList.remove('btn-style');
});

