import { useState } from 'react'
import RewardCard from '../components/reward-card'
import { rewards } from '../data/rewards'

type CategoryFilter = 'all' | 'food' | 'toy' | 'accessory' | 'donation'

const Recompensas = () => {
  const [filter, setFilter] = useState<CategoryFilter>('all')

  const filteredRewards =
    filter === 'all' ? rewards : rewards.filter((reward) => reward.category === filter)

  return (
    <main>
      {/* Header da página */}
      <header>
        <div>
          <span>🛍️ Loja Solidária</span>
          <h1>Troque Pontos por <span>Recompensas</span></h1>
          <p>Sem gastar dinheiro! Use os pontos que você ganhou nas missões para resgatar produtos reais para o seu pet.</p>

          <div>
            <div>
              <span>Sua carteira</span>
              <div><span>850</span> pts</div>
            </div>
            <div></div>
            <div>
              <span>Resgates feitos</span>
              <div>3</div>
            </div>
            <div></div>
            <div>
              <span>Pontos doados</span>
              <div>200</div>
            </div>
          </div>
        </div>
      </header>

      {/* Loja */}
      <section aria-labelledby="store-title">
        <div>
          <div role="tablist" aria-label="Categorias de produtos">
            <button aria-selected={filter === 'all'} onClick={() => setFilter('all')}>
              Todos
            </button>
            <button aria-selected={filter === 'food'} onClick={() => setFilter('food')}>
              🍖 Alimentação
            </button>
            <button aria-selected={filter === 'toy'} onClick={() => setFilter('toy')}>
              🎾 Brinquedos
            </button>
            <button aria-selected={filter === 'accessory'} onClick={() => setFilter('accessory')}>
              🎀 Acessórios
            </button>
            <button aria-selected={filter === 'donation'} onClick={() => setFilter('donation')}>
              ❤️ Doações
            </button>
          </div>

          <h2 id="store-title">
            Produtos disponíveis — <span>{filteredRewards.length} itens</span>
          </h2>

          <div aria-live="polite">
            {filteredRewards.map((reward) => (
              <RewardCard
                key={reward.name}
                emoji={reward.emoji}
                name={reward.name}
                description={reward.description}
                points={reward.points}
                badge={reward.badge}
                note={reward.isDonation ? 'Doe qualquer quantidade' : 'Parte do valor vai para ONGs'}
                buttonLabel={reward.isDonation ? 'Doar pontos →' : 'Resgatar →'}
              />
            ))}
          </div>

          {/* Banner de doação */}
          <div>
            <div>💛</div>
            <div>
              <h3>Doe seus pontos e faça a diferença!</h3>
              <p>Além de resgatar produtos para o seu pet, você pode transformar seus pontos em doações para ONGs parceiras. Cada ponto doado ajuda animais em situação de vulnerabilidade a receberem cuidados, ração e amor. Clique em qualquer produto de doação acima para contribuir!</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Recompensas