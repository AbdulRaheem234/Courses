const balanceEl = document.getElementById("bal");
const messageEl = document.getElementById("msg");
const Bank = (function () {
  let bankBalance = 35000;
  function updateBalanceDisplay() {
    balanceEl.innerHTML = `<span class="balance-currency">₹</span>${bankBalance}`;
  }
  function setMessage(text, type = "info") {
    messageEl.textContent = text;
    messageEl.classList.remove("msg-success", "msg-error", "msg-info");
    if (type === "success") messageEl.classList.add("msg-success");
    else if (type === "error") messageEl.classList.add("msg-error");
    else messageEl.classList.add("msg-info");
  }
  return {
    check() {
      updateBalanceDisplay();
      setMessage(`Current balance: ₹${bankBalance}`, "info");
    },
    add(val) {
      if (typeof val !== "number" || isNaN(val) || !isFinite(val) || val <= 0) {
        setMessage("⚠️ Please enter a valid positive amount.", "error");
        return;
      }
      bankBalance += val;
      updateBalanceDisplay();
      setMessage(`✅ ₹${val} deposited successfully.`, "success");
    },
    draw(val) {
      if (typeof val !== "number" || isNaN(val) || !isFinite(val) || val <= 0) {
        setMessage("⚠️ Enter a valid positive amount.", "error");
        return;
      }
      if (val > bankBalance) {
        setMessage(
          `❌ Insufficient balance! (₹${bankBalance} available)`,
          "error",
        );
        return;
      }
      bankBalance -= val;
      updateBalanceDisplay();
      setMessage(`💸 ₹${val} withdrawn.`, "success");
    },
  };
})();
function getValue() {
  const raw = document.getElementById("amt").value;
  const num = Number(raw);
  return num;
}
Bank.check();
document.getElementById("amt").addEventListener("focus", function () {
  messageEl.classList.remove("msg-success", "msg-error", "msg-info");
  messageEl.textContent = "✏️ Enter amount";
});
document.getElementById("amt").addEventListener("blur", function () {
  if (this.value === "") {
    messageEl.classList.remove("msg-success", "msg-error", "msg-info");
    messageEl.textContent = "✨ Ready";
  }
});
