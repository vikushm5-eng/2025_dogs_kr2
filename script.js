function readPassportData() {
    // 1. Считываем данные с помощью ID
    const lastName = document.getElementById('p-lastName').innerText;
    const firstName = document.getElementById('p-firstName').innerText;
    
    // 2. Считываем данные, как требовалось в задании (через TagName и ChildNodes)
    // * Предполагая, что <p> с годом рождения - это третий элемент <p> на странице (индекс 2) *
    const birthYearFull = document.getElementsByTagName('p')[2].childNodes[1].innerText;
    const birthYear = birthYearFull.substring(0, 4); // Получаем только год

    // 3. Выводим результат в DIV с id="read-result"
    const resultDiv = document.getElementById('read-result');
    if (resultDiv) {
        resultDiv.innerHTML = `
            Считанные данные:<br>
            Фамилия (ID): **${lastName}**<br>
            Имя (ID): **${firstName}**<br>
            Год рождения (TagName/ChildNodes): **${birthYear}**
        `;
    }
}

function changeToLatin() {
    // Находим элементы по ID и меняем их внутренний текст
    const lastNameElement = document.getElementById('p-lastName');
    const firstNameElement = document.getElementById('p-firstName');
    const birthYearElement = document.getElementById('p-birthYear');
    
    // Проверяем, что элементы существуют (на случай, если функция вызвана на другой странице)
    if (lastNameElement && firstNameElement && birthYearElement) {
        lastNameElement.innerText = 'Kushmanova';
        firstNameElement.innerText = 'Viktoriia';
        // Год рождения меняем на другое число (латинские символы)
        birthYearElement.innerText = '2006';
        alert('Данные успешно изменены на латиницу!');
    }
}

function solveAlgorithm() {
    // 1. Получаем значения из полей ввода и преобразуем их в числа
    const numA = parseFloat(document.getElementById('val1').value);
    const numB = parseFloat(document.getElementById('val2').value);
    const numC = parseFloat(document.getElementById('val3').value);
    const resultElement = document.getElementById('algorithm-result');

    // Проверка на корректность ввода
    if (isNaN(numA) || isNaN(numB) || isNaN(numC)) {
        resultElement.textContent = 'Пожалуйста, введите корректные числа.';
        return;
    }

    // 2. Логика решения задачи (Вам нужно заменить ее на свою!)
    const maxNumber = Math.max(numA, numB, numC);

    // 3. Выводим результат
    resultElement.textContent = maxNumber;
}

function solveAlgorithm() {
    const inputX = parseFloat(document.getElementById('input_x').value);
    const inputY = parseFloat(document.getElementById('input_y').value);
    const resultElement = document.getElementById('algorithm-result');
    resultElement.textContent = '';
    resultElement.style.color = '#cc0000';
    if (isNaN(inputX) || isNaN(inputY)) {
        resultElement.textContent = 'Ошибка ввода: Пожалуйста, введите корректные числа.';
        return;
    }
    const product = inputX * inputY;

    if (product === 0) {
        // Деление на ноль: функция не определена
        resultElement.textContent = 'Ошибка: Функция не определена, так как X*Y = 0.';
        return;
    }
    const Z = 1 / product;
    resultElement.textContent = Z.toFixed(6);
    resultElement.style.color = '#007bff';
    }
 
document.addEventListener('DOMContentLoaded', () => {
    const catalogContainer = document.getElementById('puppy-catalog');
    if (!catalogContainer) return; // Убедиться, что мы на нужной странице

    // Данные для 8 (или более) щенков
    const puppiesData = [
        { name: "Макс (Лабрадор)", breed: "Лабрадор-ретривер", age: "8 недель", price: 65000, img: "labrador.png", status: "В резерве" },
        { name: "Зевс (Овчарка)", breed: "Немецкая овчарка", age: "10 недель", price: 80000, img: "nemec.jpg", status: "Доступен" },
        { name: "Бэлла (Бигль)", breed: "Бигль", age: "9 недель", price: 55000, img: "bigl.png", status: "Доступна" },
        { name: "Тим (Терьер)", breed: "Джек-рассел-терьер", age: "8 недель", price: 45000, img: "djek.jpg", status: "Доступен" },
        { name: "Люси (Пудель)", breed: "Той-пудель", age: "12 недель", price: 70000, img: "toi_pudel.jpg", status: "В резерве" },
        { name: "Рокки (Бульдог)", breed: "Французский бульдог", age: "9 недель", price: 75000, img: "frenchDog.jpg", status: "Доступен" },
        { name: "Айра (Мальтезе)", breed: "Мальтезе", age: "11 недель", price: 90000, img: "malteze.jpg", status: "Доступна" },
        { name: "Гром (Хаски)", breed: "Сибирский хаски", age: "8 недель", price: 60000, img: "haski.jpg", status: "Доступен" }
    ];

    puppiesData.forEach(puppy => {
        // Устанавливаем цвет кнопки и текста в зависимости от статуса
        const statusClass = puppy.status.includes('Доступен') ? 'text-success' : 'text-warning';
        const buttonClass = puppy.status.includes('Доступен') ? 'btn-success' : 'btn-secondary disabled';
        const buttonText = puppy.status.includes('Доступен') ? 'Зарезервировать' : 'В резерве';

        const cardHTML = `
            <div class="col">
                <div class="card h-100 shadow">
                    <img src="${puppy.img}" class="card-img-top" alt="${puppy.name}" style="height: 410px; object-fit: cover;"> 
                    
                    <div class="card-body">
                        <h4 class="card-title">${puppy.name}</h4>
                        <p class="card-text mb-1">Порода: <strong>${puppy.breed}</strong></p>
                        <p class="card-text mb-1">Возраст: ${puppy.age}</p>
                        <p class="h5 mt-3 ${statusClass}">
                            Статус: ${puppy.status}
                        </p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center">
                        <span class="h4 text-danger mb-0">${puppy.price} ₽</span>
                        <a href="https://yandex.ru" class="btn ${buttonClass} btn-sm">
                        
                            <i class="bi bi-cart-plus"></i> ${buttonText}
                        </a>
                    </div>
                </div>
            </div>
        `;
        catalogContainer.innerHTML += cardHTML;
    });
});