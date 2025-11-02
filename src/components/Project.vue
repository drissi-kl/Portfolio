<script setup>
import { markRaw, ref } from 'vue';


import '../style/project.css';
import ProjectCard from './ProjectCard.vue';

import Project1 from "../images/project1.png";

import Html from '../images/icons/html.svg';
import Css from '../images/icons/css.svg';
import JavaScript from '../images/icons/javascript.svg';
import Laravel from '../images/icons/laravel.svg';
import React from '../images/icons/react.svg';
import ReactQuery from '../images/icons/reactQuery.svg';
import Vue from '../images/icons/vue.svg';

const technologies = ref([
    {name: 'html', icon: markRaw(Html) , size: 20, clicked: false},
    {name: 'css', icon: markRaw(Css) , size: 20, clicked: false},
    {name: 'javascript', icon: markRaw(JavaScript) , size: 20, clicked: false},
    {name: 'laravel', icon: markRaw(Laravel) , size: 20, clicked: false},
    {name: 'react', icon: markRaw(React) , size: 20, clicked: false},
    {name: 'reactQuery', icon: markRaw(ReactQuery) , size: 20, clicked: false},
    {name: 'vue', icon: markRaw(Vue) , size: 20, clicked: false},
])
const techSelected = ref([]);

const projects = ref([
    {
        title: "Seren", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptate doloremque deleniti. Reprehenderit, veritatis rerum.xxxx",
        image: Project1,
        tech: ['html', 'css', 'javascript']
    }
])
const selectedProjects = ref(projects.value)

const drissi =(e)=>{
    technologies.value = technologies.value.map((item) => {
        if(item.name == e){ return {...item, clicked: !item.clicked} }
        else {return item}
    })
    
    if(techSelected.value.includes(e)){
        techSelected.value = techSelected.value.filter(item => item != e);
    } else {
        techSelected.value.push(e);
    }



    if(techSelected.value.length == 0){
        selectedProjects.value = projects.value;
    }else{
        selectedProjects.value=[]
        projects.value.forEach((project)=>{ 
            let belongs = false;
            project.tech.forEach((t) => {if(techSelected.value.includes(t)){belongs = true}}  )
            
            if(belongs){
                selectedProjects.value.push(project)
            }
        })
    }

    console.log('techSelected', techSelected.value);
    console.log('technologies', technologies.value);
    
}



</script>

<template>
    <div class="projects">
        <p class="title">Projects</p>
        <p class="subTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptate doloremque deleniti. Reprehenderit, veritatis rerum. Sequi ex id fuga enim corporis sunt voluptas laboriosam placeat tenetur veniam. Vitae, reprehenderit esse?</p>


        <div class="selectTech">
            <p class="text">select project by technologie:</p>
            <div class="options">
                <component v-for="tech in technologies" :is="tech.icon" 
                    :class="['icon', tech.clicked && 'clicked']" @click="drissi(tech.name)"
                />
            </div>
        </div>

        <div class="container">
            <ProjectCard 
                v-for = "project in selectedProjects"
                :title="project.title" 
                :description="project.description"
                :image="project.image"   
                :tech="project.tech"
                
            />
            
        </div>
    </div>
</template>

