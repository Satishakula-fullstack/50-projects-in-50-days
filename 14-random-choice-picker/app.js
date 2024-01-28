const tagsEl = document.querySelector(".tags");
const txtAreaEl = document.querySelector(".textarea");

txtAreaEl.focus();

txtAreaEl.addEventListener("keyup", (e) => {
  //   console.log(e.target.value);
  createTags(e.target.value);
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  //   console.log(tag);

  tagsEl.innerHTML = "";
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.innerText = tag;
    tagEl.classList.add("tag");
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const tag = pickRandomTag();
    highlightTag(tag);

    setTimeout(() => {
      unHightlightTag(tag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  if (tags.length > 0) {
    return tags[Math.floor(Math.random() * tags.length)];
  } else {
    return null;
  }
}
function highlightTag(tag) {
  tag.classList.add("highlight");
}
function unHightlightTag(tag) {
  tag.classList.remove("highlight");
}
