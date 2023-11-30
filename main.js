let alunos = [
    { nome: "Gustavo", nota: 7 },
    { nome: "João", nota: 5 },
    { nome: "Alexandre", nota: 8 },
    { nome: "Ana", nota: 6 },
    { nome: "Maria", nota: 4 }
];

const alunosAprovados = alunos.filter(function(aluno) {
    return aluno.nota >= 6;
});

console.log(alunosAprovados);


