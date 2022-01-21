new Vue({
    el: "#app",
    data: {
        currentIndex: 0,
        inputMessage: '',
        searchContact: '',
        modal: null,
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },

            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },

            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },

            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        userInfo: {
            userName: 'Nome Utente',
            userAvatar: 'avatar_io.jpg',
        },


    },
    
    methods: {
        showAvatar: function (contact) {
            return `img/avatar${contact.avatar}.jpg`
        },
        // funzione nel click
        currentContact: function (i) {
            this.currentIndex = i;
        },
        // funzione nell'input
        sendMessage: function (contact) {
            // evita di mandare messaggi vuoti
            if (this.inputMessage !== '') {
                // push all'interno dell'array messages di ciascun oggetto 
                contact.messages.push({
                    date: getDate(),
                    text: this.inputMessage,
                    status: 'sent'
                })
            }
            // svuoto il placeholder dell'input
            this.inputMessage = '';
            // risposta automatica
            setTimeout(() => {
                this.contacts[this.currentIndex].messages.push({
                    date: getDate(),
                    text: 'Daje',
                    status: 'received'
                });
            }, 1000);
        },
        getDate: function () {
          return dayjs().format('DD/MM/YYYY HH:mm:ss');
        },
        deleteMessage: function (index) {
            this.contacts[this.currentIndex].messages.splice(index, 1);
        },
        // funzione che ritorna la data/ora dell'ultimo messaggio in chat
        lastSeen: function(index) {  
            return this.contacts[index].messages.length -1;
        },
        // funzione che apre/chiude il dropdown menu
        dropdownMenu: function(index) {
            this.modal === index ? false : this.modal = index;
        },
         
    },
    // computed: {
    //     filteredContacts() {
    //         return this.contacts.filter(contact => {
    //             return contact.name.toLowerCase().includes(this.searchContact.toLowerCase());
    //         })
    //     }
    // }
})