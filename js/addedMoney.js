

// file added
const historySection = document.getElementById("history-container");
const donationSection = document.getElementById("donation-container");
const historyBtn = document.getElementById("history-button");
const donatinBtn = document.getElementById("donation-button");
// taka
const mainBalance = document.getElementById("main_taka");
const noakhaliBalance = document.getElementById("flood_Noakhali");
const feniBalance = document.getElementById("feni_amount");
const quotaBalance = document.getElementById("quata_mov");

// input field
const inputNoakhaly = document.getElementById("input_noakhaly");
const inputFeni = document.getElementById("inputFeni");
const inputQuta = document.getElementById("inputQuta");

// modal function
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");



// modal close button
function Close() {
  modal.classList.add("hidden");
}

// donation function
function clickDonateButton(e) {
  if (e.innerText === "History") {
    historySection.classList.remove("hidden");
    donationSection.classList.add("hidden");
    e.classList.remove("btn-outline");
    donatinBtn.classList.add("btn-outline");
  } else if (e.innerText === "Donation") {
    historySection.classList.add("hidden");
    donationSection.classList.remove("hidden");
    e.classList.remove("btn-outline");
    historyBtn.classList.add("btn-outline");
  }
}

// initilize amount
let initialBalance = 10000;
let initialBalanceOfNoakhali = 2000;
let initialBalanceOfFeni = 1500;
let initialBalanceOfQuota = 2500;

// inner
mainBalance.innerText = initialBalance;
noakhaliBalance.innerText =  initialBalanceOfNoakhali;
feniBalance.innerText = initialBalanceOfFeni;
quotaBalance.innerText = initialBalanceOfQuota;


// donate function
function calculateDonation(e) {

  console.log(e.value);

  // Calculate for noakhali flood

  if (e.value === "noakhali") {
    const donateAmount = Number(donateMoneyForNoakhali.value);

    if (donateAmount < 0){
      alert("Negative amount donation is not possible! Please enter correct value");
    }

    else if ((typeof donateAmount === "number" && !isNaN(donateAmount)) && donateAmount != " ") {
      if (donateAmount > initialBalance) {
        alert("Insufficient Balance!");
      } else {
        initialBalanceOfNoakhali += donateAmount;
        initialBalance -= donateAmount;
        mainBalance.innerText = initialBalance;
        noakhaliBalance.innerText =  initialBalanceOfNoakhali;

        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
            <div class="w-full h-auto px-12 py-5 border border-gray-300 rounded-xl">
                <p class="text-xl font-bold text-black">${donateAmount} Taka is Donate for Flood at Noakhali, Bangladesh</p>

                <p class="text-sm mt-2">Date: ${new Date()}</p>

            </div>
        `;
        historySection.appendChild(newDiv);
        // the moadl function
        modal.classList.remove("hidden");
        modal.classList.add("flex");
      }
    } else {
      alert("Please enter correct value");
    }
  } // Calculate for feni flood
  else if (e.value === "feni") {
    const donateAmount = Number(inputFeni.value);

    if (donateAmount < 0){
      alert("Negative amount donation is not possible! Please enter correct value");
    }
    else if ((typeof donateAmount === "number" && !isNaN(donateAmount)) && donateAmount != " ") {
      if (donateAmount > initialBalance) {
        alert("Insufficient Balance!");
      } else {
        initialBalanceOfFeni += donateAmount;
        initialBalance -= donateAmount;
        mainBalance.innerText = initialBalance;
        feniBalance.innerText = initialBalanceOfFeni
        ;

        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
            <div  class="w-full h-auto px-12 py-5 border border-gray-300 rounded-xl ">
                <p class="text-xl font-bold text-black">${donateAmount} Taka is Donate for Flood Relief in Feni, Bangladesh </p>

                <p class="text-sm mt-2">Date: ${new Date()}</p>

            </div>
        `;
        historySection.appendChild(newDiv);
        // the moadl function
        modal.classList.remove("hidden");
        modal.classList.add("flex");
      }
    } else {
      alert("Please enter correct value");
    }
  } else if (e.value === "quta") {
    const donateAmount = Number(inputQuta.value);

    if (donateAmount < 0){
      alert("Negative amount donation is not possible! Please enter correct value");
    }
    else if ((typeof donateAmount === "number" && !isNaN(donateAmount))  && donateAmount != " ") {
      if (donateAmount > initialBalance) {
        alert("Insufficient Balance!");
      } else {
        initialBalanceOfQuota += donateAmount;
        initialBalance -= donateAmount;
        mainBalance.innerText = initialBalance;
        quotaBalance.innerText = initialBalanceOfQuota
        ;

        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
            <div  class="w-full h-auto px-12 py-5 border border-gray-300 rounded-xl ">
                <p class="text-xl font-bold text-black">${donateAmount} Taka is Donate for Aid for Injured in the Quota Movement </p>

                <p class="text-sm mt-2">Date: ${new Date()}</p>

            </div>
        `;
        historySection.appendChild(newDiv);
        // the moadl function
        modal.classList.remove("hidden");
        modal.classList.add("flex");
      }
    } else {
      alert("Please enter correct value");
    }
  }
}