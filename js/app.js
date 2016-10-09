let app = new Vue({
	el: "#app",
	data: {
		contacts: [{
			name: "John Doe",
			email: "john.doe@test.fr",
			phone: 699999999
		}],
		addContact: {
			name: "",
			email: "",
			phone: 0
		}
	},
	methods: {
		save: function(){
			if(this.addContact.name){
				this.contacts.push({
					name: this.addContact.name,
					email: this.addContact.email,
					phone: this.addContact.phone
				})
				this.addContact.name = ""
				this.addContact.phone = 0
				this.addContact.email = ""
			}
		}
	}
})