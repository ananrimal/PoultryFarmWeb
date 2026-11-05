"use client"
import React, {useState, useEffect, useRef} from 'react'
const AnimatedNumber = ({number}) => {
const [counter, setCounter] = useState(0)
const [isVisible, setIsVisible] = useState(false)
const counterRef = useRef(null)
let time
if (number<=15)
{
    time=40
}
else {time=20}
useEffect(() => {

const observer= new IntersectionObserver((entries)=>{
    if (entries[0].isIntersecting){
        setIsVisible(true)
    }
   
})
    observer.observe(counterRef.current)
      return () => {
    observer.disconnect()
  }

  }, [])

  useEffect(() => {
    let timeoutId=null
    if ((isVisible) && counter<number){
       
    timeoutId= setTimeout(() => {
        setCounter((count)=>count+1)
     }, time);
    }
  return()=>{
    clearTimeout(timeoutId)
  }
    
  }, [counter, isVisible,number,time])
  

  return (
   
    <span ref={counterRef}>{counter}</span>
   
  )
}

export default AnimatedNumber