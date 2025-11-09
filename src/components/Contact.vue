<script setup>

import {Vue3Lottie} from 'vue3-lottie';
import emailAnimation from "../images/animation/Email.json";




import "../style/contact.css";
import { modeStore } from '../store/modeStore';


const modestore = modeStore();
const currrentMode = modestore.darkMode;


</script>

<template>
    <div :class="['contact', !currrentMode && 'light']">
        <p class="title">Contant</p>
        <p class="subTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam et eius, eos quos provident culpa ullam deleniti, temporibus harum commodi, incidunt possimus aliquid assumenda repellat non? Est, fugiat id!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam et eius, eos quos provident culpa ullam deleniti, temporibus harum commodi, incidunt possimus aliquid assumenda repellat non? Est, fugiat id!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam et eius, eos quos provident culpa ullam deleniti, temporibus harum commodi, incidunt possimus aliquid assumenda repellat non? Est, fugiat id!
        </p>
        <div class="container">
            <div class="leftSide">
                <div class="email">
                    <label for="">Email:</label>
                    <input type="email">
                </div>

                <div class="message">
                    <label for="">Message:</label>
                    <textarea name="" id=""></textarea>
                </div>
            </div>

            <div class="rightSide">
                <Vue3Lottie class="animation" :animationData="emailAnimation"  />
            </div>
        </div>
    </div>
</template>
