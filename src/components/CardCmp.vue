<script setup>
import Html from '../images/icons/Html.svg'
import Css from '../images/icons/Css.svg'
import JavaScript from '../images/icons/JavaScript.svg'
import Laravel from '../images/icons/Laravel.svg'
import React from '../images/icons/React.svg'
import ReactQuery from '../images/icons/ReactQuery.svg'
import Vue from '../images/icons/vue.svg'
import C from '../images/icons/C.svg'
import Django from '../images/icons/Django.svg'
import Docker from '../images/icons/Docker.svg'
import Express from '../images/icons/Express.svg'
import MongoDB from '../images/icons/MongoDB.svg'
import Mongoose from '../images/icons/Mongoose.svg'
import MySQL from '../images/icons/MySQL.svg'
import NodeJs from '../images/icons/NodeJs.svg'
import Php from '../images/icons/PHP.svg'
import Python from '../images/icons/Python.svg'
import WordPress from '../images/icons/WordPress.svg'
import Postman from '../images/icons/Postman.svg'
import ReactHookForm from '../images/icons/ReactHookForm.svg'


const props = defineProps({
    name: {type: String, default: ''},
    description: {type: String, default: ""},
    stage: {type: String, default: "Beginner"},
    belongsTo: {type: String, default: 'language'}
})

const icons = {
    Html, Css, JavaScript, Laravel, React, ReactQuery, Vue, C, Django, "React Hook Form":ReactHookForm,
    Docker, Express, MongoDB, Mongoose, MySQL, NodeJs, Php, Python, WordPress, Postman
}



</script>

<template>
    <div class="cardCmp">
        <div class="headerCard" >
            <component :is="icons[name]" class="icon"  />
            {{ props.name }}
        </div>
        <div class="bodyCard">
            <p class="text">{{ props.description }}</p>
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
















