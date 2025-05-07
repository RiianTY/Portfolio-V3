// all the aura / auto typer stuff

function typeWriter(txt, elementId, speed, callback) {
  let i = 0;
  let targetElement = document.getElementById(elementId);
  function typing() {
    if (i < txt.length) {
      targetElement.textContent += txt.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else {
      // Append the blinking cursor at the end of the text
      targetElement.innerHTML += '<span class="cursor">|</span>';
      if (callback) {
        callback(); // Call the callback function if provided
      }
    }
  }
  typing();
}

document.addEventListener("DOMContentLoaded", () => {
  // Start the first typewriter effect
  typeWriter("Ryan Daynes", "header-txt", 80, function () {});
});

document.addEventListener("mousemove", function (event) {
  const element = document.querySelector(".pointer-events-none");

  if (element) {
    // Calculate the background position based on cursor position
    const xPos = event.pageX;
    const yPos = event.pageY;

    // Update the background with a radial gradient
    element.style.background = `radial-gradient(circle at ${xPos}px ${yPos}px, rgba(255, 255, 255, 1) 20px, rgba(0, 0, 0, 0) 100px)`;
  }
});
