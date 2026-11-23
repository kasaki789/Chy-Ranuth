document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('#projects-grid .card');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // 1. Update the active button styling
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      // 2. Get the selected category
      const selectedCategory = button.getAttribute('data-filter');

      // 3. Show or hide project cards based on the category
      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');

        if (selectedCategory === 'all' || cardCategory === selectedCategory) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});