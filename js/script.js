const app = new Vue ({
    el: '#app',
     data: {
        arrEmails:[],
     }, methods: {
          renderEmails() {
            for (let i=0; i<10; i++) {
                this.arrEmails = []; //Svuoto l'array ad ogni click
                 //API richiesta di una mail
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(axiosEmail => { //Mi restituisce una mail
                    console.log(axiosEmail);
                    this.arrEmails.push(axiosEmail.data.response); //Pusho ogni mail nell'array
                }); 
            }; 
            console.log(this.arrEmails);
         },
     },
 });
  