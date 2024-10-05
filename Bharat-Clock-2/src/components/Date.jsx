import { useEffect,useState } from "react";

 function DateToday()
{ 
   let [currentTime,setCurrentTime]= useState(new Date())
   console.log(`current time is painted! ${currentTime.getDay()}`)

useEffect(()=>{
    console.log("the time interval has been started!")
const intervalId=setInterval(()=>{
    setCurrentTime(new Date());
},1000)
return ()=>{
    clearInterval(intervalId)
    console.log("Canceled the time interval!")
}

},[])
   
   return <div class="row2" >
this is the current time: {currentTime.toLocaleDateString()} - {currentTime.toLocaleTimeString()}
</div>
}
export default DateToday;