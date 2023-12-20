const aboutButton = document.getElementById('about-button')
const aboutSection = document.getElementById('About')


function scrollToAboutSection() {
   aboutSection.scrollIntoView({ behavior: 'smooth' });
  }

aboutButton.addEventListener('click', scrollToAboutSection)
