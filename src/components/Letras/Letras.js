import { Container, ContainerLetras, Letra } from "./style";
import alfabeto from "../../alfabeto.js";

function Letras(props){
    const {letrasEscolhidas, gameStarted, setLetrasEscolhidas, palavraArray, errors, setErrors, gameOver} = props;

    function escolheLetra(item){
        const letras = letrasEscolhidas.letras
        letras.push(item)
        if (!palavraArray.includes(item)){
            setErrors(errors + 1)
            if (errors + 1 === 6){
                gameOver(true)
            }
        }
        setLetrasEscolhidas({letras})
    } 

    return (
        <Container>
            <ContainerLetras>
                {alfabeto.map((item) => {
                    const desabilitado = (letrasEscolhidas.letras && letrasEscolhidas.letras.includes(item)) || !gameStarted
                    return (<Letra disabled={desabilitado} key={item} onClick={() => escolheLetra(item)}>{item}</Letra>)
                })}
            </ContainerLetras>
        </Container>
    )
} 

export default Letras