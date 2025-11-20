import { defineStore } from "pinia";
import Project from "../components/Project.vue";

export const skillsStore = defineStore('skillsStore',{
    state: ()=>({
        specify: ['Front-end', 'Back-end', 'DBMS', 'Programming Foundations', 'Packages', 'Tools'],
        stages: {beginner:'Beginner', intermediate:'Intermediate', advanced:'Advanced', professional:'Professional', master:'Master'},
        colors: {beginner: '#4CAF50', intermidiate: '#FFC107', advanced: '#2196F3', professional: '#F44336', master: '#9C27B0'},
        skills:[
            {   
                name:"Html",
                description:"web pages, organize content like text, images, and videos, and create links that connect different parts of a website. With HTML, I can build the backbone of any web project before styling it with CSS or making it interactive with JavaScript.",
                stage: "Professional",
                belongsTo: "Front-end"                
            },
            {   
                name:"Css",
                description:"With CSS, I design clean and responsive interfaces using Flexbox, Grid, and media queries. I style colors, layouts, and animations to create modern and dynamic user experiences.",
                stage:"Advanced",
                belongsTo: "Front-end"                
            },
            {   
                name:"JavaScript",
                description:"With JavaScript, I bring websites to life by adding interactivity and dynamic features. I use it to handle user actions, update page content in real time, and connect the frontend with backend APIs. I also work with modern ES6+ features to write clean, efficient code that improves both performance and user experience.",
                stage:"Professional",
                belongsTo: "Front-end"                
            },
            {   
                name:"React",
                description:"With React, I build fast and dynamic user interfaces using reusable components and efficient state management. I create interactive applications that update smoothly without reloading the page. I also use hooks and modern tools to keep my code organized, scalable, and easy to maintain.",
                stage:"Professional",
                belongsTo: "Front-end"                
            },
            {   
                name:"ReactQuery",
                description:"With React Query, I manage server state efficiently in React applications. I fetch, cache, and synchronize data seamlessly, handle loading and error states automatically, and ensure that my interfaces stay fast, responsive, and up-to-date with minimal code.",
                stage:"Professional",
                belongsTo: ""                
            },
            {   
                name:"React Hook Form",
                description:"With React Hook Form, I build efficient and scalable forms in React with minimal re-renders. I handle form validation, input management, and error handling seamlessly, making user interactions smooth and reliable while keeping the code clean and maintainable.",
                stage:"Professional",
                belongsTo: "Front-end"                
            },
            {   
                name:"Vue",
                description:"With Vue.js, I create responsive and dynamic web interfaces using its powerful component-based structure. I manage data efficiently with reactivity and computed properties, and I use tools like Pinia or Vuex for state management. Vue allows me to build clean, scalable, and fast applications with an elegant and flexible design.",
                stage:"Advanced",
                belongsTo: "Front-end"                
            },
            {   
                name:"Php",
                description:"With PHP, I develop dynamic and server-side web applications. I handle form submissions, manage databases, and build secure backends that interact seamlessly with frontend interfaces. PHP allows me to create robust and scalable web solutions efficiently.",
                stage:"Professional",
                belongsTo: "Back-end"                
            },
            {   
                name:"Laravel",
                description:"With Laravel, I build modern and secure web applications using its elegant MVC architecture. I manage routing, authentication, and database interactions efficiently, and I create APIs and backend services that are scalable, maintainable, and easy to integrate with frontend applications.",
                stage:"Professional",
                belongsTo: "Back-end"                
            },
            {   
                name:"WordPress",
                description:"With WordPress, I create dynamic and customizable websites using its powerful CMS features. I develop themes and plugins, manage content efficiently, and build responsive, user-friendly websites tailored to client needs without compromising performance or scalability.",
                stage:"Beginner",
                belongsTo:"Back-end"
            },
            {   
                name:"NodeJs",
                description:"With Node.js, I build fast and scalable server-side applications using JavaScript. I handle APIs, manage databases, and implement backend logic efficiently, enabling real-time data processing and seamless communication between frontend and backend.",
                stage:"Advanced",
                belongsTo: "Back-end"                
            },
            {   
                name:"Express",
                description:"With Express.js, I create fast and lightweight backend applications and APIs using Node.js. I handle routing, middleware, and server logic efficiently, enabling seamless communication between the frontend and database while keeping the code clean and maintainable.",
                stage:"Advanced",
                belongsTo: "Back-end"                
            },
            {   
                name:"Mongoose",
                description:"With Mongoose, I interact with MongoDB databases efficiently in Node.js applications. I define schemas, enforce data validation, and perform CRUD operations easily, making database management structured, reliable, and scalable.",
                stage:"Advanced",
                belongsTo: "Package"                
            },
            {   
                name:"Python",
                description:"With Python, I write clean and efficient code for a wide range of applications. I use it for backend development, automation scripts, data manipulation, and problem-solving, leveraging its simplicity and versatility to build robust and scalable solutions.",
                stage:"Advanced",
                belongsTo: "Programming Foundations"                
            },
            {   
                name:"Django",
                description:"With Django, I build secure and scalable web applications using Python. I manage databases, handle authentication, and create RESTful APIs efficiently, while leveraging Django’s built-in features to speed up development and maintain clean, maintainable code.",
                stage:"Intermediate",
                belongsTo: "Back-end"                
            },
            {   
                name:"C",
                description:"rem ea in architecto praesentium a distinctio dolorum voluptates, accusamus repellat saepe magni quas numquam corrupti officia et veritatis unde. Numquam,",
                stage:"Beginner",
                belongsTo: "Programming Foundations"                
            },
            {   
                name:"MongoDB",
                description:"rem ea in architecto praesentium a distinctio dolorum voluptates, accusamus repellat saepe magni quas numquam corrupti officia et veritatis unde. Numquam,",
                stage:"Advanced",
                belongsTo: "DBMS"                
            },
            {   
                name:"MySQL",
                description:"rem ea in architecto praesentium a distinctio dolorum voluptates, accusamus repellat saepe magni quas numquam corrupti officia et veritatis unde. Numquam,",
                stage:"Professional",
                belongsTo: "DBMS"                
            },
            {   
                name:"Docker",
                description:"rem ea in architecto praesentium a distinctio dolorum voluptates, accusamus repellat saepe magni quas numquam corrupti officia et veritatis unde. Numquam,",
                stage:"Beginner",
                belongsTo: "Tools"                
            },
            {   
                name:"Postman",
                description:"rem ea in architecto praesentium a distinctio dolorum voluptates, accusamus repellat saepe magni quas numquam corrupti officia et veritatis unde. Numquam,",
                stage:"Advanced",
                belongsTo: "Tools"                
            }
        ],

    }),

    getters: {

    },

    actions: {
        selectSkills(s='All'){
            if(s == 'All'){
                return this.skills;
            }
            const c=this.skills.filter((e) => { return e.belongsTo.includes(s) });
            return c;
        }
    }
})