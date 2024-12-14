import Header from "./components/header/Header"
import Home from "./pages/home/home"

const pizzaData = [
  {
    btns: "Все",
  },
  {
    btns: "Мясные",
  },
  {
    btns: "Вегетаринская",
  },
  {
    btns: "Гриль",
  },
  {
    btns: "Острые",
  },
  {
    btns: "Закрытые",
  },
]

const App = () => {
  return (
    <div className="container"> 
    <Header />
    <div style={{ display: 'flex', gap: '10px'}}>
        {pizzaData.map(pizza => {
        return <Home  
          Btns={pizza.btns} />
      })}
    </div>
    </div>
  )
}

export default App