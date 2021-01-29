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
		}
	}
});
