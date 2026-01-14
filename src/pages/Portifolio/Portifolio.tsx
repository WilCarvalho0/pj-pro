import { useState } from "react";
import "./Portifolio.css";

export default function Portifolio() {
  const [patrimonio, setPatrimonio] = useState([
    { ticker: "PETR4", qtd: 50, precoMedio: 34.2, atual: 38.5 },
  ]);

  const [novoTicker, setNovoTicker] = useState("");
  const [novaQtd, setNovaQtd] = useState(0);
  const [novoPreco, setNovoPreco] = useState(0);

  const adicionarAtivo = () => {
    if (novoTicker && novaQtd > 0 && novoPreco > 0) {
      const novoAtivo = {
        ticker: novoTicker.toUpperCase(),
        qtd: novaQtd,
        precoMedio: novoPreco,
        atual: novoPreco,
      };

      setPatrimonio([...patrimonio, novoAtivo]);
      setNovoTicker("");
      setNovaQtd(0);
      setNovoPreco(0);
    }
  };

  return (
    <main className="portfolio-container">
      {/* ================= HEADER ================= */}
      <header className="portfolio-header">
        <h1>Meu Portfólio</h1>
        <p>Visão consolidada dos seus investimentos</p>
      </header>

      {/* ================= FORM ================= */}
      <section className="portfolio-form-card">
        <h3>Adicionar Novo Ativo</h3>

        <div className="form-grid">
          <input
            type="text"
            placeholder="Ticker (ex: PETR4)"
            value={novoTicker}
            onChange={(e) => setNovoTicker(e.target.value)}
          />
          <input
            type="number"
            placeholder="Quantidade"
            value={novaQtd}
            onChange={(e) => setNovaQtd(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="Preço Médio"
            value={novoPreco}
            onChange={(e) => setNovoPreco(Number(e.target.value))}
          />
          <button onClick={adicionarAtivo}>Adicionar Ativo</button>
        </div>
      </section>

      {/* ================= TABELA ================= */}
      <section className="portfolio-table-wrapper">
        <table className="portfolio-table">
          <thead>
            <tr>
              <th>Ativo</th>
              <th>Quantidade</th>
              <th>Preço Médio</th>
              <th>Desempenho</th>
            </tr>
          </thead>
          <tbody>
            {patrimonio.map((item, index) => {
              const variacao =
                (item.atual / item.precoMedio - 1) * 100;

              return (
                <tr key={index}>
                  <td className="ticker">{item.ticker}</td>
                  <td>{item.qtd}</td>
                  <td>R$ {item.precoMedio.toFixed(2)}</td>
                  <td
                    className={
                      variacao >= 0 ? "positive" : "negative"
                    }
                  >
                    {variacao.toFixed(2)}%
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </main>
  );
}
