const validCodes = ["PROTOCOL", "PROTOCOL-50", "PROTOCOL50", "AKTA50", "AKTA-50"];
const input = document.getElementById("code");
const button = document.getElementById("submit");
const message = document.getElementById("message");
function normalize(v) { return v.trim().toUpperCase().replace(/\s+/g, ""); }
function check() {
  const code = normalize(input.value);
  const ok = validCodes.some(v => normalize(v) === code);
  if (ok) {
    message.textContent = "HOZZÁFÉRÉS ENGEDÉLYEZVE";
    setTimeout(() => window.location.href = "node-01.html", 700);
  } else {
    message.textContent = "HOZZÁFÉRÉS MEGTAGADVA. ÉRVÉNYTELEN AZONOSÍTÓ.";
  }
}
button.addEventListener("click", check);
input.addEventListener("keydown", e => { if (e.key === "Enter") check(); });
