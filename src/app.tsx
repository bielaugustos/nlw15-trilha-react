// componentes são elementos construidos com html - exemplo
// para utilizar propriedades e estilos é necessário colocar chaves {} nos elementos que serão utilizados como variaveis
// quando se utiliza typescript é preciso determinar o formato dos parametros que a função recebe (tipagem da variavel)
interface MeuBotaoProps {
  texto: string;
}

function Meubotao(props: MeuBotaoProps) {

return <button className="button">{props.texto}</button>
}

export function App() {
  return(
    <>
    <Meubotao texto="Clique aqui"/>
    <Meubotao texto="Botão 2"/>
    <Meubotao texto="Botão 3"/>
    </>
    ) 
}

