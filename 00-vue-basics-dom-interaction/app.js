const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish this course and learn Vue!',
            vueLink: 'https://vuejs.org/'
        };
    }
});

app.mount('#user-goal');