import week_1 from "./pytania/week_1.json" with { type: "json"}
const questions = {};
questions[week_1.category] = week_1.questions;
function createUI() {
    const select = document.querySelector('#category');
    const option = document.createElement('option');
    option.value = '';
    option.innerText = 'Wybierz kategorię';
    option.selected = true;
    option.disabled = true
    select.appendChild(option);
    Object.keys(questions).forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.innerText = category;
        select.appendChild(option);
    });
}
createUI()
function updateCounter() {
    const counter = document.querySelector('#question-counter');
    const select = document.querySelector('#category');
    if ( questions[select.value]) {
        counter.innerText = questions[select.value].length;
    } else {
        counter.innerText = 'n/a';
    }
}
document.querySelector('#category').onchange = () => {updateCounter()};
document.querySelector('#next-question').onclick = () => {
    const select = document.querySelector('#category');
    if (questions[select.value] && questions[select.value].length > 0) {
        document.querySelector('#question-box').innerText = questions[select.value].splice(Math.ceil(Math.random() * questions[select.value].length), 1)[0];
        // document.querySelector('#question-box').innerText = questions[select.value].pop();
        updateCounter();
    }
}