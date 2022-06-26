import { useReducer, useState } from 'react';
import './App.css';
import Add from './Components/Context/Add';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import MealSection from './Components/MealSection';
import PopupContainer from'./Components/Popup/PopupContainer';

let reduceNumber = (prev,action)=>{
  if(action.listNumber){
    switch(action.listNumber){
    case 1:
      return{
        ...prev,
        first:action.number
      }
    case 2:
      return{
        ...prev, 
        second:action.number
      }
    case 3:
      return{
      ...prev,
      third:action.number
    }
    default:
      return{
      ...prev,
      fourth:action.number
    }
  }
  } 
  if(action.minus){
    switch(action.food){
    case 'Sushi':
      return{
        ...prev,
        first:action.quantity-1
      }
    case 'Schnitzel':
      return{
        ...prev, 
        second:action.quantity-1
      }
    case 'Dolma':
      return{
        ...prev, 
        third:action.quantity-1
      }
    default:
      return{
        ...prev, 
        fourth:action.quantity-1
      }
  }
  }
  if(action.plus){
    switch(action.food){
    case 'Sushi':
      return{
        ...prev,
        first:action.quantity+1
      }
    case 'Schnitzel':
      return{
        ...prev, 
        second:action.quantity+1
      }
    case 'Dolma':
      return{
        ...prev, 
        third:action.quantity+1
      }
    default:
      return{
        ...prev, 
        fourth:action.quantity+1
      }
  }
  }
}

function App() {

  let [animation,setAnimation] = useState(false);
  let [numbers,dispatchNumbers] = useReducer(reduceNumber,{first:0,second:0,third:0,fourth:0})
  let [clicked,setClicked] = useState(false);

  let Adding = (numberfromMealSection,bool,id) => {
    if(id==='m1' && (bool || (numbers.first!==numberfromMealSection))){
      dispatchNumbers({listNumber:1,number:numberfromMealSection});
      setAnimation(true);
      setTimeout(function(){
        setAnimation(false);
      },100);
    }
    if(id==='m2' && (bool || (numbers.second!==numberfromMealSection))){
      dispatchNumbers({listNumber:2,number:numberfromMealSection});
      setAnimation(true);
      setTimeout(function(){
        setAnimation(false);
      },100);
    }
    if(id==='m3' && (bool || (numbers.third!==numberfromMealSection))){
      dispatchNumbers({listNumber:3,number:numberfromMealSection});
      setAnimation(true);
      setTimeout(function(){
        setAnimation(false);
      },100);
    }
    if(id==='m4' && (bool || (numbers.fourth!==numberfromMealSection))){
      dispatchNumbers({listNumber:4,number:numberfromMealSection});
      setAnimation(true);
      setTimeout(function(){
        setAnimation(false);
      },100);
    }
  };

  let ClickHandler = () => {
    setClicked(true);
  };

  let CloseHandler = () => {
    setClicked(false);
  };

  let MinusHandler = (Item) => {
    dispatchNumbers({...Item,minus:'minus'});
  };

  let PlusHandler = (Item) => {
    dispatchNumbers({...Item,plus:'plus'});
  };

  return (
    <Add.Provider value={{numbers,animation,clicked}}>
      <div className="App">
        <PopupContainer plus={PlusHandler} minus={MinusHandler} close={CloseHandler} />
        <Header Click={ClickHandler}/>
        <HeroSection />
        <MealSection Add={Adding} />
      </div>
    </Add.Provider>
  );
}

export default App;
