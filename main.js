const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants:[
                {id:100,color:'red'},
                {id:101,color:'yellow'}
            ],
            sizes:[
               
                    { id: 1, size: 'Small' },
                    { id: 2, size: 'Medium' },
                    { id: 3, size: 'Large' },
                    { id: 4, size: 'XL' }     
            ]
        }
    }
})
