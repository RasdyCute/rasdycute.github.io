// Accordion functionality
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const currentlyActive = document.querySelector('.accordion-header.active');
    if (currentlyActive && currentlyActive !== header) {
      currentlyActive.classList.toggle('active');
      currentlyActive.nextElementSibling.style.display = 'none';
    }

    header.classList.toggle('active');
    const accordionContent = header.nextElementSibling;
    if (header.classList.contains('active')) {
      accordionContent.style.display = 'block';
    } else {
      accordionContent.style.display = 'none';
    }
  });
});

