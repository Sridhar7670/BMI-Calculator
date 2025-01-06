document.addEventListener('DOMContentLoaded', function() {
    const formContainer = document.querySelector('.form-container');
    const usForm = document.getElementById('us-units-form');
    const metricForm = document.getElementById('metric-units-form');
    
    function displayUS() {
        usForm.classList.add('active');
        metricForm.classList.remove('active');
        adjustFormContainerHeight();
    }

    function displayMetric() {
        usForm.classList.remove('active');
        metricForm.classList.add('active');
        adjustFormContainerHeight();
    }

    function adjustFormContainerHeight() {
        formContainer.style.height = 'auto';  // Temporarily set height to auto to measure the content's height
        const newHeight = formContainer.scrollHeight;
        formContainer.style.height = `${newHeight}px`; // Set to the new height
    }

    function BMIMetric() {
        let centimeters = document.querySelector("#Centimeters").value;
        let kilos = document.querySelector("#Kilos").value;

        if (centimeters === '' || kilos === '') {
            alert("Please fill in all fields.");
            return;
        }

        let heightMeters = parseFloat(centimeters) / 100;
        let bmi = parseFloat(kilos) / (heightMeters * heightMeters);

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
        let pounds = document.querySelector("#Pound").value;

        if (feet === '' || inches === '' || pounds === '') {
            alert("Please fill in all fields.");
            return;
        }

        let totalInches = (parseFloat(feet) * 12) + parseFloat(inches);
        let heightMeters = totalInches * 0.0254;
        let weightKg = parseFloat(pounds) * 0.453592;

        let bmi = weightKg / (heightMeters * heightMeters);

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
        const month = dateObj.getUTCMonth() + 1;
        const day = dateObj.getUTCDate();
        const year = dateObj.getUTCFullYear();
        const hour = dateObj.getHours();
        const minutes = dateObj.getMinutes();
        const seconds = dateObj.getSeconds();

        const d1 = document.querySelector("#date");
        d1.innerText = `${month}/${day}/${year}`;

        const t1 = document.querySelector("#timer");
        t1.innerText = `${hour}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }, 1000);

    window.displayUS = displayUS;
    window.displayMetric = displayMetric;
    window.BMIMetric = BMIMetric;
    window.BMIUS = BMIUS;
});
