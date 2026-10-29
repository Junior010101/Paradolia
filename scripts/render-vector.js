const generator = document.getElementById("svg-generator");

const spawnPattern = (path) => {
  let vectorData = path || localStorage.getItem("vectorPath");

  if (!generator || !vectorData) {
    return;
  }

  generator.innerHTML = `<svg width="700" height="440" viewBox="0 0 849 602" fill="none" xmlns="http://www.w3.org/2000/svg">${vectorData}</svg>`;
};

spawnPattern();
