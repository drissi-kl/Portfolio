<script setup> 

import { computed } from 'vue';
import {Vue3Lottie} from 'vue3-lottie';

import emailImage from '../images/email.png';
import developerAnimation from "../images/animation/Coding (1).json";
import { modeStore } from '../store/modeStore';
import cv from "../files/CV.pdf";
import '../style/header.css';


const modestore = modeStore();
const currrentMode = computed(()=>{ return modestore.darkMode });


const downloadCV = () => {
    const a = document.createElement('a');
    a.href = cv;
    a.download = "DRISSI Abderrahmane CV";
    a.click();
    a.remove();
    console.log('cv', cv);
}

const showCV = () => {
    const a = document.createElement('a');
    a.href = cv;
    a.target="_blank";
    a.click();
    a.remove();
    console.log('cv', cv);
}







</script>

<template>
    <div :class="['header', !currrentMode && 'light']">
        <div class="rightSide">
            <div class="top">
                <p class="title">DRISSI Abderrahmane</p>
                <p class="subTitle">
                    Full-Stack Developer / DevOps
                </p>
                <p class="text">
                    I'm a passionate junior web developer who enjoys transforming ideas into functional and visually appealing 
                    digital experiences. From crafting responsive user interfaces to connecting dynamic backends, I love every 
                    step of the web development process. What excites me most about this field is its constant evolution — there's 
                    always something new to learn, a new framework to explore, or a better way to solve a problem. I'm driven by 
                    curiosity and a desire to grow, always seeking opportunities to sharpen my skills and take on new challenges. 
                    My goal is to create clean, efficient, and meaningful web solutions that make a real impact while continuously 
                    improving as a developer and as a learner.
                </p>
            </div>
            <div class="bottom">
                <button class="downloadBtn" @click="downloadCV">Download CV</button>
                <button class="showBtn" @click="showCV">Show CV</button>
                
            </div>

            
        </div>
    
        <div class="leftSide">
            <Vue3Lottie class="animation" :animationData="developerAnimation"  :loop="true" :autoplay="true" :speed="1"  />
        </div>


    </div>

</template>



