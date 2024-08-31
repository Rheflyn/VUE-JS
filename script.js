const app = Vue.createApp({
    template: "<h1>Mabuhay!</h1>"
});
const app2 = Vue.createApp({
    data() {
        return {
            title:'Harry Potter',
            author:'J.K. Rowling',
            age:31,
            provinces: [
                {name:'Pampanga',capital:'Sampernandu'},
                {name:'Tarlac', capital: 'BamBan'},
                {name:'House', capital: 'Porac'},
                {name:'Angeles', capital: 'City'}, 

            ]
            
        }
    }
})
app.mount('#app');
app2.mount('#app2');

