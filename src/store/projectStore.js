import { defineStore } from "pinia";
import serenImg from '../images/serenLogo.png';
import portfolioImg from '../images/portfolio.png'


const projectStore = defineStore('projectStore',{
    state: ()=>({
        stages: {'Planning': "#4FC3F7", 'Design':"#BA68C8", 'Development':'#66BB6A', 'Testing':'#FFA726', 'Build':'#FFEB3B', 'Deployment':'#1E88E5', 'Maintenance':'#757575'},
        statesPrt:{
            Planning: "#4FC3F7",
            Design: "#BA68C8",
            Development: "#4DB6AC",
            Testing: "#FFB74D",
            Deployment: "#81C784",
            Maintenance: "#F06292"
        },
        technologies:[
            {name: 'Html' , size: 20, clicked: false},
            {name: 'Css' , size: 20, clicked: false},
            {name: 'JavaScript', size: 20, clicked: false},
            {name: 'Laravel', size: 20, clicked: false},
            {name: 'React', size: 20, clicked: false},
            {name: 'ReactQuery', size: 20, clicked: false},
            {name: 'Vue', size: 20, clicked: false}
        ],

        projects:[
            {
                title: "Portfolio", 
                description: "This portfolio is a window into my world as a developer.From learning new technologies to building real projects, every step has helped me grow.Explore my work, skills, and experiences — and see how I turn ideas into functional and meaningful solutions.",
                image: portfolioImg,
                tech: ['Html', 'Css', 'JavaScript', 'Vue'],
                state: 'Deployment',
                bgState: "#81C784",
                // goTo: ""
            },
            {
                title: "Seren", 
                description: `An employee management app that allows staff to check in/out, track work hours, send messages to the manager, 
                    and manage salaries and positions. Built with React, React Query, and React Hook Form on the frontend, and Laravel on 
                    the backend for reliable performance.`,
                image: serenImg,
                tech: ['Html', 'Css', 'JavaScript', 'React', 'Laravel', 'ReactQuery'], 
                state: 'Development',
                bgState: "#4DB6AC",
            },
        ]


    }),

    getters: {
       
    },

    actions: {
        clicked(name){
            this.technologies.forEach((project => {
                if(project.name == name){ project.clicked = !project.clicked}
            }))



            console.log(this.technologies)
        }
    }
})



export {projectStore};





