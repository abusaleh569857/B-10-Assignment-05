// Access Button & Container

const historySection = document.getElementById("history-container");
const donationSection = document.getElementById("donation-container");
const historyButton = document.getElementById("history-button");
const donationButton = document.getElementById("donation-button");

// Access All Balance

const mainBalance = document.getElementById("initial-balance");
const noakhaliBalance = document.getElementById("noakhali-balance");
const feniBalance = document.getElementById("feni-balance");
const quotaBalance = document.getElementById("quota-balance");

// Access Input Item

const donateMoneyForNoakhali = document.getElementById("donate-money-for-noakhali");
const donateMoneyForFeni = document.getElementById("donate-money-for-feni");
const donateMoneyForQuota = document.getElementById("donate-money-for-Quota");

// Access Modal Id

const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");



// Modal Close 

function Close() {
  modal.classList.add("hidden");
}

//  Button functionality 

function clickDonateButton(e) {
  if (e.innerText === "History") {
    historySection.classList.remove("hidden");
    donationSection.classList.add("hidden");
    e.classList.remove("btn-outline");
    donationButton.classList.add("btn-outline");
  } else if (e.innerText === "Donation") {
    historySection.classList.add("hidden");
    donationSection.classList.remove("hidden");
    e.classList.remove("btn-outline");
    historyButton.classList.add("btn-outline");
  }
}

// Initialize The Started Balance

let initialBalance = 10000;
let initialBalanceOfNoakhali = 2000;
let initialBalanceOfFeni = 1500;
let initialBalanceOfQuota = 2500;

// Set Balance By using innerText

mainBalance.innerText = initialBalance;
noakhaliBalance.innerText =  initialBalanceOfNoakhali;
feniBalance.innerText = initialBalanceOfFeni;
quotaBalance.innerText = initialBalanceOfQuota;


// Calculate Donation 

function calculateDonation(e) {

  console.log(e.value);

  // Calculate for noakhali flood

  if (e.value === "noakhali") {
    const donateAmount = Number(donateMoneyForNoakhali.value);
    console.log(donateAmount);

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
            <div class="w-full h-auto px-10 py-6 border border-gray-300 rounded-xl ">
                <p class="text-xl font-bold text-black">${donateAmount} Taka  Donate for Flood at Noakhali, Bangladesh</p>

                <p class="text-sm mt-2">Date: ${new Date()}</p>

            </div>
        `;
        historySection.appendChild(newDiv);
        // Modal function 
        modal.classList.remove("hidden");
        modal.classList.add("flex");
      }
    } else {
      alert("Please enter correct value");
    }
  } // Calculate for feni flood
  else if (e.value === "feni") {
    const donateAmount = Number(donateMoneyForFeni.value);

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
            <div  class="w-full h-auto px-10 py-6 border border-gray-300 rounded-xl">
             
                  <p class="text-xl font-bold text-black">${donateAmount} Taka  Donate for Flood Relief in Feni, Bangladesh </p>

                  <p class="text-sm mt-2">Date: ${new Date()}</p>
               


            </div>
        `;
        historySection.appendChild(newDiv);
      
        modal.classList.remove("hidden");
        modal.classList.add("flex");
      }
    } else {
      alert("Please enter correct value");
    }
  } else if (e.value === "quta") {
    const donateAmount = Number(donateMoneyForQuota.value);

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
                <p class="text-xl font-bold text-black">${donateAmount} Taka  Donate for Aid for Injured in the Quota Movement </p>

                <p class="text-sm mt-2">Date: ${new Date()}</p>

            </div>
        `;
        historySection.appendChild(newDiv);
     
        modal.classList.remove("hidden");
        modal.classList.add("flex");
      }
    } else {
      alert("Please enter correct value");
    }
  }
}