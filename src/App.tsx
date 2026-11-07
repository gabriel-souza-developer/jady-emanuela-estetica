import { useEffect } from 'react'
import { Heroi } from './componentes/hero'
import { FaixaTratamento } from './componentes/faixa-tratamento'
import { Contato } from './componentes/contato'
import { WhatsappFlutuante } from './componentes/whatsapp-flutuante'

function App() {
  useEffect(() => {
    import('./motor/motor.js')
  }, [])

  return (
    <>
      <a className="pular" href="#conteudo">Ir para o conteúdo</a>
      <Heroi />
      <FaixaTratamento id="facial" titulo="Facial" acento="esmeralda" />
      <FaixaTratamento id="corporal" titulo="Corporal" acento="rose" reverso />
      <FaixaTratamento id="capilar" titulo="Capilar e Tricologia" acento="esmeralda" />
      {/* Injetáveis/Botox: bloqueado. Não construir sem a cliente confirmar o
          profissional responsável e o conselho (CRM/COREN/CRBM) — BRIEF.md
          seção 3. */}
      <FaixaTratamento id="kit-home-care" titulo="Kit Home Care" acento="rose" reverso />
      {/* Depoimentos/avaliações: sem avaliação real confirmada ainda (BRIEF.md
          seção 2) — seção não construída. */}
      <Contato />
      <WhatsappFlutuante />
    </>
  )
}

export default App
