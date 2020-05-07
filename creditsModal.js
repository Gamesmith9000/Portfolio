var openCreditsModal = document.querySelector('#open-credits-modal');
var closeCreditsModal = document.querySelector('#close-credits-modal');

var creditsModal = document.querySelector('#credits-modal');

openCreditsModal.addEventListener('click', function () {
    setCreditsModalVisibility(true)
});

closeCreditsModal.addEventListener('click', function () {
    setCreditsModalVisibility(false)
});

function setCreditsModalVisibility (makeModalVisible) {
    if(makeModalVisible === true) {
        creditsModal.style.display = 'block';
        openCreditsModal.style.display = 'none';
    }
    if(makeModalVisible === false) {
        creditsModal.style.display = 'none';
        openCreditsModal.style.display = 'block';

    }
}

