new Vue({
    el: '#app',
    data(){
        return{
            title: '',
            time: 0,
            courser: [
                
            ]
        }
    },
    computed:{
        timeCoursers(){
            return this.courser.reduce((acc, cur) => acc + + cur.time, 0);
        }
    },
    methods:{
        addCourse(){
            this.courser.push({
                title: this.title,
                time: Number(this.time)                
            })

            this.time = 0;
            this.title = '';
        },
        
    }
})