const buttons = document.querySelectorAll('.choice-button');
const contentAreas = document.querySelectorAll('.content-area > div');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.dataset.target;

        // Remove active class from all buttons and hide all content
        buttons.forEach(btn => btn.classList.remove('active'));
        contentAreas.forEach(area => area.classList.add('hidden'));

        // Add active class to the clicked button and show the corresponding content
        button.classList.add('active');
        document.getElementById(target).classList.remove('hidden');
    });
});    