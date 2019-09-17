Vue.component('hijo',
{
	
	template:
	`
	
		<div class="py-5 bg-success text-white">	
			<h4>Componente hijo: {{ numero }}</h4>
		</div>
	
	`,
	props: ['numero']
	
})