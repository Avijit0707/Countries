import { useEffect, useState } from "react"

export function GetwindowArea(){
    const [windowArea, setWindowArea] = useState({hight:window.innerHeight,
        width:window.innerWidth
      })
          useEffect(()=>{
            window.addEventListener("resize",()=>{
            setWindowArea({
              hight:window.innerHeight,
              width:window.innerWidth
            })
      
            })
          },[])

       return windowArea
}