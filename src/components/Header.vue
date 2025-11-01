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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. At perspiciatis ipsa voluptatem dolorum 
                    sapiente? Aperiam alias molestias quo, quaerat doloribus voluptatibus, quia libero eveniet 
                    architecto minima ut molestiae reprehenderit eum illo itaque temporibus animi culpa! Atque 
                    reprehenderit non nulla dignissimos delectus eum sapiente nobis quidem illo beatae cumque 
                    sequi dolore voluptatem fugit vero, nam tempore repellat quaerat esse soluta vitae. Illum, 
                    itaque. Sint atque quia explicabo adipisci numquam quae odit fugit rerum voluptates, ea 
                    exercitationem iusto, magni facere ab assumenda maiores dignissimos incidunt quam maxime 
                    illo placeat. Fugit eos dolorum nesciunt ad. A accusantium aspernatur atque. Quo id atque illum.
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



