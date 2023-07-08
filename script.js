// Displaying social media content if button clicked by user

let shareButton = document.getElementById('share');
let shareSocialMedia = document.getElementById('shareContent');
var displayStatus = true;

shareButton.addEventListener('click', function() {
   if(!displayStatus) {
    shareSocialMedia.style.display = 'none';
    displayStatus = true;
   }

   else {
    shareSocialMedia.style.display = 'flex';
    displayStatus = false;
   }
   
})


// Change the icon share as long as it is clicked

var iconImg = document.getElementById('swap-icon');

function swapImg() {
    if(iconImg.src.endsWith('images/icon-share.svg')) {
        iconImg.src = 'images/icon-share-states.svg';
        iconImg.style.backgroundColor = '#ecf2f8';
        iconImg.style.padding = '0.5rem';
        iconImg.style.borderRadius = '50%';
    }

    else {
        iconImg.src = 'images/icon-share.svg';
        iconImg.style.backgroundColor = '#48556a';
        iconImg.style.padding = '0.5rem';
        iconImg.style.borderRadius = '50%';
    }
}

swapImg();
