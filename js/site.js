
// Controller
function handleUserInput(){

    // Get input from user
    let inputValue = document.getElementById('user-input').value;

    // Input Validation
    if (inputValue.length > 150) {
        
        // Error message
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter less than 150 characters",
        });

        return;
    }

    // Covert into array (keep only numbers, separated by commas)
    let filteredInput = inputValue.replace(/[^0-9,.]/g, '');
    let numbersArrayValue = filteredInput.split(',');

    // Convert each into a number
    let numericArray = [];
    numbersArrayValue.forEach(numberValue => {

        // Convert to integer
        let number = Number.parseInt(numberValue);

        // Add only if it's an valid number
        if (!Number.isNaN(number)) {
            
            numericArray.push(number);
        }
    });

    // Calculate the sum
    let arraySum = calculateArraySum(numericArray);

    // Display results
    displayResult(arraySum, numericArray);
}

// Logic
function calculateArraySum(numericArray){

    // Total sum of array
    let totalSum = 0;

    // Add each number to total sum
    for (let i = 0; i < numericArray.length; i++) {

        totalSum += numericArray[i];
    }

    // Return result
    return totalSum;
}

// View
function displayResult(arraySum, numericArray){

    // Format the result as HTML
    let formattedResults = `<span class="text-muted mb-3">[${numericArray}]</span>
                   <h1 class="text-primary">${arraySum}</h1>`;
    
    // Display on the DOM
    document.getElementById('results').innerHTML = formattedResults;
    document.getElementById('resultsContainer').classList.remove('d-none');
}