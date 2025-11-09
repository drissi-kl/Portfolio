<script setup> 
import '../style/formation.css';

const formations = [
    {
        name: "Developer web",
        period: "2023 - 2025",
        school: "OFPPT Bab Tizimi",
        description: "Specialized in distributed systems and advanced full-stack architecture. Final project focused on building a scalable RESTful API using Node.js and MongoDB."
    },
    {
        name: "Electromechanics of automated systems",
        period: "2019 - 2021",
        school: "Tech Grande École",
        description: "Specialized in distributed systems and advanced full-stack architecture. Final project focused on building a scalable RESTful API using Node.js and MongoDB."
    },
    {
        name: "Baccalaureate in Physical and Chemical Sciences",
        period: "2018 - 2019 ",
        school: "Lycee Imam Al Ghazali",
        // description: "Specialized in distributed systems and advanced full-stack architecture. Final project focused on building a scalable RESTful API using Node.js and MongoDB."
    }
]

</script>

<template>
    <div class="formations">
        <h1 class="title">Formations vs. Training</h1>
        <p class="subTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quibusdam nam aspernatur. Tempora iusto voluptas delectus hic nemo et repellendus libero ipsam. Recusandae possimus nulla dignissimos tempore veritatis corrupti delectus modi, maxime quos maiores voluptas labore illo architecto quam, tempora illum dolore odit deserunt, animi tenetur perferendis quis placeat assumenda!</p>

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



