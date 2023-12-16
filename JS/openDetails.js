document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.querySelector('.projects.wrapper');
    const projects = document.querySelectorAll('.project');
    const projectDetailsContainer = document.getElementById('projectDetails');
  
    function updateProjectDetails(clickedProject) {    
      const projectDetailsImage = projectDetailsContainer.querySelector('.project-details--image');
      const projectDetailsTitle = projectDetailsContainer.querySelector('.titles h4.task');
      const projectDetailsSubtitle = projectDetailsContainer.querySelector('.titles span.title');
      const projectDetailsDescription = projectDetailsContainer.querySelector('.description');
      const githubLink = projectDetailsContainer.querySelector('.buttons a:nth-child(1)');
      const netlifyLink = projectDetailsContainer.querySelector('.buttons a:nth-child(2)');

      const projectImage = clickedProject.querySelector('img').src;
      const projectName = clickedProject.querySelector('.titles h4.task').textContent;
      const projectSubtitle = clickedProject.querySelector('.titles span.title').textContent;
      const githubURL = clickedProject.querySelector('.buttons a:nth-child(1)').href;
      const netlifyURL = clickedProject.querySelector('.buttons a:nth-child(2)').href;
  
      projectDetailsImage.src = projectImage;
      projectDetailsTitle.textContent = projectName;
      projectDetailsSubtitle.textContent = projectSubtitle;
      projectDetailsDescription.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel dictum erat, quis lacinia augue. Vestibulum sit amet nibh orci. Quisque mattis nec sapien ac lobortis. Nullam malesuada risus nec ligula convallis viverra. Pellentesque laoreet neque eget gravida vestibulum. Etiam sit amet fringilla orci. Mauris hendrerit id erat sed vulputate. Aliquam euismod ligula sit amet orci porta convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.'; // Add your project description here
      githubLink.href = githubURL;
      netlifyLink.href = netlifyURL;
  
      carouselContainer.style.display = 'none';
      projectDetailsContainer.style.display = 'flex';
    }
  
    projects.forEach(project => {
      project.addEventListener('click', function () {
        updateProjectDetails(project);
      });
    });
  
    const closeButton = projectDetailsContainer.querySelector('.project-details--close button');
    closeButton.addEventListener('click', function () {
      projectDetailsContainer.style.display = 'none';
      carouselContainer.style.display = 'block';
    });
  });
  