import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contato</h3>
          <p><i className="icon fas fa-envelope"></i> Email: seuemail@example.com</p>
          <p><i className="icon fas fa-phone"></i> Telefone: (XX) XXXX-XXXX</p>
          <p><i className="icon fas fa-map-marker-alt"></i> Endereço: Rua Exemplo, 123 - Cidade, Estado</p>
        </div>
        <div className="footer-section">
          <h3>Redes Sociais</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-whatsapp"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Escolinha. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;