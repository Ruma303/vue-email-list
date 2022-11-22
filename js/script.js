const app = new Vue ({
    el: '#app',
     data: {
         email: '',
         arrEmails:[],
     }, methods: {
          renderEmails() {
            for (let i=0; i<10; i++) {
                 //API richiesta di una mail
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                 .then(axiosEmail => { //Mi restituisce una mail
                    console.log(axiosEmail);
                    this.email = axiosEmail.data.response; //Inserisco la mail nella variabile
                    this.arrEmails.push(axiosEmail.data.response); //Pusho la mail nell'array
                 }); 
            }; 
            console.log(this.arrEmails);
            // this.arrEmails[''];
         },
     },
 });
 