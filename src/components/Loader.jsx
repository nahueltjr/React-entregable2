import React from 'react';
import { useEffect, useState} from 'react';
import img from '../assets/sun.svg'
import { motion } from 'framer-motion';

const Loader = () => {
    const [loader, setLoader]=useState('Loader')
    useEffect(()=>{
        setTimeout(() => {
            setLoader('Loader-hide')
        }, 2000)
    },[])
    
    return (
        <div className={loader}>
            <div className='Loader-content'>
              <motion.img src={img} alt="" animate={{scale: [1, 1.2, 1.2, 1, 1],rotate: [0, 0, 270, 270, 0] }} transition={{ duration: 1.8}}/> 
              <p>Weather App</p> 
            </div> 
        </div>
    );
};

export default Loader;