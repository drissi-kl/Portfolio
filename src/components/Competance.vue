<script setup>
import '../style/competance.css';
import CardCmp from './CardCmp.vue';

import { skillsStore } from '../store/competanceStore';
import { computed, ref } from 'vue';
import { modeStore } from '../store/modeStore';

const store = skillsStore();

const skills = ref(store.selectSkills().slice(0, 4));
const showMore = ref(false);
const showMoreBtn = ref(true);  

const categorySelected = ref('All');
// console.log('skills', skills.value)

const selectCategory = (c)=>{
    categorySelected.value = c;
    if(showMore.value){
        skills.value = store.selectSkills(c);
    } else {
        skills.value = store.selectSkills(c).slice(0,4);
    }

    // console.log([...skills.value].length);
    
    if(store.selectSkills(c).length>4){
        showMoreBtn.value=true;
    }else{
        showMoreBtn.value=false;
        showMore.value = false;
    }
}


const moreSkills = computed(()=>{
    // console.log('sdf')
    showMore.value = !showMore.value;
    // console.log(showMore.value);
    
    if(showMore.value){
        skills.value = store.selectSkills(categorySelected.value);
    }else{
        skills.value = store.selectSkills(categorySelected.value).slice(0,4);
    }
})


const modestore = modeStore();
const currrentMode = computed(()=>{ return modestore.darkMode });

</script>

<template>
    <div :class="['competance', !currrentMode && 'light']">
        <p class="title">Skills</p>
        <p class="subTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos hic labore fuga esse consectetur 
            excepturi debitis est in architecto. Voluptatum nesciunt vel impedit voluptas esse quibusdam 
            dolore rem ea in architecto praesentium a distinctio dolorum voluptates, accusamus repellat saepe 
            magni quas numquam corrupti officia et veritatis unde. Numquam, provident nostrum?
        </p>
        <div class="selectTech">
            <div :class="[categorySelected == 'All'?'active':'' ]" @click="selectCategory('All')">All()</div>
            <div :class="[categorySelected == 'Front-end'?'active':'' ]" @click="selectCategory('Front-end')">Front-end</div>
            <div :class="[categorySelected == 'Back-end'?'active':'' ]" @click="selectCategory('Back-end')">Back-end</div>
            <div :class="[categorySelected == 'DBMS'?'active':'' ]" @click="selectCategory('DBMS')">DBMS</div>
            <div :class="[categorySelected == 'Tools'?'active':'' ]" @click="selectCategory('Tools')">Tools</div>
            <div :class="[categorySelected == 'Programming Foundations'?'active':'' ]" @click="selectCategory('Programming Foundations')">Programming Foundations</div>
            <div :class="[categorySelected == 'Package'?'active':'' ]" @click="selectCategory('Package')">Package</div>
        </div>
        <div class="content">
            <CardCmp v-for="skill in skills"
                :name="skill.name" 
                :description="skill.description" 
                :stage="skill.stage"
                :belongsto="skill.belongsTo"
            />
            
        </div>
        <div class="moreBtn"  >
            <button v-if="showMoreBtn" @click="moreSkills">
                {{ showMore?"Less":"More" }} 
            </button>
        </div>
    </div>
</template>




