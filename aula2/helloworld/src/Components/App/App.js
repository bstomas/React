import { useState } from 'react';
import Botao from '../Botao/Botao';
import Card from '../Card/Card';
import Header from '../Header/Header'
import './App.scss';

function App() {

  const funcaoOne = () => {
    alert("111111")
  }

  const funcaoTwo = () => {
    alert("222222")
  }

  // const funcaoThree = () => {
  //   alert("333333")
  // }

  // const funcaoFour = () => {
  //   alert("444444")
  // }

  const botoes = [
    {
      click: funcaoOne,
      className: "greenColor",
      color: "red",
      background: "black",
      children: "Label"
    },
    {
      click: funcaoTwo,
      className: "radius",
      color: "red",
      background: "black",
      children: "Label 2"
    },
  ]

  
  const [cards, setCards] = useState([
    {
      id: 1,
      classValue: "colorRed",
      blueBackgroundParagraph: true,
      click: () => alert("aaaaaa")
    },
    {
      id: 2,
      classValue: "bigSize",
      blueBackgroundParagraph: false,
      click: () => alert("bbbbbb")
    },
    {
      id: 3,
      classValue: "roundedEdges",
      blueBackgroundParagraph: false,
      click: () => alert("cccccc")
    }
  ])




  return (
    <div className="App">
      <Header />
      <Botao click={() => setCards([])}>Limpar Cards</Botao>
      {
        cards.length ? cards.map((card, index) =>
          <Card
            key={index}
            classValue={card.classValue}
            blueBackgroundParagraph={card.blueBackgroundParagraph}
            click={card.click}
            />
          )
          : <p>Não há cards</p>
      }
      {
        botoes.length ? botoes.map((botao, index) => (
          <Botao
          key={index}
          click={botao.click}
          className={botao.className}
          color={botao.color}
          background={botao.background}>
            {botao.children}
          </Botao>
        ))
        : <p>Não há botões.</p>
      }

      {/* <section className='body'>
        <section className='buttons'>
          <Botao click ={funcaoOne} className="greenColor" color="red" background="black">Label</Botao>
          <Botao click={funcaoTwo} className="radius" color="red" background="black">Label</Botao>
          <Botao click={funcaoThree} className="greenColor radius" color="red" background="black">Label</Botao>
          <Botao click={funcaoFour} size="size" color="red" background="black">Label</Botao>
        </section>
      </section> */}
    </div>
  );
}

export default App
