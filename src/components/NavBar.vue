<script setup>
    import { onMounted, ref } from 'vue';
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


    


</script>

<template>
    <div class="nav">
        <div class="leftSide">
            <h1>Developer</h1>
        </div>

        <ul class="middleSide">
            <li><a href="" class="active home" @click.prevent="drissi('home')">Home</a></li>
            <li><a href="" class="formation" @click.prevent="drissi('formation')" >Formations</a></li>
            <li><a href="" class="competence" @click.prevent="drissi('competence')">Competences</a></li>
            <li><a href="" class="project" @click.prevent="drissi('project')">Projects</a></li>
            <li><a href="" class="contactx" @click.prevent="drissi('contactx  ')">Contact</a></li>
        </ul>

        <div class="rightSide">
            <button>☀️</button>
        </div>
    </div>

</template>






