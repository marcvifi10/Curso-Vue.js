Vue.component('padre',
{
			
	template:			
	`
		<div class="p-5 bg-dark text-white">
			<h2>COMPONENTE PADRE: {{ numeroPadre }}</h2>
			<button class="btn btn-danger" @click="numeroPadre++">+</button>
			<hijo :numero="numeroPadre"></hijo>
		</div>
				
	`,
	data(){
		
		return{
			
			numeroPadre: 0
			
		}
		
	}
			
})