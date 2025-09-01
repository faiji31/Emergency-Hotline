
const heartBtns = document.querySelectorAll(".heart-btn");
const callBtns = document.querySelectorAll(".call-btn");
const heartCount = document.getElementById("heart-count");
const coinCount = document.getElementById("coin-count");
const historyList = document.getElementById("history-list");
const clearBtn = document.getElementById("clear-history");


let hearts = 0;
let coins = 100;


heartBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    hearts++;
    heartCount.textContent = hearts;
    btn.classList.remove("fa-regular");
    btn.classList.add("fa-solid", "text-red-500");
  });
});


callBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const name = btn.getAttribute("data-name");
    const number = btn.getAttribute("data-number");

    if (coins < 20) {
      alert("Not enough coins! You need at least 20 coins to make a call.");
      return;
    }

    coins -= 20;
    coinCount.textContent = coins;

    alert(`Calling ${name} at ${number}...`);


    const li = document.createElement("li");
    li.textContent = `${name} - ${number}`;
    historyList.appendChild(li);
  });
});


clearBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});
