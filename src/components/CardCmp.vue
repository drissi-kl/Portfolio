<script setup>
import Html from '../images/icons/html.svg'
import Css from '../images/icons/css.svg'
import JavaScript from '../images/icons/javascript.svg'
import Laravel from '../images/icons/laravel.svg'
import React from '../images/icons/react.svg'
import ReactQuery from '../images/icons/reactQuery.svg'
import Vue from '../images/icons/vue.svg'

const props = defineProps({
    title: {type: String, default: ''},
    content: {type: String, default: ""},
    stage: {type: String, default: "Beginner"}
})



</script>

<template>
    <div class="cardCmp">
        <div class="headerCard" >
            <Html v-if="title=='Html'" class="icon" />
            <Css v-else-if="title=='Css'" class="icon" />
            <JavaScript v-else-if="title == 'JavaScript'"  class="icon" />
            <Laravel v-else-if="title == 'Laravel'"  class="icon" />
            <React v-else-if="title == 'React'"  class="icon" />
            <ReactQuery v-else-if="title == 'ReactQuery'"  class="icon" />
            <Vue v-else-if="title == 'Vue'"  class="icon" />


            {{ props.title }}
        </div>
        <div class="bodyCard">
            <p class="text">{{ props.content }}</p>
            <p  class="stage"  
                :style="[props.stage=='Beginner'?{backgroundColor:'#4CAF50'}
                :props.stage=='Intermediate'?{backgroundColor:'#4CAF50'}
                :props.stage=='Advanced'?{backgroundColor:'#9C27B0'}
                :props.stage=='Professional'?{backgroundColor:'#FF9800'}
                :props.stage=='Master'?{backgroundColor:'#F44336'}
                :{}]"
            >
                {{ props.stage }}
            </p>
        </div>
    </div>
</template>
















