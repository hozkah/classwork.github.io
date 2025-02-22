function greet() {
    alert("Welcome To Dynamic Web Application");
}

const buttonId = document.getElementById('click');
buttonId.onclick = function() {
    alert("Just clicked Internal Js");
}

buttonId.onmouseover = function() {
    buttonId.style.color = "yellow";
    this.style.backgroundColor = "#45a049";
}

buttonId.onmouseout = function() {
    buttonId.style.color = "white";
    this.style.backgroundColor = "#4CAF50";
}

function toggleText() {
    const text = document.getElementById('text');
    const textOptions = [
        'This is My first In-class HTML, CSS and JavaScript.',
        'External Javascript and CSS imported',
        'This is the first HTML, CSS and JavaScript fusion'
    ];

    // Find the index of the current text in the array
    let currentIndex = textOptions.indexOf(text.innerHTML);

    // If the current text is not found in the array, start from the first option
    if (currentIndex === -1) {
        currentIndex = 0;
    } else {
        // Move to the next text in the array
        currentIndex = (currentIndex + 1) % textOptions.length;
    }

    // Update the text content
    text.innerHTML = textOptions[currentIndex];
}

function isValidColor(color) {
    const temp = document.createElement('div');
    temp.style.color = color;
    return temp.style.color !== '';
}

function changeBackground() {
    const errorMsg = document.getElementById('errorMsg');
    const colorInput = document.getElementById('colorInput');
    const colorPicker = document.getElementById('colorPicker');
    
    try {
        let color = colorInput.value.trim();
        
        if (!color) {
            colorPicker.classList.add('show');
            color = colorPicker.value;
        } else {
            colorPicker.classList.remove('show');
            
            if (!isValidColor(color)) {
                throw new Error('Invalid color. Please enter a valid color name or hex code');
            }
        }
        
        document.body.style.backgroundColor = color;
        errorMsg.style.display = 'none';
        
    } catch (error) {
        errorMsg.textContent = error.message;
        errorMsg.style.display = 'block';
        colorPicker.classList.add('show');
    }
}
