import { defineStore } from "pinia"

const modeStore = defineStore("modeStore", {
    state:()=>({
        darkMode: true
    }),

    actions:{
        switchMode(){
            this.darkMode = !this.darkMode;
            console.log('mode', this.darkMode);
        }
    }
})

export {modeStore};