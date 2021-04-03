// 1 відмалювати список карточок базуючись на якомусь створеному вами масиві створити окрему кнопку, 
// яка буде видаляти поточний перший елемент (або останній)  якщо у нас масив з 3 елементів і ми клікнули 
// на кнопку 3 рази, то на екрані жодна карточка не має відмалюватись  
// (кнопки повернення до початкового стану не треба)

// 2 те саме, тільки з кнопкою реверт (повернутись до стану, де у нас видно 3 елемнети, як на початку)

// 3   задача з зірочкою) кожна карточка з завдання вище має мати кнопку, по кліку на яку, ми видаляємо зі списку 
// саме її + реверт кнопка, щоб вернути все назад (ця кнопка одна дня всіх карточок, клікнули по ній і всі 
// каркти вернулись назазд) (згадування функції фільтр в лекції було не просто так)

// 4   написати тогл компоненту, яка буде ховати або показувати елемент приклад з візуалкою тут 
// https://material-ui.com/components/switches/#customized-switches




import React, { useState } from 'react'
import './App.css';
import Toogle from './Component/Toogle/Toogle'
let Cartoons = []
fetch('https://api.sampleapis.com/cartoons/cartoons2D')
  .then(value => { return value.json() })
  .then(value => value.map(cartoon => Cartoons.push(cartoon)))
const RenderImage=(props)=>{

  return(
    <img src={props.image} alt='no image' />
  )
}
function App() {
  let [data, setData] = useState(Cartoons)

  const DeleteFirstElement = () => {
    const newData = [...data]
    newData.shift()
    setData(newData)
  }
  const RenderArray = (props) => {
    return (
      props.elem.map(elem => (
        <div className='Card' key={elem.id}><h2>{elem.title}</h2>
          {<RenderImage image={elem.image}/>}
          <button onClick={() => deleteCard(elem.id)}>Delete</button> 
          <span >
          <Toogle />
          </span>
        </div>))
    )
    
  }

  const DeleteLastElement = () => {
    const newData = [...data]
    newData.pop()
    setData(newData)
  }
  const Revert = () => {
    const newData = [...Cartoons]
    setData(newData)
  }
  const deleteCard = (id) => {
    const newData = [...data]
    const cardToDelete = id
    const filteredData = newData.filter((card) => card.id !== cardToDelete)
    setData(filteredData);
  }
  
  return (
    <div >
      <button onClick={DeleteFirstElement}>Delete first element</button>
      <button onClick={DeleteLastElement}>Delete last element</button>
      <button onClick={Revert}>Revert</button>
      <div className='Main'>
        <RenderArray elem={data} />
      </div>

    </div>
  );
}

export default App;
