import styles from '@/styles/Home.module.css'
import React, { useState } from 'react';

export default function Home() {
  const [resultado, setResultado] = useState()
  const [pergunta, setPergunta] = useState()
  const [valor, setValor] = useState()
  const [status, setStatus] = useState('')
  
  function Gerar(){
      let num1 = parseInt(Math.random() * 20)
      let num2 = parseInt(Math.random() * 20)
      let opr = ['+', '-', '/', '*']
      let i = parseInt(Math.random() * 3)


      if(num2 == 0 && i == 2){
        num2 = 1
      }

      let pergunta = `Resolva o seguinte problema:
      ${num1} ${opr[i]} ${num2}`
      
      let resultado
      if(i == 0){
        resultado = num1+num2
      }else if(i == 1){
        resultado = num1-num2
      }else if(i == 2){
        resultado = num1/num2
        parseFloat(resultado)
        resultado.toFixed(2)
      }else if(i == 3){
        resultado = num1*num2
      }

      setPergunta(pergunta)
      setResultado(resultado)
      setValor('')
      setStatus()
  }

  function valorDigitado(e){
      setValor(e.target.value)
  }

  function Resolver(){
    if(resultado == parseInt(valor)){
        setStatus("Parabéns você acertou!")
    }else{
        setStatus("Infelizmente você errou. O resultado correto era "+resultado)
    } 
  }


  return (
    <>
      <section className={styles.container}>
        <div className={styles.containerGerador}>
          <span>{pergunta}</span>
          <button onClick={Gerar}>Gerar Problema</button>
          <div className={styles.containerResolver}>
            <input placeholder='Informe o resultado' value={valor} onChange={valorDigitado}/>
            <button onClick={Resolver}>Resolver</button>
          </div> 
          <div className={styles.status}>
            <h2>{status}</h2>
          </div>
          
        </div>
      </section>
    </>
  )
}
