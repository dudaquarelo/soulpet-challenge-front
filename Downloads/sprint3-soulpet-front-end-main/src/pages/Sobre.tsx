import FeatureCard from '../components/feature-card'
import RoadmapItem from '../components/roadmap-Item'

function Sobre() {
  return (
    <main>
      {/* Header da página */}
      <header>
        <div>
          <span>📖 Sobre o Projeto</span>
          <h1>Sobre a <span>SoulPet</span></h1>
          <p>Conheça o contexto, a solução proposta, as tecnologias utilizadas e o roadmap do projeto.</p>
        </div>
      </header>

      {/* Sobre / Contexto */}
      <section aria-labelledby="context-title">
        <div>
          <div>
            <div>
              <span>🐾</span>
              <h3>SoulPet</h3>
              <p>Uma comunidade feita por e para apaixonados por pets. Aqui, a gente apoia a adoção, conecta tutores e recompensa quem cuida dos pets com todo o carinho que eles merecem.</p>
              <div>
                <div>
                  <div>1.200+</div>
                  <div>Missões criadas</div>
                </div>
                <div>
                  <div>50+</div>
                  <div>Recompensas</div>
                </div>
                <div>
                  <div>3</div>
                  <div>Níveis de missão</div>
                </div>
                <div>
                  <div>100%</div>
                  <div>Gratuito</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span>🌍 O Problema</span>
            <h2 id="context-title">Por que a <span>SoulPet</span> existe?</h2>

            <p>
              Milhões de animais vivem em situação de abandono ou carecem de cuidados básicos no Brasil. Ao mesmo tempo, tutores comprometidos muitas vezes não têm acesso fácil a produtos de qualidade para seus pets por questões financeiras.
            </p>

            <p>
              A <strong>SoulPet</strong> nasce como uma comunidade dentro da rede social <strong>SoulUp</strong> — focada no meio ecológico — para criar uma ponte entre o engajamento digital e o cuidado real com animais.
            </p>

            <p>
              Ao completar missões dentro da plataforma, os usuários acumulam pontos que podem ser trocados por produtos físicos para seus pets, sem precisar gastar dinheiro real. É o engajamento gerando impacto concreto!
            </p>

            <div>
              <span>React</span>
              <span>Vite</span>
              <span>TypeScript</span>
              <span>TailwindCSS</span>
              <span>React Router</span>
              <span>React Hook Form</span>
              <span>Responsive Design</span>
              <span>Google Fonts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Solução */}
      <section aria-labelledby="solution-title">
        <div>
          <span>💡 A Solução</span>
          <h2 id="solution-title">Como a <span>SoulPet funciona</span></h2>
          <p>Um sistema de gamificação voltado para o bem-estar animal.</p>
        </div>

        <div>
          <FeatureCard
            icon="🎯"
            title="Sistema de Missões"
            description="Três níveis de dificuldade — fácil (até 1 dia), médio (até 1 semana) e difícil (até 1 mês) — com pontuações proporcionais ao esforço exigido."
          />
          <FeatureCard
            icon="💎"
            title="Carteira de Pontos"
            description="Cada missão concluída adiciona pontos à carteira virtual do usuário. Os pontos não expiram e podem ser acumulados livremente."
          />
          <FeatureCard
            icon="🛍️"
            title="Loja Solidária"
            description="Os pontos são trocados por produtos reais como ração, coleiras, brinquedos e areia para gato — sem nenhum custo financeiro para o tutor."
          />
        </div>
      </section>

      {/* Roadmap */}
      <section aria-labelledby="roadmap-title">
        <div>
          <h2 id="roadmap-title">Roadmap do <span>Projeto</span></h2>

          <div>
            <RoadmapItem icon="🎨" title="Design & Layout" status="Sprint 1 · ✅ Concluído" />
            <RoadmapItem icon="🔧" title="Responsividade" status="Sprint 1 · ✅ Concluído" />
            <RoadmapItem icon="⚡" title="Migração para React + Vite" status="Sprint 3 · 🔄 Em andamento" />
            <RoadmapItem icon="🚀" title="Integração com API e Deploy" status="Sprint 4 · ⏳ Futuro" />
          </div>
        </div>
      </section>

      {/* Tecnologias */}
      <section aria-labelledby="tech-title">
        <div>
          <span>⚙️ Tecnologias</span>
          <h2 id="tech-title">Stack <span>Utilizado</span></h2>
          <p>Desenvolvido com as melhores práticas de Front-End Design Engineering.</p>
        </div>

        <div>
          <FeatureCard icon="⚛️" title="React" description="Componentização e SPA" />
          <FeatureCard icon="⚡" title="Vite" description="Build rápido e eficiente" />
          <FeatureCard icon="🔷" title="TypeScript" description="Tipagem estática e segurança" />
          <FeatureCard icon="🎨" title="Tailwind CSS" description="Estilização utilitária e responsiva" />
        </div>
      </section>
    </main>
  )
}

export default Sobre