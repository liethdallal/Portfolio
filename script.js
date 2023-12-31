function scrollToSection(sectionId) {
  const button = document.getElementById(`${sectionId}-button`);
  const section = document.getElementById(sectionId);

  function scrollTo() {
    section.scrollIntoView({ behavior: 'smooth' });
  }

  button.addEventListener('click', scrollTo);
}

// Call the function for each section
scrollToSection('about');
scrollToSection('projects-title-container');
scrollToSection('achievments');
scrollToSection('contact');


document.addEventListener('DOMContentLoaded', function () {
  const projects = document.getElementById('projects');
  let openModalId = null;

  projects.addEventListener('click', function (event) {
    const projectsContainer = event.target.closest('.projects-container');

    if (projectsContainer) {
      const projectId = projectsContainer.id;
      const modalId = `modal${projectId.charAt(projectId.length - 1)}`;

      const modalElement = document.getElementById(modalId);

      if (modalElement) {
        if (openModalId) {
          // Close the currently open modal
          document.getElementById(openModalId).style.display = 'none';
        }

        // Open the clicked modal
        modalElement.style.display = 'block';
        openModalId = modalId;

        const closeButton = modalElement.querySelector('.closeButton');
        if (closeButton) {
          closeButton.addEventListener('click', function () {
            // Close the current modal and reset openModalId
            modalElement.style.display = 'none';
            openModalId = null;
          });
        } else {
          console.error('Close button not found in the modal.');
        }
      } else {
        console.error(`Modal element with ID '${modalId}' not found.`);
      }
    }
  });
});








