var questions =[
    {
        question: "Qual o menor país do mundo?",
        optionA: "Vaticano",
        optionB: "Brasil",
        optionC: "Bolivia",
        correctQuestion: "A alternativa correta é: "
    },
    {
        question: "Qual o livro mais vendido no mundo a seguir à Bíblia?",
        optionA: "O Senhor dos Anéis",
        optionB: "Dom Quixote",
        optionC: "O Pequeno Príncipe",
        correctQuestion: "A alternativa correta é: "

    },
    {
        question: "Quantas casas decimais tem o número pi?",
        optionA: "Duas",
        optionB: "Centenas",
        optionC: "Infinitas",
        correctQuestion: "A alternativa correta é: "
    }
] 

var first = document.getElementsByClassName('result');

first.innerHTML = `<label>${questions[1].optionA}</label>`;


console.log(questions[1].correctQuestion);



