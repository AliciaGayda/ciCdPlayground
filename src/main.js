import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'Alicia Gayda',
		// In the following fields you can either give a single string,
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'automated testing',
			'build & deployment pipelines',
			'pull request policies / reviewing',

		],
		// Which CI/CD tools do you use in your project?
		tools: 'Azure DevOps',
		// What do you want to learn in this workshop? 
		expectations: [
			'For me, CI/CD is still very abstract. I hope that my knowledge of it will become more concrete.'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'dancing',
			'acrobatics',
			'painting'
		]
	}
});
