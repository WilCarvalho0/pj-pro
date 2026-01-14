import "./About.css";

export default function About() {
  const equipe = [
    {
      nome: "William Carvalho",
    funcao: "Desenvolvedor Front-End | Back-End | UX/UI Designer",
    foto: "./img55.png",
    destaque: true
    },
    {
      nome: "Edjane Maria Barros de Sá",
      funcao: "Desenvolvedora Front-End / UX Designer",
      foto: "./edjane.jpg.jpg",
      destaque: false
    }
  ];

  return (
    <main className="about-container">
      
      {/* ================= INTRO ================= */}
      <section className="about-intro">
        <h1>Sobre o Finanças Pro</h1>
        <p>
          O <strong>Finanças Pro</strong> é uma plataforma de análise financeira desenvolvida
          para democratizar o acesso a informações estratégicas do mercado de capitais.
          Nosso foco é unir <strong>tecnologia, dados e inteligência</strong> para apoiar
          decisões financeiras mais seguras e eficientes.
        </p>
      </section>

      {/* ================= EQUIPE ================= */}
      <section className="team-section">
        <h2>Nossa Equipe</h2>

        <div className="team-grid">
          {equipe.map((membro, index) => (
            <div
              key={index}
              className={`team-card ${
                membro.destaque ? "gold-highlight" : ""
              }`}
            >
              <img
                src={membro.foto}
                alt={membro.nome}
                className="team-photo"
              />

              <h3>{membro.nome}</h3>
              <p className="team-role">{membro.funcao}</p>

              {membro.destaque && (
                <span className="founder-badge"></span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROJETO ================= */}
      <section className="project-info">
        <h3>Projeto Integrador • 2026</h3>
        <p>
          Plataforma desenvolvida como projeto integrador acadêmico, com foco em
          aplicações reais no mercado financeiro, utilizando boas práticas de
          desenvolvimento Front-End e experiência do usuário (UX).
        </p>
      </section>
    </main>
  );
}


