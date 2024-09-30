// 1. Поиск элементов и изменение содержимого
document.querySelector('h1').innerText = 'Новый Заголовок';
const listItems = document.querySelectorAll('ul#item-list li');
listItems.forEach((item, index) => {
    item.innerText += ` ${index + 1}`;
});

// 2. Редактирование атрибутов
const image = document.getElementById('image');
image.setAttribute('src', 'https://example.com/new-image.jpg');

const link = document.getElementById('link');
link.setAttribute('href', 'https://new-url.com');
link.innerHTML = 'Новая ссылка';

// 3. Манипуляции с элементами
const itemList = document.getElementById('item-list');
document.getElementById('add-item').addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.innerText = `Элемент списка ${itemList.children.length + 1}`;
    itemList.appendChild(newItem);
});

document.getElementById('remove-item').addEventListener('click', () => {
    if (itemList.children.length > 0) {
        itemList.removeChild(itemList.lastChild);
    }
});

// 4. Манипуляции со стилями CSS
const paragraph = document.querySelector('p');
document.getElementById('change-color').addEventListener('click', () => {
    paragraph.style.color = paragraph.style.color === 'blue' ? 'black' : 'blue';
});

document.getElementById('toggle-paragraph').addEventListener('click', () => {
    paragraph.style.display = paragraph.style.display === 'none' ? 'block' : 'none';
});

// 5. Работа с геометрией элементов
document.getElementById('get-dimensions').addEventListener('click', () => {
    const rect = document.getElementById('size-element').getBoundingClientRect();
    console.log(`Ширина: ${rect.width}, Высота: ${rect.height}`);
});

// Дополнительное задание
document.getElementById('my-form').addEventListener('submit', (event) => {
    event.preventDefault(); // предотвращаем отправку формы
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (!name || !email) {
        alert('Пожалуйста, заполните все поля.');
    } else {
        alert('Форма успешно отправлена!');
    }
});

