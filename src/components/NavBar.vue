<script setup>

import { computed, onMounted, ref } from 'vue';


import { modeStore } from '../store/modeStore';
import OnMode from "../images/modes/on.svg";
import OffMode from "../images/modes/off.svg";
import '../style/navbar.css';



const selectOpt = ref('');
const links = ref([]);

const drissi = (opt) =>{
    links.value.forEach((item)=>{
        item.classList.remove('active');
        if(item.classList.contains(opt)){
            item.classList.add('active')
        }
    })
}

onMounted(()=>{
    const navLinks = document.querySelectorAll('.middleSide li a');
    const arrayLinks = Array.from(navLinks);
    links.value=arrayLinks;
})

const modestore = modeStore();
const currrentMode = computed(()=>{ return modestore.darkMode });

</script>

<template>
    <div :class="['nav', !currrentMode && 'light']" >
        <div class="leftSide">
            <h1>Developer</h1>
        </div>

        <ul class="middleSide">
            <li><a href="" class="active home" @click.prevent="drissi('home')">Home</a></li>
            <li><a href="" class="formation" @click.prevent="drissi('formation')" >Formations</a></li>
            <li><a href="" class="skill" @click.prevent="drissi('skill')">Skills</a></li>
            <li><a href="" class="project" @click.prevent="drissi('project')">Projects</a></li>
            <li><a href="" class="contactx" @click.prevent="drissi('contactx')">Contact</a></li>
        </ul>

        <div class="rightSide" @click="modestore.switchMode()"  >
            <OnMode class="modeBtn" v-if="currrentMode"  />
            <OffMode class="modeBtn" v-else-if="!currrentMode"  />
        </div>
    </div>

</template>






