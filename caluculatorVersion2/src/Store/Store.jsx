import { Children, createContext,useState } from "react";

export let logicStore=createContext();

let EntireLogic=({children})=>{

  let butt=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']

  let [currentState,setCurrentState]=useState("");
  
  let onClickBehaviour=(buttonText)=>{
    if(buttonText==='C')
    {
  setCurrentState("");
    }
  else if(buttonText==='='){
    let result=eval(currentState)
  setCurrentState(result)
  }else{
  let newValue=currentState + buttonText;
  setCurrentState(newValue)
  }
  }
  return <logicStore.Provider value={{
    butt:butt,
    onClickBehaviour,
    currentState,
  }}>
{children}
  </logicStore.Provider>

}

export default EntireLogic