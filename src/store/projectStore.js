import { defineStore } from "pinia";
import serenImg from '../images/project1.png';
import portfolioImg from '../images/portfolioImage.png'


const projectStore = defineStore('projectStore',{
    state: ()=>({
        stages: {'Planning': "#4FC3F7", 'Design':"#BA68C8", 'Development':'#66BB6A', 'Testing':'#FFA726', 'Build':'#FFEB3B', 'Deployment':'#1E88E5', 'Maintenance':'#757575'},
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
                title: "Seren", 
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptate doloremque deleniti. Reprehenderit, veritatis rerum.xxxx",
                image: serenImg,
                tech: ['Html', 'Css', 'JavaScript', 'React', 'Laravel', 'ReactQuery'], 
                state: 'Development',
                color: '#1E88E5'
            },
            {
                title: "Portfolio", 
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptate doloremque deleniti. Reprehenderit, veritatis rerum.xxxx",
                image: portfolioImg,
                tech: ['Html', 'Css', 'JavaScript', 'Vue'],
                state: 'Development',
                color: '#1E88E5'
            }
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





