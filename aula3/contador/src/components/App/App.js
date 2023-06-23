import { useEffect, useState } from 'react'
import './App.scss';
import Button from '../Button/Button';
import BasicForm from '../BasicForm/BasicForm';

function App() {
  const [counter, setCounter] = useState(0);
  // const [plus5, setPlus5] = useState(0);
  const [gameLive, setGameLive] = useState(true)
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (gameLive) {
        if(counter >= 10) {
        alert('Vitória!')
        setGameLive(false)
        // setCounter(0)
        } else if (counter <= -10) {
        alert('Derrota!')
        setGameLive(false)
        }
    }
  }, [counter, gameLive]) 

  const subtract = () => setCounter(counter - 1)
  const add = () => setCounter(counter + 1)
  // const addPlus5 = () => setPlus5(plus5 + 1)

  const fetch = async () => {
    console.log(1)
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log(2)
    const jsonData = await response.json();
    console.log(jsonData)
  }

  const callJSONPlaceholder = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const usersData = await response.json()
    setUsers(usersData)
  }

  const buttons = [
    {
      click: subtract,
      label: '-'
    },
    {
      click: add,
      label: '+'
    }
  ]

  return (
    <div className="App">
      <p>Counter: {counter}</p>
      {/* <p>Plus 5: {plus5}</p> */}
      {
        buttons.map(
          (button, index) => (
            <Button
              key={index}
              click={button.click}
            >
              {button.label}
            </Button>
          )
        )
      }
      <button onClick={() => fetch()}>Fetch API</button>
      <button onClick={callJSONPlaceholder}>callJSONPlaceholder</button>
      <section>
        {
          users?.map(
            user => (
              <div key={user?.id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
              </div>
            )
          )
        }
      </section>
      <BasicForm />
    </div>
  )
}

export default App;