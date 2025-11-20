<script setup> 
import { computed } from 'vue';
import { modeStore } from '../store/modeStore';
import '../style/formation.css';

const formations = [
    {
        name: "Diploma in Digital Development – Web Full Stack Option",
        level: "Specialized Technician",
        period: "2023 - 2025",
        school: "OFPPT Bab Tizimi",
        description: `During this program, I gained comprehensive training in both front-end and back-end web development.
                    The coursework focused on mastering modern technologies, including HTML, CSS, JavaScript, PHP, Python, 
                    MySQL, React.js, Laravel, and MongoDB, enabling me to build dynamic, responsive, and efficient web applications 
                    from start to finish.`
    },
    {
        name: "Diploma in Electromechanics of Automated Systems",
        period: "2019 - 2021",
        school: "OFPPT Agouray Road",
        description: `During this program, I received hands-on training in both domestic and industrial electricity, focusing on power and 
        control circuits for operating three-phase motors. I learned how to design and implement variable-speed motor control systems, as well 
        as to work with programmable logic controllers (PLCs) for automation processes. The formation also included practical experience in 
        building and maintaining pneumatic and hydraulic systems, integrating electrical and mechanical components to create efficient automated 
        solutions.`
    },
    {
        name: "Baccalaureate in Physical and Chemical Sciences",
        period: "2018 - 2019 ",
        school: "Lycee Imam Al Ghazali",
        // description: "Specialized in distributed systems and advanced full-stack architecture. Final project focused on building a scalable RESTful API using Node.js and MongoDB."
    }
];


const modestore = modeStore();
const currrentMode = computed(()=>{ return modestore.darkMode });

</script>

<template>
    <div :class="['formations', !currrentMode && 'light']">
        <h1 class="title">Formations vs. Training</h1>
        <p class="subTitle">
            Each formation I completed helped me understand new concepts, explore technologies, and grow with 
            confidence. This learning path continues to shape the developer I am becoming.
        </p>

        <div class="container">
            <div class="formation" v-for="formation in formations" >
                <div class="dote">
                    <!-- <div></div> -->
                </div>
                <div class="informaiton">
                    <p class="name">{{formation.name }}</p>
                    <p class="period">{{formation.period }}</p>
                    <p class="school">{{formation.school }}</p>
                    <p class="description">{{formation.description }}</p>
                </div>

            </div>
            
        </div>
    </div>
    
    
    
    
    
</template>



