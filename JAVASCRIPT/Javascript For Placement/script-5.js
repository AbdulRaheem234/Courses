const btn = document.querySelector("button");
btn.addEventListener("click", async function () {
  let heavy = await import("./script-6.js");
  heavy.veryHeavy();
});
