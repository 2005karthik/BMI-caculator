function calculate(){
   
    var bmi;
    var result = document.getElementById("result");

    var height = document.getElementById("height").value;

    var weight = document.getElementById("weight").value;

    document.getElementById("weight").innerHTML = weight + " kg";
    document.getElementById("height").innerHTML = height + " cm";


    bmi = weight / (height/100)**2;

    result.innerHTML = bmi;




    if(bmi < 18.5){
        output =  bmi.toFixed(2) + "Underweight";
        result.style.color = "#faa916";
    }


    else if( bmi >= 18.5 && bmi <= 24.9 ){
          output = bmi.toFixed(2) + "Normal Weight ";
        result.style.color = "#0d3b9d";
    }


    else if( bmi >= 25 && bmi <= 29.9 ){
          output = bmi.toFixed(2) + "Overweight";
        result.style.color = "#ff1053";
    }
      else{
          output = "Obese ";
        result.style.color = "#ff5e57";
    }
 

    document.getElementById("result").innerHTML = output;}