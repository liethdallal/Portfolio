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

