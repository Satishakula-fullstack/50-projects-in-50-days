const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttons = document.getElementById("buttons");

console.log(sounds);
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  console.log(sound);

  document.getElementById("buttons").appendChild(btn);
});
