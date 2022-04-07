const { getAll, getItem, post } = require("./requests");

const form = document.querySelector("#form");
const hiddenPost = document.querySelector(".post-hide");
hiddenPost.classList.add("hidden");
const inputForm = document.querySelector(".main-grid");
const backBtn = document.querySelector(".back");

async function updateWindow() {
  let hash = window.location.hash.substring(1);
  if (hash) {
    let data = await getItem(hash);
    showSpecificPost(data);
  }
}

function showSpecificPost(data) {
  form.classList.add("hidden");
  hiddenPost.classList.remove("hidden");
  if (typeof data !== "undefined") {
    document.querySelector(".post-title").textContent = data.title;
    document.querySelector(".post-name").textContent = data.pseudonym;
    document.querySelector(".post-body").textContent = data.body;
  } else {
    document.querySelector(".post-title").textContent = "There is no post here";
  }
}

window.addEventListener("hashchange", updateWindow);
window.addEventListener("load", updateWindow);
inputForm.addEventListener("submit", post);

backBtn.addEventListener("click", () => {
  window.location.hash = "";
});
