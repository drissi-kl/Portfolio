<script setup> 
import emailImage from '../images/email.png';
import '../style/header.css';

</script>

<template>
    <div class="header">
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
                <button class="downloadBtn">
                    Download CV
                    <div class="shadowBtn shadowBtn1"></div>
                    <div class="shadowBtn shadowBtn2"></div>
                    <div class="shadowBtn shadowBtn3"></div>
                    <div class="shadowBtn shadowBtn4"></div>
                </button>
                
            </div>
        </div>
    
        <div class="leftSide">
            <img class="myImage" :src="emailImage" alt="">
        </div>

    </div>

</template>



