<script setup>
import '../style/project.css';
import ProjectCard from './ProjectCard.vue';

import Project1 from "../images/project1.png";
import { ref } from 'vue';

import Html from '../images/icons/html.svg';
import Css from '../images/icons/css.svg';
import JavaScript from '../images/icons/javascript.svg';
import Laravel from '../images/icons/laravel.svg';
import React from '../images/icons/react.svg';
import ReactQuery from '../images/icons/reactQuery.svg';
import Vue from '../images/icons/vue.svg';

const showTechList = ref(false);
const techSelected = ref("");
const searchTech = (e) =>{
    console.log(e)
    // techSelected.value = e
}
const drissi = 



</script>

<template>
    <div class="projects">
        <p class="title">Projects</p>
        <p class="subTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptate doloremque deleniti. Reprehenderit, veritatis rerum. Sequi ex id fuga enim corporis sunt voluptas laboriosam placeat tenetur veniam. Vitae, reprehenderit esse?</p>

        <div class="selectTech">
            <input type="text" class="selectTechInput" 
                v-model="techSelected"
                @blur="()=>{showTechList = false}"
                @focus="()=>{showTechList = true}"
            >

            <div class="tachList" v-if="showTechList">
                <Html class="icon html" v-if="'html'.includes(techSelected)" @click="drissi" />
                <Css class="icon css" v-if="'css'.includes(techSelected)" @click="drissi" />
                <JavaScript class="icon javascript" v-if="'javascript'.includes(techSelected)" />
                <Laravel class="icon laravel" v-if="'laravel'.includes(techSelected)" />
                <React class="icon react" v-if="'react'.includes(techSelected)" />
                <ReactQuery class="icon react query" v-if="'react query'.includes(techSelected)" />
                <Vue class="icon vue" v-if="'vue'.includes(techSelected)" />
            </div>
        </div>

        <div class="container">
            <ProjectCard 
                title="PortFolio" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptate doloremque deleniti. Reprehenderit, veritatis rerum.xxxx"
                :image="Project1"   
                :tech="['html', 'css', 'javascript', 'vue']"
                v-if="['html', 'css', 'javascript', 'vue'].join(' ').includes(techSelected)"
            />
            <ProjectCard 
                title="PortFolio" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptate doloremque deleniti. Reprehenderit, veritatis rerum.xxxx"
                :image="Project1"   
            />
            <ProjectCard 
                title="PortFolio" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptate doloremque deleniti. Reprehenderit, veritatis rerum.xxxx"
                :image="Project1"   
            />
            <ProjectCard 
                title="PortFolio" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptate doloremque deleniti. Reprehenderit, veritatis rerum.xxxx"
                :image="Project1"   
            />
        </div>
    </div>
</template>

