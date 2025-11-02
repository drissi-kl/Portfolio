<script setup>
import { ref } from "vue";
import dafaultProject from "../images/defaultProject.jpg";

import Html from '../images/icons/html.svg';
import Css from '../images/icons/css.svg';
import JavaScript from '../images/icons/javascript.svg';
import Laravel from '../images/icons/laravel.svg';
import React from '../images/icons/react.svg';
import ReactQuery from '../images/icons/reactQuery.svg';
import Vue from '../images/icons/vue.svg';


const props = defineProps({
    title: {type: String, default: ""},
    description: {type: String, default: ""},
    tech: {type: Array, default: []},
    image: {default: dafaultProject}
})

// console.log(props.tech);
</script>

<template>
    <div class="projectCard">
        <div class="image">
            <img :src="props.image" alt="">
        </div>
        <div class="body">
            <p class="cardTitle">{{ props.title }}</p>
            <p class="cardDescription">{{ props.description }}</p>
            <div class="cardTech">
                <div class="icon" v-for="item in props.tech"  >
                    <Html class="icon" v-if="item=='html'" />  
                    <Css class="icon" v-if="item=='css'" />  
                    <JavaScript class="icon" v-if="item=='javascript'" />  
                    <Laravel class="icon" v-if="item=='laravel'" />  
                    <React class="icon" v-if="item=='react'" />  
                    <Vue class="icon" v-if="item=='vue'" />  
                </div>                
            </div>
        </div>
    </div>
</template>
