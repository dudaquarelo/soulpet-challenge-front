import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface ContatoFormData {
  nome: string
  email: string
  assunto: string
  mensagem: string
  aceite: boolean
}

const Contato = () => {
  const [enviado, setEnviado] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContatoFormData>()

  const onSubmit = (data: ContatoFormData) => {
    console.log('Formulário enviado:', data)
    setEnviado(true)
    reset()
  }

  return (
    <main>
      {/* Header da página */}
      <header>
        <div>
          <span>✉️ Fale Conosco</span>
          <h1>Entre em <span>Contato</span></h1>
          <p>Tem dúvidas, sugestões ou quer propor uma parceria? Nossa equipe adoraria ouvir você!</p>
        </div>
      </header>

      <section aria-labelledby="contact-title">
        <div>
          {/* Informações de contato */}
          <aside>
            <h2 id="contact-title">Vamos conversar! 🐾</h2>
            <p>
              A SoulPet é um projeto acadêmico desenvolvido com muito carinho na FIAP. Se você tiver dúvidas sobre o projeto, sugestões de melhoria ou quiser saber mais sobre como funciona nossa comunidade, fique à vontade para nos contatar!
            </p>

            <div>
              <div>📧</div>
              <div>
                <div>E-mail</div>
                <div>soulpet@fiap.com.br</div>
              </div>
            </div>

            <div>
              <div>🏫</div>
              <div>
                <div>Instituição</div>
                <div>FIAP – Faculdade de Informática e Administração Paulista</div>
              </div>
            </div>

            <div>
              <div>📍</div>
              <div>
                <div>Localização</div>
                <div>São Paulo, SP – Brasil</div>
              </div>
            </div>

            <div>
              <div>💻</div>
              <div>
                <div>GitHub do Projeto</div>
                <a href="#">github.com/soulpet ↗</a>
              </div>
            </div>

            <div>
              <p>📌 Sobre o que posso entrar em contato?</p>
              <ul>
                <li>🐾 Dúvidas sobre missões e pontos</li>
                <li>🎁 Recompensas e resgates</li>
                <li>🤝 Parcerias com ONGs</li>
                <li>💡 Sugestões de novas funcionalidades</li>
                <li>🐛 Reporte de bugs ou erros</li>
              </ul>
            </div>
          </aside>

          {/* Formulário */}
          <div>
            <h3>Enviar mensagem ✉️</h3>

            {enviado && (
              <div role="status" aria-live="polite">
                <div>🎉</div>
                <div>Mensagem enviada!</div>
                <div>Obrigado pelo contato! Nossa equipe responderá em breve. 🐾</div>
              </div>
            )}

            {!enviado && (
              <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Formulário de contato">
                <div>
                  <div>
                    <label htmlFor="nome">Nome *</label>
                    <input
                      type="text"
                      id="nome"
                      placeholder="Seu nome completo"
                      autoComplete="name"
                      {...register('nome', { required: 'Informe seu nome' })}
                    />
                    {errors.nome && <span role="alert">{errors.nome.message}</span>}
                  </div>

                  <div>
                    <label htmlFor="email">E-mail *</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="seu@email.com"
                      autoComplete="email"
                      {...register('email', {
                        required: 'Informe seu e-mail',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Informe um e-mail válido',
                        },
                      })}
                    />
                    {errors.email && <span role="alert">{errors.email.message}</span>}
                  </div>
                </div>

                <div>
                  <label htmlFor="assunto">Assunto *</label>
                  <select
                    id="assunto"
                    defaultValue=""
                    {...register('assunto', { required: 'Selecione um assunto' })}
                  >
                    <option value="" disabled>Selecione um assunto</option>
                    <option value="missoes">🎯 Dúvidas sobre missões</option>
                    <option value="pontos">⭐ Pontos e carteira</option>
                    <option value="recompensas">🎁 Recompensas e resgates</option>
                    <option value="parceria">🤝 Parceria / ONG</option>
                    <option value="sugestao">💡 Sugestão de melhoria</option>
                    <option value="bug">🐛 Reportar bug</option>
                    <option value="outro">💬 Outro assunto</option>
                  </select>
                  {errors.assunto && <span role="alert">{errors.assunto.message}</span>}
                </div>

                <div>
                  <label htmlFor="mensagem">Mensagem *</label>
                  <textarea
                    id="mensagem"
                    placeholder="Escreva aqui a sua mensagem..."
                    {...register('mensagem', {
                      required: 'Escreva sua mensagem',
                      minLength: { value: 10, message: 'A mensagem precisa ter pelo menos 10 caracteres' },
                    })}
                  />
                  {errors.mensagem && <span role="alert">{errors.mensagem.message}</span>}
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="aceite"
                    {...register('aceite', { required: 'Você precisa aceitar os termos' })}
                  />
                  <label htmlFor="aceite">
                    Concordo que meus dados serão usados somente para responder à minha mensagem, conforme a LGPD.
                  </label>
                  {errors.aceite && <span role="alert">{errors.aceite.message}</span>}
                </div>

                <button type="submit" aria-label="Enviar mensagem">
                  <span>Enviar mensagem</span> →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contato