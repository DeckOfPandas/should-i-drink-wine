// Site script. Loaded with `defer`, so the DOM is ready when this runs
// and nothing needs to wait for DOMContentLoaded.
(function () {
  "use strict";

  const question = document.querySelector("main h1");
  const links = document.querySelectorAll("main nav a");

  // Keyboard shortcuts: Y / N follow the first and second link, Enter
  // follows a lone link. Pages with no links ignore all three.
  const keys = { y: 0, n: 1, enter: 0 };
  document.addEventListener("keydown", function (event) {
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    const index = keys[event.key.toLowerCase()];
    if (index === undefined) return;
    if (event.key === "Enter" && links.length !== 1) return;
    const link = links[index];
    if (link) link.click();
  });

  // Add new behaviour below. `question` and `links` are already in scope.
})();
