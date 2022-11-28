import GlobalStyle from "./GlobalStyle";
import { useState } from "react"
import Chute from "../Chute/Chute";
import Jogo from "../Jogo/Jogo"
import Letras from "../Letras/Letras";
import palavras from "../../palavras"

function App() {
  const [errors, setErrors] = useState(0)
  const [letrasEscolhidas, setLetrasEscolhidas] = useState({letras: []})
  const [palavraArray, setPalavraArray] = useState([])
  const [palavraEscolhida, setPalavraEscolhida] = useState()
  const [gameStarted, setGameStarted] = useState(false)
  const [acertou, setAcertou] = useState(false)
  const [errou, setErrou] = useState(false)

  function gameStart(){
    reinincia()
    const palavraEsc = palavras[Math.floor(Math.random() * palavras.length)]
    setPalavraEscolhida(palavraEsc)
    setPalavraArray(separaPalavra(palavraEsc))
  }

  function reinincia(){
    setPalavraEscolhida("")
    setPalavraArray([])
    setLetrasEscolhidas({letras: []})
    setAcertou(false)
    setErrou(false)
    setGameStarted(true)
    setErrors(0)
  }

  function separaPalavra(char){
    let arrayChar = []
    for(let i = 0; i < char.length; i++){
      arrayChar.push(char[i])
    }
    return arrayChar
  }

  function gameOver(opt){
    setGameStarted(false)
    if (opt){
      setErrou(true)
    } else {
      setAcertou(true)
    }
  }

  return (
    <>
      <GlobalStyle />
      <Jogo errors={errors} gameStart={gameStart} gameStarted={gameStarted} palavraArray={palavraArray} letrasEscolhidas={letrasEscolhidas} acertou={acertou} errou={errou} palavraEscolhida={palavraEscolhida} />
      <Letras letrasEscolhidas={letrasEscolhidas} gameStarted={gameStarted} palavraArray={palavraArray} setLetrasEscolhidas={setLetrasEscolhidas} errors={errors} setErrors={setErrors} gameOver={gameOver} />
      <Chute gameStarted={gameStarted} palavraEscolhida={palavraEscolhida} errors={errors} setErrors={setErrors} acertou={acertou} gameOver={gameOver} />
    </>
  );
}

export default App;
