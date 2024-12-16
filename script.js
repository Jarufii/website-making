const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-btn');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');
const modalImage = document.getElementById('modal-image');
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        modalTitle.textContent = item.getAttribute('data-title');
        modalDescription.textContent = item.getAttribute('data-description');
        modalPrice.textContent = item.getAttribute('data-price');
        modalImage.src = item.getAttribute('data-image'); 
        modalImage.alt = item.getAttribute('data-title'); 
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
