<script setup>
    import '../style/competance.css';
    import CardCmp from './CardCmp.vue';

    


</script>

<template>
    <div class="competance">
        <p class="title">Competance</p>
        <p class="subTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos hic labore fuga esse consectetur 
            excepturi debitis est in architecto. Voluptatum nesciunt vel impedit voluptas esse quibusdam 
            dolore rem ea in architecto praesentium a distinctio dolorum voluptates, accusamus repellat saepe 
            magni quas numquam corrupti officia et veritatis unde. Numquam, provident nostrum?
        </p>
        <div class="selectTech">
            <div class="all">All</div>
            <div class="fronEnd">Front-end</div>
            <div class="backEnd">Back-end</div>
            <div class="sbms">DBMS</div>
        </div>
        <div class="content">
            <CardCmp 
                title="Html" 
                content="rem ea in architecto praesentium a distinctio dolorum voluptates, accusamus repellat saepe magni quas numquam corrupti officia et veritatis unde. Numquam," 
                stage="Advanced"
            />
            <CardCmp 
                title="Css" 
                content="rem ea in architecto praesentium a distinctio dolorum voluptates, accusamus repellat saepe magni quas numquam corrupti officia et veritatis unde. Numquam," 
                stage="Advanced"
                />
            <CardCmp 
                title="JavaScript" 
                content="rem ea in architecto praesentium a distinctio dolorum voluptates, accusamus repellat saepe magni quas numquam corrupti officia et veritatis unde. Numquam," 
                stage="Professional"
                />
            <CardCmp 
                title="React" 
                content="rem ea in architecto praesentium a distinctio dolorum voluptates, accusamus repellat saepe magni quas numquam corrupti officia et veritatis unde. Numquam," 
                stage="Master"
                />
          
        </div>
    </div>
</template>

<style>
.htmlIcon{
    width: 24px;
    height: 24px;
    fill: red;
}
</style>


