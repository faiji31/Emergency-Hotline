// ===== Select Elements =====
const heartBtns = document.querySelectorAll(".heart-btn");
const callBtns = document.querySelectorAll(".call-btn");
const copyBtns = document.querySelectorAll(".fa-copy, .copy-btn");
const heartCount = document.getElementById("heart-count");
const coinCount = document.getElementById("coin-count");
const historyList = document.getElementById("history-list");
const clearBtn = document.getElementById("clear-history");

// ===== State =====
let hearts = 0;
let coins = 100;
let copies = 0; // track copy count

// ===== Heart (Favorite) =====
heartBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("fa-regular")) {
      btn.classList.remove("fa-regular");
      btn.classList.add("fa-solid", "text-red-500");
      hearts++;
    } else {
      btn.classList.remove("fa-solid", "text-red-500");
      btn.classList.add("fa-regular");
      hearts--;
    }
    heartCount.textContent = hearts;
  });
});

// ===== Call Button =====
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

    // Get current time
    const time = new Date().toLocaleTimeString();

    alert(`Calling ${name} at ${number}...`);

    // Add to history with time
    const li = document.createElement("li");
    li.className = "border-b py-2";
    li.textContent = `${name} - ${number} | ${time}`;
    historyList.appendChild(li);
  });
});

// ===== Copy Button =====
copyBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".shadow-md");
    const number = card.querySelector("h1.text-2xl").textContent.trim();

    navigator.clipboard.writeText(number).then(() => {
      copies++;
      alert(`Copied: ${number} ✅ (Total Copies: ${copies})`);
    });
  });
});

// ===== Clear History =====
clearBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});
