import { Button, Central, Container, Input, Paragrafo } from "./style";

function Chute(props){
    const {gameStarted} = props

    return (
        <Container>
            <Central>
                <Paragrafo>Já sei a palavra!</Paragrafo>
                <Input disabled={!gameStarted} />
                <Button>Chutar</Button>
            </Central>
        </Container>
    )
}

export default Chute