const input = document.getElementById("code");
const button = document.getElementById("submit");
const message = document.getElementById("message");
function normalize(v) { return v.trim().toUpperCase().replace(/\s+/g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }
function check() {
  const code = normalize(input.value);
  const ok = acceptedCodes.some(v => normalize(v) === code);
  if (ok) {
    message.textContent = "HOZZÁFÉRÉS ENGEDÉLYEZVE";
    setTimeout(() => window.location.href = nextPage, 700);
  } else {
    message.textContent = "HOZZÁFÉRÉS MEGTAGADVA. ÉRVÉNYTELEN AZONOSÍTÓ.";
  }
}
button.addEventListener("click", check);
input.addEventListener("keydown", e => { if (e.key === "Enter") check(); });
