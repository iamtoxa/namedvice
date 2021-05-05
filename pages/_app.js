import React, { useEffect } from 'react'
import '../styles/globals.css'
import { YMInitializer } from 'react-yandex-metrika';

const MyApp = React.forwardRef(({ Component, pageProps }, ref)=>{
  useEffect(()=>{
    const calculate = ()=>{
      let root = document.documentElement;
      
      var height = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;



      var clientWidth = document.documentElement.clientWidth;
      var e = 0;
      const isMobile = clientWidth < 768;
      const isTablet = !isMobile && clientWidth < 1280;
      const isDesktop = !isMobile && !isTablet;

      if(isDesktop){
        e = clientWidth / 1280;
      } else if (isTablet){
        e = clientWidth / 768;
      } else {
        e = window.innerHeight > window.innerWidth ? clientWidth / 375 : 1
      }


      e = Math.max(6, Math.floor(16 * e));


      root.style.setProperty('--base-fontSize', e + "px");
      root.style.setProperty('--client-height', height + "px");
    }
    
    window.addEventListener('resize', calculate)

    calculate()
  }, [])

  return <>
    <YMInitializer accounts={[77761972]} options={{
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true,
      webvisor:true
    }}/>
    <Component {...pageProps} />
  </>
})

export default MyApp
