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
scrollToSection('projects');
scrollToSection('achievements');


document.addEventListener('DOMContentLoaded', function () {
    const projects = document.getElementById('projects');
    const overlay = document.querySelector('.overlay');

    projects.addEventListener('click', function (event) {
        const projectsContainer = event.target.closest('.projects-container');
        
        if (projectsContainer) {
            const projectId = projectsContainer.id;
            const popupId = 'popup' + projectId.charAt(projectId.length - 1);

            overlay.style.display = 'flex';

            const popup = document.getElementById(popupId).cloneNode(true);
            overlay.appendChild(popup);

            popup.querySelector('.closeButton').addEventListener('click', function () {
                overlay.style.display = 'none';
                overlay.removeChild(popup);
            });
        }
    });
});

