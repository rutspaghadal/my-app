import React from 'react';

function App(props) {

  const myObj = {
    name: "John",
    age: 30,
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
}

 
         for(let key in myObj){
         if(myObj[key] ==myObj.cars){
           for(let j in myObj.cars){
             console.log(myObj.cars[j]);
           }
         }else{
           console.log(myObj[key]);
         }
      }
  
}

export default App;