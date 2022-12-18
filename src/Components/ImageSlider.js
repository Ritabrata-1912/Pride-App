import {useState} from 'react';
import {ArrowLeft, ArrowRight} from '@mui/icons-material';
export default function ImageSlider({slides}){
    const [currentIndex,setCurrentIndex]=useState(0);
    const sliderStyles={height:'100%',position:'relative'}
    const slideStyles={width:'100%',height:'100%',backgroundRadius:'10px',
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundImage:`url(${slides[currentIndex].img})`}
    const leftArrowStyles={
        position:'absolute',
        top:'50%',
        transform:'translate(0,-50%)',
        left:'2%',
        color:'#fff',
        zIndex:1,
        cursor:'pointer'
    }
    const rightArrowStyles={
        position:'absolute',
        top:'50%',
        transform:'translate(0,-50%)',
        right:'2%',
        color:'#fff',
        zIndex:1,
        cursor:'pointer'
    }
    const previousSlide=()=>{
        const isFirstSlide=currentIndex===0;
        const prevIndex=(isFirstSlide)?slides.length-1:currentIndex-1;
        console.log(prevIndex);
        setCurrentIndex(prevIndex);
    }
    const nextSlide=()=>{
        const isLastSlide=currentIndex===slides.length-1;
        const nextIndex=(isLastSlide)?0:currentIndex+1;
        console.log(nextIndex);
        setCurrentIndex(nextIndex);
    }
    return(
         <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={previousSlide}><ArrowLeft fontSize='large'/></div>
            <div style={rightArrowStyles} onClick={nextSlide}><ArrowRight fontSize='large'/></div>
            <div style={slideStyles}></div>
         </div>
    )
}