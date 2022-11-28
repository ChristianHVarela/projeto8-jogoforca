import { ButtonEscolherPalavra, Container, ContainerDireita, ContainerLetras, ImagemForca, LetrasUnder, ContainerButton } from "./style.js"
import forca0 from "../../assets/forca0.png"
import forca1 from "../../assets/forca1.png"
import forca2 from "../../assets/forca2.png"
import forca3 from "../../assets/forca3.png"
import forca4 from "../../assets/forca4.png"
import forca5 from "../../assets/forca5.png"
import forca6 from "../../assets/forca6.png"

function Jogo(props){
    const {errors, gameStart, gameStarted, palavraArray, letrasEscolhidas, acertou, errou, palavraEscolhida} = props;

    return (
        <Container>
            <ImagemForca data-test="game-image" src={errors === 0 ? forca0 : errors === 1 
                ? forca1 : errors === 2 ? forca2 : errors === 3 
                ? forca3 : errors === 4 ? forca4 : errors === 5 ? 
                forca5 : forca6} />
            <ContainerDireita>
                <ContainerButton>
                    <ButtonEscolherPalavra data-test="choose-word" onClick={gameStart} disabled={gameStarted}>Escolher Palavra</ButtonEscolherPalavra>
                </ContainerButton>
                <ContainerLetras data-test="word" data-answer={palavraEscolhida}>
                    {palavraArray.map((letter, index) => {
                        const letra = (letrasEscolhidas && letrasEscolhidas.letras.includes(letter)) || acertou || errou ? letter : "_"
                        return (
                            <LetrasUnder acertou={acertou} errou={errou} key={index}>{letra}</LetrasUnder>
                        )
                    })}
                </ContainerLetras>
            </ContainerDireita>
        </Container>
    )
}

export default Jogo