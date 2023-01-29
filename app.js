const quote = document.querySelector('#quote');
const person = document.querySelector('#person');
const btn = document.querySelector('#btn');
const alert = document.querySelector('#alert');
const copyBtn = document.querySelector('#copy');



btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quoteText;
    person.innerText = quotes[random].famousPerson;
});

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(`${quote.innerText}, ${person.innerText}`);
    alert.style.transform = 'translateY(0px)';
    setTimeout(() => {
        alert.style.transform = 'translateY(-90px)';
    }, 2000)
});
