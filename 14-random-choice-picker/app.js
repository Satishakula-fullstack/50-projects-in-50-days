const tagsEl = document.querySelector(".tags");
const txtArea = document.getElementById("textarea");

txtArea.focus();

txtArea.addEventListener("keyup", (e) => {
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

  tagsEl.innerHTML = "";
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);

    setTimeout(() => {
      unHightlightTag(randomTag);
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
