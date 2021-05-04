import React, { useEffect } from 'react'
import '../styles/globals.css'

const MyApp = React.forwardRef(({ Component, pageProps }, ref)=>{
  useEffect(()=>{
    const calculate = ()=>{
      let root = document.documentElement;
      
      var height = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;

      root.style.setProperty('--client-height', height + "px");
    }
    
    window.addEventListener('resize', calculate)

    calculate()
  }, [])

  return <Component {...pageProps} />
})

export default MyApp
