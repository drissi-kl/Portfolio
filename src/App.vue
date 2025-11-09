<script setup>


import './style/app.css';
import 'primeicons/primeicons.css'


import NavBar from './components/NavBar.vue';
import Header from './components/Header.vue';
import Competance from './components/Competance.vue';
import Project from './components/Project.vue';
import Formation from './components/Formation.vue';
import { modeStore } from './store/modeStore';
import { computed } from 'vue';
import Contact from './components/Contact.vue';
import Footer from './components/footer.vue';

const store = modeStore();
const currrentMode = computed(()=>{ return store.darkMode });

</script>

<template>
    <div :class="['portfolio', !currrentMode && 'light']">
        <NavBar />
        <Header />
        <Formation />
        <Competance />
        <Project />
        <Contact />
        <Footer />
    </div>

   
</template>


