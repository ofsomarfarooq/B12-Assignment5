const heartCountEl = document.getElementById('heartCount');
const coinCountEl  = document.getElementById('coinCount');
const copyCountEl  = document.getElementById('copyCount');

// Example functions (call these from other parts later)
function addHeart() {
  heartCountEl.textContent = parseInt(heartCountEl.textContent,10) + 1;
}
function spendCoins(amount) {
  const current = parseInt(coinCountEl.textContent,10);
  if (current >= amount) {
    coinCountEl.textContent = current - amount;
    return true;
  }
  return false;
}
function addCopy() {
  copyCountEl.textContent = parseInt(copyCountEl.textContent,10) + 1;
}