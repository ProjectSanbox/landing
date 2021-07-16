import React, { useEffect } from 'react';
import ReactLottieWrapper from './reactlottie.style';
import lottie from 'lottie-web';
import { useRef } from 'react';
import Box from 'reusecore/Box';



const ReactLottie = () =>{

    const element = useRef(null);

    useEffect(()=>{
        lottie.loadAnimation({
            container: element.current, // the dom element
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./circle.json'), // the animation data
          });
    }, [])


    return(
        <ReactLottieWrapper>
            <div className="element" ref={element}></div>
        </ReactLottieWrapper>
    );
}

export default ReactLottie;