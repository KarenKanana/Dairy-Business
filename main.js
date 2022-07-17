    function produceReport(){

    event.preventDefault();

    let data = [];

    data[0] = data["shed-A"] = parseInt(document.getElementById("shed-A").value);
    data[1] = data["shed-B"] = parseInt(document.getElementById("shed-B").value);
    data[2] = data["shed-C"] = parseInt(document.getElementById("shed-C").value);
    data[3] = data["shed-D"] = parseInt(document.getElementById("shed-D").value);

    let sumData = data.shed - A + data.shed - B + data.shed - C + data.shed - D;

    
    document.getElementById("outputData").innerHTML += "<Br>"

    document.getElementById("outputData").innerHTML += "<p>Your production in shed A is " + data.shed-A + " litres per day</p>";
    document.getElementById("outputData").innerHTML += "<p>Your production in shed B is " + data.shed-B + " litres per day</p>";
    document.getElementById("outputData").innerHTML += "<p>Your production in shed C is " + data.shed-C + " litres per day</p>";
    document.getElementById("outputData").innerHTML += "<p>Your production in shed D is " + data.shed-D + " litres per day</p>";

    document.getElementById("outputData").innerHTML += "<p>Your total production per day is " + sumData + " litres per day</p>";

    dailyIncome = sumData * 45;

    document.getElementById("outputData").innerHTML += "<Br>"

    document.getElementById("outputData").innerHTML += "<hr>"

    document.getElementById("outputData").innerHTML += "<p>Your total daily income is Ksh. " + dailyIncome + " </p>";

    document.getElementById("outputData").innerHTML += "<hr>"

    weeklyIncome = dailyIncome * 7;

    document.getElementById("outputData").innerHTML += "<p>Your total weekly income is Ksh. " + weeklyIncome + " </p>";

    document.getElementById("outputData").innerHTML += "<hr>"

    document.getElementById("outputData").innerHTML += "<Br>"
    }
    
