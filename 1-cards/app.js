const panels = document.querySelectorAll(".panel");

// console.log(panels);

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

const removeActiveClasses = function () {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
