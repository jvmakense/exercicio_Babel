"use strict";

var alunos = [{
  nome: 'João',
  nota: 8
}, {
  nome: 'Maria',
  nota: 5
}, {
  nome: 'Pedro',
  nota: 6
}, {
  nome: 'Ana',
  nota: 7
}, {
  nome: 'Carlos',
  nota: 4
}];
function filtrarAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
function filtrarReprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota < 6;
  });
}
var aprovados = filtrarAprovados(alunos);
var reprovados = filtrarReprovados(alunos);
console.log("Foram aprovados: ".concat(aprovados.map(function (aluno) {
  return aluno.nome;
}), "."));
console.log("Foram reprovados: ".concat(reprovados.map(function (aluno) {
  return aluno.nome;
}), "."));