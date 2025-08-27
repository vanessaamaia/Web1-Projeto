import React from 'react';
import './TabelaHorarios.css';

function HorarioAulasPage() {
  return (
    <div className="conteudo-pagina">
      <h1 className="titulo-pagina">Horário das Aulas</h1>
      <p>Confira nossa grade de horários para o ano letivo.</p>
      
      <table className="tabela-horarios">
        <thead>
          <tr>
            <th>Dia da Semana</th>
            <th>Manhã (08:00 - 12:00)</th>
            <th>Tarde (13:30 - 17:30)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Segunda-feira</td>
            <td>Matemática e Artes</td>
            <td>Português e Recreação</td>
          </tr>
          <tr>
            <td>Terça-feira</td>
            <td>Ciências e Música</td>
            <td>Inglês e Leitura</td>
          </tr>
          <tr>
            <td>Quarta-feira</td>
            <td>Português e Educação Física</td>
            <td>História e Robótica</td>
          </tr>
          <tr>
            <td>Quinta-feira</td>
            <td>Matemática e Artes</td>
            <td>Geografia e Jogos</td>
          </tr>
          <tr>
            <td>Sexta-feira</td>
            <td>Ciências e Projetos</td>
            <td>Atividades de Grupo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default HorarioAulasPage;