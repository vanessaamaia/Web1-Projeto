import React from 'react';
import './PreMatriculaPage.css';

function PreMatriculaPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulário de Pré-Matrícula enviado!');
  };

  return (
    <div className="conteudo-pagina">
      <h2 className="titulo-formulario">Pré-Matrícula Geração 10</h2>
      <form onSubmit={handleSubmit}>
        <div className="grupo-campo">
          <label htmlFor="nome-aluno">Nome do Aluno(a):</label>
          <input type="text" id="nome-aluno" name="nome-aluno" required />
        </div>
        <div className="grupo-campo">
          <label htmlFor="data-nascimento">Data de Nascimento:</label>
          <input type="date" id="data-nascimento" name="data-nascimento" required />
        </div>
        <div className="grupo-campo">
          <label htmlFor="nome-responsavel">Nome do Responsável:</label>
          <input type="text" id="nome-responsavel" name="nome-responsavel" required />
        </div>
        <div className="grupo-campo">
          <label htmlFor="telefone">Telefone:</label>
          <input type="tel" id="telefone" name="telefone" required />
        </div>
        <div className="grupo-campo">
          <label htmlFor="email">E-mail (opcional):</label>
          <input type="email" id="email" name="email" />
        </div>
        <button type="submit" className="botao-enviar">Enviar Pré-Matrícula</button>
      </form>
    </div>
  );
}

export default PreMatriculaPage;