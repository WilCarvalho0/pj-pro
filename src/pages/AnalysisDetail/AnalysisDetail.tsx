import { useParams, Link } from "react-router-dom";
import { marketAnalysis } from "../../data/marketData";
import "./AnalysisDetail.css";

export default function AnalysisDetail() {
  const { ticker } = useParams();
  const dados = marketAnalysis[ticker as keyof typeof marketAnalysis];

  if (!dados) {
    return (
      <main className="analysis-container">
        <div className="analysis-card">
          <h1>Análise indisponível</h1>
          <p>Não encontramos dados para o ativo solicitado.</p>
          <Link to="/recommendations" className="btn-back">
            Voltar para recomendações
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="analysis-container">
      <article className="analysis-card">
        
        {/* ================= HEADER ================= */}
        <header className="analysis-header-content">
          <span className="ticker-badge">{ticker}</span>
          <h1>{dados.nome}</h1>
          <p className="sector-tag">{dados.setor}</p>
        </header>

        {/* ================= ANÁLISE ================= */}
        <section className="main-content">
          <h3>Veredito da Inteligência Artificial</h3>
          <p>{dados.analise}</p>
        </section>

        {/* ================= MÉTRICAS ================= */}
        <section className="metrics-grid">
          <div className="metric">
            <span>Recomendação</span>
            <strong className="buy">{dados.recomendacao}</strong>
          </div>

          <div className="metric">
            <span>Dividend Yield</span>
            <strong>{dados.dividendYield}</strong>
          </div>

          <div className="metric">
            <span>Nível de Risco</span>
            <strong>{dados.risco}</strong>
          </div>
        </section>

        {/* ================= AÇÕES ================= */}
        <div className="analysis-actions">
          <Link to="/recommendations" className="btn-back">
            Voltar
          </Link>

          <Link to="/portifolio" className="btn-buy-action">
            Comprar {ticker}
          </Link>
        </div>

      </article>
    </main>
  );
}
