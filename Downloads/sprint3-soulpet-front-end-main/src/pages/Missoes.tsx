import { useState } from 'react'
import MissionCard from '../components/mission-card'
import { missions } from '../data/missions'

type LevelFilter = 'all' | 'easy' | 'medium' | 'hard'

const Missoes = () => {
  const [filter, setFilter] = useState<LevelFilter>('all')

  const filteredMissions =
    filter === 'all' ? missions : missions.filter((mission) => mission.level === filter)

  return (
    <main>
      {/* Header da página */}
      <header>
        <div>
          <span>🎯 Missões</span>
          <h1>Central de <span>Missões</span></h1>
          <p>Complete tarefas, ganhe pontos e transforme seu engajamento em impacto real para os pets!</p>

          <div>
            <div>
              <div>🟢 30 pts</div>
              <div>Missões Fáceis — até 1 dia</div>
            </div>
            <div>
              <div>🟡 100 pts</div>
              <div>Missões Médias — até 1 semana</div>
            </div>
            <div>
              <div>🔴 500 pts</div>
              <div>Missões Difíceis — até 1 mês</div>
            </div>
          </div>
        </div>
      </header>

      {/* Lista de missões */}
      <section aria-labelledby="missions-list-title">
        <div>
          <div role="toolbar" aria-label="Filtros de missão">
            <span>Filtrar por:</span>
            <div role="group" aria-label="Dificuldade">
              <button aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>
                Todas
              </button>
              <button aria-pressed={filter === 'easy'} onClick={() => setFilter('easy')}>
                🟢 Fácil
              </button>
              <button aria-pressed={filter === 'medium'} onClick={() => setFilter('medium')}>
                🟡 Médio
              </button>
              <button aria-pressed={filter === 'hard'} onClick={() => setFilter('hard')}>
                🔴 Difícil
              </button>
            </div>
          </div>

          <h2 id="missions-list-title">
            Missões disponíveis — <span>{filteredMissions.length} missões</span>
          </h2>

          <div aria-live="polite">
            {filteredMissions.map((mission) => (
              <MissionCard
                key={mission.title}
                icon={mission.icon}
                difficulty={mission.difficulty}
                tag={mission.tag}
                title={mission.title}
                description={mission.description}
                points={mission.points}
                deadline={mission.deadline}
              />
            ))}
          </div>

          {/* Como os níveis funcionam */}
          <div>
            <h3>📋 Entenda os níveis de dificuldade</h3>
            <div>
              <div>
                <span>🟢</span>
                <div>Fácil</div>
                <p>Tarefas rápidas e simples. Prazo de até <strong>1 dia</strong>. Ideal para quem quer acumular pontos no dia a dia.</p>
              </div>
              <div>
                <span>🟡</span>
                <div>Médio</div>
                <p>Missões que exigem mais engajamento. Prazo de até <strong>1 semana</strong>. Ótimo equilíbrio entre esforço e recompensa.</p>
              </div>
              <div>
                <span>🔴</span>
                <div>Difícil</div>
                <p>Alto impacto e dedicação. Prazo de até <strong>1 mês</strong>. Para quem quer fazer a diferença de verdade e ganhar muito mais pontos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Missoes