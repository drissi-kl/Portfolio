<script setup>
import { computed, ref } from "vue";
import dafaultProject from "../images/defaultProject.jpg";

import Html from '../images/icons/html.svg';
import Css from '../images/icons/css.svg';
import JavaScript from '../images/icons/javascript.svg';
import Laravel from '../images/icons/laravel.svg';
import React from '../images/icons/react.svg';
import ReactQuery from '../images/icons/reactQuery.svg';
import Vue from '../images/icons/vue.svg';
import { modeStore } from "../store/modeStore";




const props = defineProps({
    title: {type: String, default: ""},
    description: {type: String, default: ""},
    tech: {type: Array, default: []},
    image: {default: dafaultProject},
    state: {type: String, default: "Planning"},
    bgState: {type: String, default: "#4FC3F7"}
})

const icons = {Html, Css, JavaScript, Laravel, React, ReactQuery, Vue};


const modestore = modeStore();
const currrentMode = computed(()=>{ return modestore.darkMode });


</script>

<template>
    <div :class="['projectCard', !currrentMode && 'light']">
        <div class="image">
            <div 
                class="state"
                :style="{'background-color': props.bgState }"
                >{{props.state}}</div>
            <img :src="props.image" alt="">
        </div>
        <div class="body">
            <div class="top">
                <p class="cardTitle">{{ props.title }}</p>
                <p class="cardDescription">{{ props.description }}</p>
            </div>
            <div class="cardTech" >
                <component class="icon" v-for="icon in props.tech" :is="icons[icon]" />
            </div>
        </div>
    </div>
</template>
