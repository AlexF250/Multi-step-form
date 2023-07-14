
"use strict";

//step 1 variables

const username = document.querySelector(".form-name");
const tel = document.querySelector(".form-number");
const email = document.querySelector(".form-email");
const numberTest = /\D/;
const phoneTest = /^\d{10}$/;
const lettersTest = /^[A-Za-z]+$/;
const emailTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const labelName = document.querySelector(".label-name");
const labelTel = document.querySelector(".label-tel");
const labelEmail = document.querySelector(".label-email");
const firstBtn = document.querySelector(".btn-1");

//step 2 variables

const month = document.querySelector(".monthly");
const yearly = document.querySelector(".yearly");
const check = document.querySelector(".check-switch");
const arcadePrice = document.querySelector(".arcade-price");
const advancePrice = document.querySelector(".advance-price");
const proPrice = document.querySelector(".pro-price");
const freeMonths = document.querySelectorAll(".free");
const cards = document.querySelectorAll(".card-check");
const secondBtn = document.querySelector(".btn-2");
const firstBack = document.querySelector(".backBtn-1");

//step 3 variables

const onlineService = document.querySelector(".online");
const largeStorage = document.querySelector(".storage");
const customProfile = document.querySelector(".profile");
const secondBack = document.querySelector(".backBtn-2");
const thirdBtn = document.querySelector(".btn-3");
const addOn = document.querySelectorAll(".service-check");

//step 4 variables

const resumePlan = document.querySelector(".plan");
const changeModality = document.querySelector(".changeModality");
const planPrice = document.querySelector(".planPrice");
const summaryOnline = document.querySelector(".onlService");
const summaryStorage = document.querySelector(".lgStorage");
const summaryProfile = document.querySelector(".custProfile");
const priceOnline = document.querySelector(".onlineServicePrice");
const priceStorage = document.querySelector(".largeStoragePrice");
const priceProfile = document.querySelector(".customProfilePrice");
const totalText = document.querySelector(".totalText");
const totalPrice = document.querySelector(".totalPrice");
const thirdBack = document.querySelector(".backBtn-3");
const forthBtn = document.querySelector(".btn-4");

let abr;
let modality = "monthly";
let cardSelection;

const priceMapMonthly = {
    "arcade": "$9/mo",
    "advance": "$12/mo",
    "pro": "$15/mo",
    "onlineService": "+$1/mo",
    "storageService": "+$2/mo",
    "customService": "+$2/mo"
};

const priceMapYearly = {
    "arcade": "$90/yr",
    "advance": "$120/yr",
    "pro": "$150/yr",
    "onlineService": "+$10/yr",
    "storageService": "+$20/yr",
    "customService": "+$20/yr"
};

//functions needed for validation and price changes

//validation

const nameValidation = ()=>{
    if(username.value === ""){
        labelName.classList.add("empty")
        labelName.classList.remove("formatError")
        username.style.border = `1px solid hsl(354, 84%, 57%)`
    }
    else if(lettersTest.test(username.value)==false){
        username.style.border = `1px solid hsl(354, 84%, 57%)`
        labelName.classList.add("formatError")
        labelName.classList.remove("empty")
    }
    else{
        username.style.border = `1px solid #dee2e6`
        labelName.classList.remove("empty")
        labelName.classList.remove("formatError")
        return true
    }
}

const emailValidation = ()=>{
    if(email.value === ""){
        labelEmail.classList.add("empty")
        labelEmail.classList.remove("errorEmail")
        email.style.border = `1px solid hsl(354, 84%, 57%)`
    }

    else if(emailTest.test(email.value)==false){
        labelEmail.classList.add("errorEmail")
        labelEmail.classList.remove("empty")
        email.style.border = `1px solid hsl(354, 84%, 57%)`
    }

    else{
        labelEmail.classList.remove("empty")
        labelEmail.classList.remove("errorEmail")
        email.style.border = `1px solid #dee2e6`
        return true
    }
}

const telValidation = ()=>{
    if(tel.value === ""){
        labelTel.classList.add("empty")
        labelTel.classList.remove("errorPhone")
        tel.style.border = `1px solid hsl(354, 84%, 57%)`
    }

    else if(phoneTest.test(tel.value)==false){
        labelTel.classList.add("errorPhone")
        labelTel.classList.remove("empty")
        tel.style.border = `1px solid hsl(354, 84%, 57%)`
    }

    else{
        labelTel.classList.remove("errorPhone")
        labelTel.classList.remove("empty")
        tel.style.border = `1px solid #dee2e6`
        return true
    }
}

//prices changes

const section4Start = ()=>{
    resumePlan.textContent = `${cardSelection.id} (${modality})`;
    planPrice.textContent = `${document.querySelector(`.${cardSelection.id}-price`).textContent}`
    priceOnline.textContent = `${onlineService.textContent}`;
    priceProfile.textContent = `${largeStorage.textContent}`;
    priceStorage.textContent = `${customProfile.textContent}`;
    let planAdd = planPrice.textContent.replace(/[^0-9]+/g, "");
    let total = 0;

    for(let i = 0; i<3; i++){

            if(i==0){
                if(addOn[0].checked == true){
                summaryOnline.classList.remove("d-none")
                summaryOnline.classList.add("d-flex")
                let onlineAdd = priceOnline.textContent.replace(/[^0-9]+/g, "");
                
                total += parseInt(onlineAdd);
                }
                else{
                summaryOnline.classList.add("d-none")
                summaryOnline.classList.remove("d-flex")
                }

            }
            else if(i==1){
                if(addOn[1].checked == true){
                    summaryStorage.classList.remove("d-none")
                    summaryStorage.classList.add("d-flex")
                    let storageAdd = priceStorage.textContent.replace(/[^0-9]+/g, "");
                    
                    total += parseInt(storageAdd);
                    }
                    else{
                    summaryStorage.classList.add("d-none")
                    summaryStorage.classList.remove("d-flex")
                    }
            }
            else if(i==2){
                if(addOn[2].checked == true){
                    summaryProfile.classList.remove("d-none")
                    summaryProfile.classList.add("d-flex")
                    let customAdd = priceProfile.textContent.replace(/[^0-9]+/g, "");
                    
                    total += parseInt(customAdd);
                    }
                    else{
                    summaryProfile.classList.add("d-none")
                    summaryProfile.classList.remove("d-flex")
                    }
            }
            else{
                summaryProfile.classList.add("d-none")
                summaryOnline.classList.add("d-none")
                summaryStorage.classList.add("d-none")
                summaryOnline.classList.remove("d-flex")
                summaryProfile.classList.remove("d-flex")
                summaryStorage.classList.remove("d-flex")
            }
    }

total += parseInt(planAdd);

totalPrice.textContent =`+$${total}/${abr}`;


}

const changePrice = ()=>{

    if(modality == "monthly"){
        check.checked = true;
        month.classList.add("choice")
        yearly.classList.remove("choice")
        arcadePrice.textContent = priceMapMonthly.arcade;
        advancePrice.textContent = priceMapMonthly.advance;
        proPrice.textContent = priceMapMonthly.pro;
        onlineService.textContent = priceMapMonthly.onlineService;
        largeStorage.textContent = priceMapMonthly.storageService;
        customProfile.textContent = priceMapMonthly.customService;
        totalText.textContent = `Total (per month)`;
        abr = 'mo'
        for(let i = 0; i<3;i++){
            freeMonths[i].classList.add("d-none")
            freeMonths[i].classList.remove("d-block")
            }
    }

    else{
        check.checked = false;
        month.classList.remove("choice")
        yearly.classList.add("choice")
        arcadePrice.textContent = priceMapYearly.arcade;
        advancePrice.textContent = priceMapYearly.advance;
        proPrice.textContent = priceMapYearly.pro;
        onlineService.textContent = priceMapYearly.onlineService;
        largeStorage.textContent = priceMapYearly.storageService;
        customProfile.textContent = priceMapYearly.customService;
        totalText.textContent = `Total (per year)`;
        abr = 'yr'
        for(let i = 0; i<3;i++){
            freeMonths[i].classList.remove("d-none")
            freeMonths[i].classList.add("d-block")
            }
    }
}


//step transition

const stepTransition = (step,a)=>{

if(a=="forward"){
        document.querySelector(`.section-${step}`).classList.remove("d-block")
        document.querySelector(`.section-${step}`).classList.add("d-none")
        document.querySelector(`.section-${step+1}`).classList.remove("d-none")
        document.querySelector(`.section-${step+1}`).classList.add("d-block")
        document.querySelector(`.step${step}`).classList.remove("currentStep")
        document.querySelector(`.step${step+1}`).classList.add("currentStep")
}

else if(a=="back"){
        document.querySelector(`.section-${step}`).classList.add("d-block")
        document.querySelector(`.section-${step}`).classList.remove("d-none")
        document.querySelector(`.section-${step+1}`).classList.remove("d-block")
        document.querySelector(`.section-${step+1}`).classList.add("d-none")
        document.querySelector(`.step${step}`).classList.add("currentStep")
        document.querySelector(`.step${step+1}`).classList.remove("currentStep")
}


}

const stepValidation = (step)=>{
    for(let i = 0;i<5;i++){
        if(step == 1){
            emailValidation()
            nameValidation()
            telValidation()
            if(nameValidation()&&emailValidation()&&telValidation()){
                stepTransition(1,"forward")
            }
        }

    else if(step == 2){
        if(cards[0].checked||cards[1].checked||cards[2].checked){
            stepTransition(2,"forward")
        
            for(let i = 0; i<3;i++){
                if(cards[i].checked == true){
                    cardSelection = cards[i];
                }
            }

            changePrice()
        }
    }

    else if(step == 3){
        stepTransition(3,"forward")
        section4Start()
    }

    else if(step == 4){
        stepTransition(4,'forward')
    }
}
}



//step 1

username.addEventListener('input',()=>{
    nameValidation()
})

email.addEventListener('input',()=>{
    emailValidation()
})

tel.addEventListener('input',()=>{
    telValidation()
})


//step 1 button

firstBtn.addEventListener('click',(e)=>{
    stepValidation(1)
    e.preventDefault()
})


//step2

//step 2 switch

check.addEventListener("change",()=>{

    if(check.checked == true){
        modality = "monthly";
        changePrice()
    }

    else{
        modality = "yearly";
        changePrice()
    }

})

// step 2 cards

cards[0].addEventListener('click',()=>{
    if(cards[0].checked == true){
        cards[1].checked = false;
        cards[2].checked = false;
    }
})

cards[1].addEventListener('click',()=>{
    if(cards[1].checked == true){
        cards[0].checked = false;
        cards[2].checked = false;
    }
})

cards[2].addEventListener('click',()=>{
    if(cards[2].checked == true){
        cards[1].checked = false;
        cards[0].checked = false;
    }
})

//step 2 button

secondBtn.addEventListener('click',(e)=>{
    stepValidation(2)
    e.preventDefault()
})

firstBack.addEventListener('click', (e)=>{
    stepTransition(1,"back")
    e.preventDefault()
})

//step 3

//step 3 button

thirdBtn.addEventListener("click",(e)=>{
    stepValidation(3)
    e.preventDefault()
})

secondBack.addEventListener('click',(e)=>{
    stepTransition(2,'back')
    e.preventDefault()
})

//step 4

// step 4 change modality button

changeModality.addEventListener("click",(e)=>{

    if(modality == "monthly"){
        modality = "yearly"
        changePrice()
        section4Start()
    }
    else{
        modality = "monthly"
        changePrice()
        section4Start()
    }
})

//step 4 button

thirdBack.addEventListener("click",(e)=>{
    stepTransition(3,"back")
    e.preventDefault()
})

forthBtn.addEventListener('click',(e)=>{
    stepValidation(4)
    e.preventDefault()
})



