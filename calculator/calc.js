let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";

// Convert buttons to an array to loop over
let arr = Array.from(buttons);

// Add event listeners to each button
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const currentValue = input.value; // Store current value

        if (e.target.innerHTML === '=') {
            try {
                string = eval(string); // Calculate the expression
                input.value = string;
            } catch (error) {
                input.value = "Error"; // Handle invalid input
                string = "";
            }
        } else if (e.target.innerHTML === 'AC') {
            string = ""; // Clear input
            input.value = "";
        } else if (e.target.innerHTML === 'Del') {
            string = string.slice(0, -1); // Delete the last character
            input.value = string;
        } else {
            string += e.target.innerHTML; // Append clicked button
            input.value = string;
        }

        // Reset focus to the input after each button press
        input.focus();
    });
});
