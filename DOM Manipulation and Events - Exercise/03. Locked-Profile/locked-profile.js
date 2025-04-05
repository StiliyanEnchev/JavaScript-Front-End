document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const profiles = document.querySelectorAll('.profile');

    profiles.forEach(profile => {
        const showMoreButton = profile.querySelector('button');
        const hiddenFields = profile.querySelector('.hidden-fields');
        const lockRadio = profile.querySelectorAll('input[type="radio"]'); 

        showMoreButton.addEventListener('click', function () {
            const isLocked = lockRadio[0].checked; 

            if (isLocked) {
                return; 
            }

            if (hiddenFields.classList.contains('active')) {
                hiddenFields.classList.remove('active');
                showMoreButton.textContent = 'Hide it';
            } else {
                hiddenFields.classList.add('active');
                showMoreButton.textContent = 'Show more';
            }
        });
    });
}
