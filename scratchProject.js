function scratchProject(elementId, projectId) {
  document.getElementById(elementId).outerHTML = "<iframe id='" + elementId + "' src='https://scratch.mit.edu/projects/embed/" + projectId + "/?autostart=true' frameborder='0' ></iframe>";
}
