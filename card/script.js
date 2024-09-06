   // Get elements
   const readMoreButtons = document.querySelectorAll('.card__button');
   const modal = document.getElementById('modal');
   const closeModal = document.getElementById('close-modal');
   const modalTitle = document.querySelector('.modal__title');
   const modalDescription = document.querySelector('.modal__description');
   const body = document.body;
   
   // Show modal function
   function showModal(title, description) {
      modalTitle.textContent = title;
      modalDescription.innerHTML = description; // Use innerHTML to support HTML content
      modal.classList.add('show');
      body.classList.add('modal-active');
   }
   
   // Hide modal function
   function hideModal() {
      modal.classList.remove('show');
      body.classList.remove('modal-active');
   }
   
   // Attach click event to each "Read More" button
   readMoreButtons.forEach(button => {
      button.addEventListener('click', (event) => {
         event.preventDefault(); // Prevent default anchor behavior
   
         // Get the parent article element
         const article = button.closest('.card__article');
   
         // Get title and description from data attributes
         const title = article.getAttribute('data-title');
         const description = article.getAttribute('data-description');
   
         // Show modal with the relevant title and description
         showModal(title, description);
      });
   });
   
   // Attach click event to close button
   closeModal.addEventListener('click', hideModal);
   
   // Close modal when clicking outside the modal content
   window.addEventListener('click', (event) => {
      if (event.target === modal) {
         hideModal();
      }
   });

   const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
      // reset: true
  })

  function filterCards() {
   const input = document.getElementById('search-input').value.toLowerCase();
   const cards = document.querySelectorAll('.card__article');

   cards.forEach(card => {
       const title = card.getAttribute('data-title').toLowerCase();
       const description = card.getAttribute('data-description').toLowerCase();

       if (title.includes(input) || description.includes(input)) {
           card.style.display = '';
       } else {
           card.style.display = 'none';
       }
   });
}


