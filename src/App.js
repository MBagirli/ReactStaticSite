import PopupContainer from './Components/Popup/PopupContainer';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import MealSection from './Components/MealSection';
import Add from'./Components/Context/Add';
import { useState } from 'react';



function App() {

  let mealsArray = [
    {meal:'Sushi',info:'Finest fish veggies',price:22.99},
    {meal:'Schnitzel',info:'A german speciality',price:16.55},
    {meal:'Dolma',info:'Delicious Azerbaijani food',price:20.99},
    {meal:'Nuggets',info:'Delicious American food',price:21.99},
    {meal:'Pizza',info:'Delicious Italian food',price:31.99},
    {meal:'Doner',info:'Delicious Turkish food',price:51.99},
    {meal:'Kebab',info:'Delicious Turkish food',price:51.99},
    {meal:'Xinkal',info:'Delicious Georgian food',price:39.99},
    {meal:'Pasta',info:'Delicious Italian food',price:31.99},
  ];


  //Animation of CartButton
  const [animation,setAnimation] = useState(false);

  //Popup
  const [popup,setPopup] = useState(false);

  //ID and Quantity
  const [iq,setIQ] = useState(()=>{
    let obj = {};
    for(let i in mealsArray){
      obj[`e${i}`]=0;
    }
    return obj;
  });

  //Add Button
  let AddHandler = (id,quantity)=>{
    setIQ(prev=>{
      prev[`${id}`] = Number(quantity);
      return prev;
    });
    setAnimation(true);
    setTimeout(()=>{
      setAnimation(false);
    },100);
  }

  //Open Popup
  let OpenPopup = (bool)=>{
    setPopup(bool);
  }

  //ClosePopup
  let ClosePopup = (bool)=>{
    setPopup(bool);
  }

  //Minus
  let Minus = (id)=>{
    setIQ(prev=>{
      let obj={...prev}
      obj[`${id}`]-=1;
      return obj;
    });
    setAnimation(true);
    setTimeout(()=>{
      setAnimation(false);
    },100);
  }

  let Plus = (id)=>{
    setIQ(prev=>{
      let obj={...prev}
      obj[`${id}`]+=1;
      return obj;
    });
    setAnimation(true);
    setTimeout(()=>{
      setAnimation(false);
    },100);
  }

  return (
        <Add.Provider value={{ArrayofMeals:mealsArray,IdQuantity:iq,ADD:AddHandler,Animation:animation,openPopup:OpenPopup,Popup:popup,closePopup:ClosePopup,minus:Minus,plus:Plus}}>
          <PopupContainer />
          <Header />
          <HeroSection />
          <MealSection />
        </Add.Provider>
  );
}

export default App;
