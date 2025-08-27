import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="conteudo-pagina">
      <div className="banner-principal">
        <h1 className="titulo-pagina">Escola Geração 10</h1>
        <p className="subtitulo">Qualidade não acontece por acaso!</p>
      </div>

      <div className="secao-fotos">
        <img src="https://images.unsplash.com/photo-1596496101962-42173167b2d5?q=80&w=1770&auto=format&fit=crop" alt="Crianças brincando" />
        <img src="https://images.unsplash.com/photo-1549646535-618456f91d51?q=80&w=1770&auto=format&fit=crop" alt="Crianças em sala de aula" />
        <img src="https://images.unsplash.com/photo-1582216742095-d41a79f1559e?q=80&w=1770&auto=format&fit=crop" alt="Crianças sorrindo" />
        <img src="https://images.unsplash.com/photo-1578491708899-7f415c13b2d6?q=80&w=1770&auto=format&fit=crop" alt="Crianças felizes" />
      </div>

      <div className="secao-caixas">
        <div className="caixa-info">
          <i className="fas fa-baby"></i>
          <h4>Maternal ao 5° ano</h4>
          <p>Período matutino e vespertino. Formação completa.</p>
        </div>
        <div className="caixa-info">
          <i className="fas fa-swimmer"></i>
          <h4>Aulas Extras</h4>
          <p>Inglês - Natação - Karatê - Capoeira</p>
        </div>
        <div className="caixa-info">
          <i className="fas fa-clock"></i>
          <h4>Período Integral</h4>
          <p>Das 07:10h às 17h. Com opção de refeições inclusas.</p>
        </div>
        <div className="caixa-info">
          <i className="fas fa-graduation-cap"></i>
          <h4>30 anos</h4>
          <p>De credibilidade na formação de crianças.</p>
        </div>
      </div>
      
      <div className="secao-imagem-botoes">
      <h2 className="titulo-secao">Conheça as Nossas Modalidades</h2>
        <img src="https://images.unsplash.com/photo-1518133502901-d70377a00115?q=80&w=1770&auto=format&fit=crop" alt="Imagem da escola" className="imagem-horizontal" />
        <div className="botoes-navegacao">
          <button className="botao-secao">Maternal</button>
          <button className="botao-secao">Ensino Infantil</button>
          <button className="botao-secao">Ensino Fundamental</button>
          <button className="botao-secao">Integral</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;