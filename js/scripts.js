
function popupFunc(){
    document.getElementById('modal-id').style.display = 'flex';
    document.getElementById('popup').style.display = 'block';
    document.getElementById('contact-button-id').style.display = 'none';
}


function closePopup(){
    document.getElementById('popup').style.display = 'none';
    document.getElementById('modal-id').style.display = 'none';
    document.getElementById('contact-button-id').style.display = 'block';
}