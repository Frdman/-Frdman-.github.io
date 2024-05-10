// Получаем ссылки на элементы
var startButton = document.getElementById('startButton');
var popupContainer = document.getElementById('popupContainer');
var submitButton = document.getElementById('submitButton');
var outputContainer = document.getElementById('output');

// Добавляем обработчик события на кнопку "Начать"
startButton.addEventListener('click', function () {
    popupContainer.style.display = 'block';
});

document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll(".coolinput input");
    const submitButton = document.querySelector(".end #submitButton");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Отменяем стандартное действие формы (перезагрузку страницы)
        
        const values = [];
        inputs.forEach(input => {
            values.push(input.value.trim());
        });

        const expectedValues = ["Коновалов", "Илья", "14.05.1999", "Котик"];

        if (JSON.stringify(values) === JSON.stringify(expectedValues)) {
            // Введенные данные совпадают с ожидаемыми
            window.location.href = "slideshow.html"; // Переходим на страницу slideshow.html
        } else {
            // Введенные данные не совпадают с ожидаемыми
            alert("Неверные данные! Пожалуйста, проверьте введенные данные и повторите попытку.");
        }
    });
});



