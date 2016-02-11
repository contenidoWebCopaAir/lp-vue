new Vue({
	el:'body',

	data: {
		sortKey: 'destino',
		reverse: false,
		tarifas: sysCities.tarifas,		// Informacion de origenes y tarifas
		origen: ''						// Origen
		
	},

	methods: {
		setOrigen: function( origen ){
			this.origen = origen;
		},

		sortBy: function( key ){
			this.sortKey = key;
			if( this.sortKey == key ){
				this.reverse = ! this.reverse;
			}
		}
	}



	
});