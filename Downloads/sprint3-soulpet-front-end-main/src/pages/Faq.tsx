import { Link } from 'react-router-dom'
import FaqItem  from '../components/faq-item.tsx'
import { faqCategories } from '../data/faq'

const Faq = () => {
  return (
    <main>
      {/* Header da página */}
      <header>
        <div>
          <span>❓ Dúvidas</span>
          <h1>Perguntas <span>Frequentes</span></h1>
          <p>Encontre respostas para as principais dúvidas sobre a SoulPet, missões, pontos e recompensas.</p>
        </div>
      </header>

      {/* FAQ */}
      <section aria-labelledby="faq-title">
        <div>
          {faqCategories.map((category) => (
            <div key={category.title}>
              <div>
                <span>{category.badge}</span>
                <h2 id={category.title === 'Sobre a SoulPet' ? 'faq-title' : undefined}>
                  {category.title}
                </h2>
              </div>

              <div>
                {category.questions.map((item) => (
                  <FaqItem key={item.question} question={item.question} answer={item.answer} />
                ))}
              </div>
            </div>
          ))}
          <div>
            <div>💬</div>
            <h3>Ainda tem dúvidas?</h3>
            <p>Nossa equipe está pronta para te ajudar! Envie sua mensagem pelo formulário de contato.</p>
            <Link to="/contato">Falar com a equipe →</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Faq