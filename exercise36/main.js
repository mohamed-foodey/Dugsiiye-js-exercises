const colorPicker = document.querySelector('#colorPicker');
const colorPreview = document.querySelector('#colorPreview');
const colorDisplay = document.querySelector('#colorDisplay');
const colorHistory = document.querySelector('#colorHistory');
const clearHistoryButton = document.querySelector('#clearHistoryButton');



colorPicker.addEventListener ('input', function(){
    const selectColor = colorPicker.value;
    colorPreview.style.backgroundColor = selectColor;
    updateColorDisplay(selectColor);

})
function updateColorDisplay(color) {
    const li = document.createElement('li');
    li.textContent = color;
    li.style.color = color;
    colorHistory.appendChild(li);
}
clearHistoryButton.addEventListener('click', function() {
    colorHistory.innerHTML = '';
});

// innerHTML button



