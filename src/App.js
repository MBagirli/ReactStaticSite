import PopupContainer from './Components/Popup/PopupContainer';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import MealSection from './Components/MealSection';
import Add from'./Components/Context/Add';
import {  useState } from 'react';



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

  let [animation,setAnimation] = useState(false);
  let [sum,setSum] = useState(0);
  let [popup,setPopup] = useState(false);

  let [obj,setObj] = useState(()=>{
    let objMeals = {};
    for (let i in mealsArray){
      objMeals[`${i}`]=0;
    }
    return {...objMeals};
  });


  let AddHandler = (id,number) =>{
    setObj(prev=>{
      prev[`${id}`]=number;
      return prev;
    });
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 100);
    setSum((prev)=>{
      prev=0;
      Object.values(obj).forEach((item)=>{
        prev+=Number(item);
      });
      return prev;
    })
  }

  let Popup = (bool)=>{
    setPopup(bool);
  }

  let CloseAndOrder = (bool) => {
    setPopup(bool);
  };

  let MinusHandler = (id) => {
    setObj(prev=>{
      let obj={...prev}
      obj[`${id}`]-=1
      return {...obj};
    })
    setSum((prev)=>{
      prev--;
      return prev;
    })
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 100);
  };

  let PlusHandler = (id) => {
    setObj(prev=>{
      let obj={...prev}
      obj[`${id}`]=Number(obj[`${id}`])+1;
      return {...obj};
    })
    setSum((prev)=>{
      prev++;
      return prev;
    })
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 100);
  };


  return (
        <Add.Provider value={{ArrayMeals:mealsArray,Obj:obj,Animation:animation,Sum:sum,Popup:popup}}>
          <PopupContainer plus={PlusHandler} minus={MinusHandler} cao={CloseAndOrder}/>
          <Header popup={Popup} />
          <HeroSection />
          <MealSection Add={AddHandler} />
        </Add.Provider>
  );
}

export default App;
