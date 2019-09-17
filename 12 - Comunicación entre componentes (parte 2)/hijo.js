Vue.component('hijo',
{
	
	template:
	`
	
		<div class="py-5 bg-success text-white">	
			<h4>Componente hijo: {{ numero }}</h4>
			<h4>Nombre: {{ nombre }}</h4>
			<button @click="numero++">+</button>
		</div>
	
	`,
	props: ['numero'],
	data()
	{
		return{
			
			nombre: 'Marc'
			
		}
	},
	mounted(){
		
		this.$emit('nombreHijo',this.nombre)
		
	},
	
})