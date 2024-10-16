function calculatePrice(){
    let price = 100;

    const educationCoef = {
        bachelor: 1.5,
        college: 1.2,
        high_school: 1.05,
        middle_school: 0.9,
    };
    const netWorthCoef = {
        upper_class: 2,
        middle_class: 1.5,
        lower_class: 1.2,
    };
    const casteCoef = {
        brahim: 100,
        kshatriya: 50,
        vaishya: 20,
        shudra: 10,
        varna: -50,
    };
    const skills = {
        skill1: 10,
        skill2: 20,
        skill3: 15,
        skill4: 10,
    }
    const ageCoef = {
        "18-23": 1.5,
        "24-27": 1.2,
        "28+": 0.95,
    };
    const repCoef = {
        rep1: 0.85,
        rep2: 0.9,
        rep3: -20,
    };

    const education = document.getElementById('education').value;
    if(educationCoef[education]){
        price*=educationCoef[education];
    }
    const netWorth = document.getElementById('networth').value;
    if(netWorthCoef[netWorth]){
        price *= netWorthCoef[netWorth];
    }
    const caste = document.getElementById('caste').value;
    if(casteCoef[caste]){
        price += casteCoef[caste];
    }
    if (document.getElementById('skill1').checked) price += skills.skill1; 
    if (document.getElementById('skill2').checked) price += skills.skill2; 
    if (document.getElementById('skill3').checked) price += skills.skill3; 
    if (document.getElementById('skill4').checked) price += skills.skill4;

    const ageRadios = document.getElementsByName('age');
    for (let radio of ageRadios){
        if(radio.checked){
            price *= ageCoef[radio.value];
            break;
        }
    }
    //radio идет как массивы и мы проходимся по каждому проверяя
    if (document.getElementById('rep1').checked) price *= repCoef.rep1; 
    if (document.getElementById('rep2').checked) price *= repCoef.rep2; 
    if (document.getElementById('rep3').checked) price += repCoef.rep3; 
    const finalPriceElement = document.getElementById('final-price');
    finalPriceElement.innerText = `Final Price: $${price.toFixed(2)}`;
    finalPriceElement.style.color = 'red';
    finalPriceElement.style.fontWeight = 'bold';

}
document.getElementById('submit').addEventListener('click', calculatePrice);