const heartCountEl = document.getElementById("heartCount");
const coinCountEl  = document.getElementById("coinCount");
const copyCountEl  = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");
const clearBtn = document.getElementById("clearHistoryBtn");

var hearts = parseInt(heartCountEl.innerText);
var coins  = parseInt(coinCountEl.innerText);
var copies = parseInt(copyCountEl.innerText);


clearBtn.onclick = function() {
  historyList.innerHTML = "";
  alert("History Cleared!");
};

const cards = document.getElementsByClassName("card");

for (var i = 0; i < cards.length; i++) {
  const card = cards[i];

  const heartBtn = card.querySelector(".heart-button");
  
  heartBtn.addEventListener("click", function() {
    hearts++;
    heartCountEl.innerText = hearts;
    heartBtn.classList.add("liked");

  });

  const copyBtn = card.querySelector(".btn-copy");
  copyBtn.addEventListener("click", function() {
    var number = card.querySelector(".card-number").innerText;
    navigator.clipboard.writeText(number);

    copies++;
    copyCountEl.innerText = copies;

    alert("Copied: " + number);
  });


  const callBtn = card.querySelector(".btn-call");
  callBtn.addEventListener("click", function() {
    const service = card.querySelector(".card-name").innerText;
    var number  = card.querySelector(".card-number").innerText;

    if (coins < 20) {
      alert("Not enough coins!");
      return;
    }

    coins -= 20;
    coinCountEl.innerText = coins;

    alert("Calling " + service + " at " + number);
    addToHistory(service, number);
  });
}


function addToHistory(service, number) {
  const li = document.createElement("li");


  const leftDiv = document.createElement("div");
  leftDiv.classList.add("history-left");

  const serviceEl = document.createElement("h2");
  serviceEl.classList.add("history-service");
  serviceEl.innerText = service;

  const numberEl = document.createElement("h3");
  numberEl.classList.add("history-number");
  numberEl.innerText = number;

  leftDiv.appendChild(serviceEl);
  leftDiv.appendChild(numberEl);

  const rightDiv = document.createElement("div");
  rightDiv.classList.add("history-time");
  rightDiv.innerText = getCurrentTime();

  li.appendChild(leftDiv);
  li.appendChild(rightDiv);

  historyList.prepend(li);
}



function getCurrentTime() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
