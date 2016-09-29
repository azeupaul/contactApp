let app = new Vue({
	el: "#app",
	data: {
		contacts: [{
			name: "John Doe",
			email: "john.doe@test.fr",
			phone: 699999999
		}],
		contact: {
			name: "",
			email: "",
			phone: 0
		}
	},
	methods: {
		save: function(){
			if(this.contact.name){
				this.contacts.push(this.contact)
				this.contact.name = ""
				this.contact.phone = 0
				this.contact.email = ""
			}
		}
	}
})