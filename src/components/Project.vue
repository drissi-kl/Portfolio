<script setup>
import { computed, markRaw, ref } from 'vue';

import '../style/project.css';
import ProjectCard from './ProjectCard.vue';

import Project1 from "../images/project1.png";
import portfolioImage from '../images/portfolioImage.png';

import Html from '../images/icons/html.svg';
import Css from '../images/icons/css.svg';
import JavaScript from '../images/icons/javascript.svg';
import Laravel from '../images/icons/laravel.svg';
import React from '../images/icons/react.svg';
import ReactQuery from '../images/icons/reactQuery.svg';
import Vue from '../images/icons/vue.svg';

import { projectStore } from '../store/projectStore';
import { modeStore } from '../store/modeStore';

const store = projectStore();

const icons = {Html, Css, JavaScript, Laravel, React, ReactQuery, Vue};



const techSelected = ref([]);

const technologies = computed(() => { return store.technologies});
const projects = computed(()=>{ 
    const prjs = store.projects;
    if(techSelected.value.length == 0){
        return prjs;
    } else {
        return prjs.filter((prj)=> { return prj.tech.some((t)=> { return techSelected.value.includes(t)}  )})
    }
});


const drissi =(e)=>{
    // for show icon as clicker (design)-
    store.clicked(e);
    
    if(techSelected.value.includes(e)){
        techSelected.value = techSelected.value.filter(item => item != e);
    } else {
        techSelected.value.push(e);
    }
}


const modestore = modeStore();
const currrentMode = computed(()=>{ return modestore.darkMode });

</script>

<template>
    <div :class="['projects', !currrentMode && 'light']">
        <p class="title"  >Projects</p>
        <p class="subTitle">
            These projects showcase my passion for coding and continuous learning. Every idea starts small, 
            then grows into something meaningful through experimentation, improvement, and dedication.
        </p>

        <div class="selectTech">
            <p class="text">select project by technologie: {{ techSelected.length }}</p>
            <div class="options">
                <component v-for="tech in technologies" :is="icons[tech.name]" :key="tech.name"
                    :class="['icon', tech.clicked && 'clicked']" @click="drissi(tech.name)"
                />
            </div>
        </div>

        <div class="container">
            <ProjectCard 
                v-for = "project, index in projects"
                :key="project.title"
                :title="project.title" 
                :description="project.description"
                :image="project.image"   
                :tech="project.tech"
                :state = "project.state"
                :bgState = "project.bgState"
            />
        </div>
    </div> 
</template>

