const alunos = [
    { nome: 'João', nota: 8 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 6 },
    { nome: 'Ana', nota: 7 },
    { nome: 'Carlos', nota: 4 }
];

function filtrarAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

function filtrarReprovados(alunos) {
    return alunos.filter(aluno => aluno.nota < 6);
}

const aprovados = filtrarAprovados(alunos);
const reprovados = filtrarReprovados(alunos);

console.log(`Foram aprovados: ${aprovados.map(aluno => aluno.nome)}.`);
console.log(`Foram reprovados: ${reprovados.map(aluno => aluno.nome)}.`);
