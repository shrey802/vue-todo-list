// const utask = document.querySelector(".texting");
const app = Vue.createApp({
    data(){
        return {
            tasks: [],
            todo: '',
            edit: false,
            selectedTodo: null
        }
    },
    methods: {
        store(){
            this.tasks.push(this.todo)
            this.todo = ''
        },
        // update(){
        //     this.tasks.splice(this.selectedTodo, 1, this.todo)
        //     this.todo = ''
        //     this.edit = false;
        // },
        remove(index){
            this.tasks.splice(index, 1);
        }
        // },
        // edit(index, todo){
        //     this.edit = true;
        //     this.todo = todo;
        //     this.selectedTodo = index;
        // }
    }
})
app.mount("#app");