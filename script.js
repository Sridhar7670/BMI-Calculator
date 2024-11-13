function displayUS() {
    document.getElementById('usUnits').style.display = 'block';
    document.getElementById('MetricUnits').style.display = 'none';
}

function displayMu() {
    document.getElementById('usUnits').style.display = 'none';
    document.getElementById('MetricUnits').style.display = 'block';
}

function BMIMU() {
    let centimeters = document.querySelector("#Centimeters").value;
    let kilos = document.querySelector("#Kilos").value;

    if (centimeters === '' || kilos === '') {
        alert("Please fill in all fields.");
        return;
    }

    // Convert centimeters to meters
    let heightMeters = parseFloat(centimeters) / 100;

    // Calculate BMI
    let bmi = parseFloat(kilos) / (heightMeters * heightMeters);

    // Determine BMI category and color
    let category = '';
    let color = '';
    if (bmi < 18.5) {
        category = 'Underweight';
        color = 'yellow';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal weight';
        color = 'green';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
        color = 'orange';
    } else {
        category = 'Obesity';
        color = 'red';
    }

    const span = document.createElement("span");
    span.innerHTML = `<b>Body Mass Index is: ${bmi.toFixed(2)} - ${category}</b>`;
    span.style.color = color;
    span.style.marginTop = "1rem";

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ''; // Clear previous result
    resultDiv.appendChild(span);
}

function BMIUS() {
    let feet = document.querySelector("#Feet").value;
    let inches = document.querySelector("#Inch").value;
    let pounds = document.querySelector("#pound").value;

    if (feet === '' || inches === '' || pounds === '') {
        alert("Please fill in all fields.");
        return;
    }

    // Convert feet and inches to total inches
    let totalInches = (parseFloat(feet) * 12) + parseFloat(inches);

    // Convert total inches to meters
    let heightMeters = totalInches * 0.0254;

    // Convert pounds to kilograms
    let weightKg = parseFloat(pounds) * 0.453592;

    // Calculate BMI
    let bmi = weightKg / (heightMeters * heightMeters);

    // Determine BMI category and color
    let category = '';
    let color = '';
    if (bmi < 18.5) {
        category = 'Underweight';
        color = 'yellow';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal weight';
        color = 'green';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
        color = 'orange';
    } else {
        category = 'Obesity';
        color = 'red';
    }

    const span = document.createElement("span");
    span.innerHTML = `<b>Body Mass Index is: ${bmi.toFixed(2)} - ${category}</b>`;
    span.style.color = color;
    span.style.marginTop = "1rem";

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ''; // Clear previous result
    resultDiv.appendChild(span);
}

setInterval(() => {
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; // months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const hour = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const seconds = dateObj.getSeconds();

    const d1 = document.querySelector("#date");
    d1.innerText = `${month}/${day}/${year}`;

    const t1 = document.querySelector("#timer");
    t1.innerText = `${hour}:${minutes}:${seconds}`;
}, 1000);
