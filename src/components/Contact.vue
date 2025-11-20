<script setup>

import {Vue3Lottie} from 'vue3-lottie';
import emailAnimation from "../images/animation/Email.json";
import validation from "../images/animation/Validation.json";



import "../style/contact.css";
import { modeStore } from '../store/modeStore';
import { ref } from 'vue';
import axios from 'axios';


const modestore = modeStore();
const currrentMode = modestore.darkMode;

const email = ref("");
const message = ref("");
const showValidationBlock = ref(false);


const sendEmail = async () =>{
    try{
        const data = {
            email: email.value,
            message: message.value
        }
        const sendApi = await axios.post("https://formspree.io/f/mvgllojg", data);
        if(sendApi.status == 200){
            email.value = "";
            message.value = "";
            showValidationBlock.value = true;
            setTimeout(()=>{
                showValidationBlock.value = false
            }, 1500)
        }
    }catch(error){
        if(axios.isAxiosError(error)){
            console.log(error);
            return 1;
        }
        console.log('error in sendEmail function');
    }
}

</script>

<template>
    <div :class="['contact', !currrentMode && 'light']">
        <p class="title">Contant</p>
        <p class="subTitle">If you have a project, feedback, or want to help me grow, I’d love to hear from you
        </p>
        <div class="container">
            <form class="leftSide"  @submit.prevent="sendEmail">
                <div class="validationBlock" v-if="showValidationBlock">
                    <Vue3Lottie :animationData="validation" class="validationAnime"  /> 
                    <p>send email success</p> 
                </div>

                <div class="email">
                    <label for="">Email:</label>
                    <input type="email" v-model="email"  >
                </div>

                <div class="message">
                    <label for="">Message:</label>
                    <textarea name="" id="" v-model="message"></textarea>
                </div>

                <button class="sendBtn" >send</button> 
            </form>

            <div class="rightSide">
                <Vue3Lottie class="animation" :animationData="emailAnimation" :loop="false" :autoPlay="false"  />
            </div>
        </div>
    </div>
</template>
