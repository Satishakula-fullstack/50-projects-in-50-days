const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  insert.innerHTML = `
     <div class="key">
        ${event.key === "" ? "Space" : event.key}
        <small>event.Key</small>
      </div>
      <div class="key">
        ${event.keyCode}
 t        <small>event.KeyCode</small>
      </div>
      <div class="key">
        ${event.code}
        <small>event.Code</small>
      </div>

    `;
});
