Vue.config.devtools = true;

new Vue ({

	el: '#page-container',

	data: {
		message: '',
		inputElements: []
	},

	methods: {
		pushInput: function () {
			this.inputElements.push(this.message);
			this.message = '';
		},

		deleteNote: function (indexElement) {
			this.inputElements = this.inputElements.filter((element, index) => {
				return index !== indexElement;
			});
		}
	}
});
