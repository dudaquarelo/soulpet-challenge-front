import TeamCard from '../components/team-card'
import { team } from '../data/team'

function Integrantes() {
  return (
    <main>
      {/* Header da página */}
      <header>
        <div>
          <span>👥 Nossa Equipe</span>
          <h1>Quem Somos <span>/ Integrantes</span></h1>
          <p>Conheça as desenvolvedoras apaixonadas por tecnologia e pets que criaram a SoulPet.</p>
        </div>
      </header>

      {/* Equipe */}
      <section aria-labelledby="team-title">
        <div>
          <div>
            <h2 id="team-title">
              Turma: <span>1TDSR-2026</span>
            </h2>
            <p>FIAP · Análise e Desenvolvimento de Sistemas · 3º Sprint · 2026</p>
          </div>

          <div>
            {team.map((member) => (
              <TeamCard
                key={member.rm}
                photo={member.photo}
                name={member.name}
                rm={member.rm}
                github={member.github}
                linkedin={member.linkedin}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Integrantes