import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <main className="home-container">

      {/* SLIDER / HERO */}
      <section className="hero-slider">
        <div className="slides">
          <div className="slide slide-1"></div>
          <div className="slide slide-2"></div>
          <div className="slide slide-3"></div>
        </div>

        <div className="hero-content">
          <span className="badge">PLATAFORMA DE INVESTIMENTOS</span>
          <h1>Sua jornada para a liberdade financeira começa aqui</h1>
          <p>
            O <strong>Finanças Pro</strong> é um ecossistema completo para quem quer
            investir com inteligência, utilizando dados reais, inteligência artificial
            e estratégias validadas no mercado financeiro.
          </p>

          <div className="cta-buttons">
            <Link to="/login" className="btn-primary">COMEÇAR AGORA</Link>
            <Link to="/about" className="btn-secondary">SAIBA MAIS</Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-overview">
        <div className="feature-item">
          <h3>📊 Gestão de Ativos</h3>
          <p>Acompanhe cotações em tempo real, rentabilidade e evolução do seu patrimônio.</p>
        </div>

        <div className="feature-item">
          <h3>💰 Agenda de Dividendos</h3>
          <p>Controle total dos seus proventos e previsões de recebimento.</p>
        </div>

        <div className="feature-item">
          <h3>🤖 Inteligência Artificial</h3>
          <p>Recomendações personalizadas conforme seu perfil e objetivos financeiros.</p>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="benefits">
        <h2>Por que escolher o Finanças Pro?</h2>
        <div className="benefits-grid">
          <div>✔ Estratégias testadas e validadas</div>
          <div>✔ Plataforma simples e intuitiva</div>
          <div>✔ Foco em renda passiva</div>
          <div>✔ Conteúdo para todos os níveis</div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="numbers">
        <div>
          <h3>+12.000</h3>
          <p>Alunos Ativos</p>
        </div>
        <div>
          <h3>R$ 150M+</h3>
          <p>Em ativos monitorados</p>
        </div>
        <div>
          <h3>98%</h3>
          <p>Satisfação</p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="final-cta">
        <h2>Comece hoje a investir com inteligência</h2>
        <p>Tenha acesso à plataforma completa agora mesmo.</p>
        <Link to="/login" className="btn-primary">CRIAR CONTA</Link>
      </section>

    </main>
  );
}
