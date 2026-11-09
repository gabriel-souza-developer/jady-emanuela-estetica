import { useEffect } from 'react'
import { Heroi } from './componentes/heroi'
import { Manifesto } from './componentes/manifesto'
import { Tratamentos } from './componentes/tratamentos'
import { Especialidade } from './componentes/especialidade'
import { Contato } from './componentes/contato'
import { AcoesFlutuantes } from './componentes/acoes-flutuantes'
import { TELEFONE_LEGIVEL, whatsapp } from './dados'

function App() {
  useEffect(() => {
    import('./motor/motor.js')
  }, [])

  return (
    <>
      <a className="pular" href="#conteudo">Ir para o conteúdo</a>
      <Heroi />
      <main id="conteudo">
        <Manifesto />
        <Tratamentos />
        <Especialidade />
        <Contato />
      </main>
      <AcoesFlutuantes whatsapp={whatsapp('Olá! Vim pelo site.')} numero={TELEFONE_LEGIVEL} topo="#inicio" />
    </>
  )
}

export default App
