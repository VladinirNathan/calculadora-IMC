let weight = document.getElementById ('weigth').value;
let height = document.getElementById ('heigth').value;


calcular.onclick = () => {

    let bmi = (weight / (height * height)).toFixed(2);
    calculate();
    
}




function calculate(){






    if(bmi > 18.5) {
        alert('Você está com magreza!')
    }
    else if(bmi >= 18.5 && bmi < 25 ) {
        alert('Você está bem!')
    }
    else if(bmi > 25 && bmi <= 30) {
        alert('Você está com sebrepeso!')
    }
    else if(bmi > 30 && bmi <= 25) {
        alert('Você está com obesidade moderada!')
    }
    else {
        alert('Você está com obesidade severa!')
    }

}
