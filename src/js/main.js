const app = new Vue({
    el: "#app",

    data: {
    	total: 13
    },

    methods: {
    	incrementar() {
    		this.total ++
    	},
    	diminuir() {
    		this.total --
    	},
    	getAPI() {
    		fetch("http://172.21.255.246:8002/api/LIGA/USUARIO/All")
    		.then( response => response.json() )
    		.then( json => console.log(json) );
    	}
    }
});

// apo https://api.iextrading.com/1.0/stock/aapl/quote