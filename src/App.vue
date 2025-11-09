<script setup>


import './style/app.css';
import 'primeicons/primeicons.css'


import NavBar from './components/NavBar.vue';
import Header from './components/Header.vue';
import Competance from './components/Competance.vue';
import Project from './components/Project.vue';
import Formation from './components/Formation.vue';



</script>

<template>
    <div class="portfolio">
        <NavBar />
        <Header />
        <Formation />
        <Competance />
        <Project />
    </div>

   
</template>


