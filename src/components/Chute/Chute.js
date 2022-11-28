import { useState } from "react";
import { Button, Central, Container, Input, Paragrafo } from "./style";

function Chute(props){
    const {gameStarted, palavraEscolhida, errors, setErrors, gameOver} = props
    const [chute, setChute] = useState("")

    function chutar(){
        setChute("")
        if (chute === palavraEscolhida){
            gameOver(false)
        } else {
            const erros = errors + 1
            setErrors(erros)
            if (erros === 6){
                gameOver(true)
            }
        }
    }


    return (
        <Container>
            <Central>
                <Paragrafo>Já sei a palavra!</Paragrafo>
                <Input disabled={!gameStarted} onChange={(e) => setChute(e.target.value)} value={chute} />
                <Button onClick={() => chutar()}>Chutar</Button>
            </Central>
        </Container>
    )
}

export default Chute