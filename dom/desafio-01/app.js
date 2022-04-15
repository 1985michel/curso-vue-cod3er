new Vue({

    el: '#desafio',
    data: {
        nome: 'Michel',
        idade: '37',
        srcImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUQK_nS49i19D9awF8tpvYOBSgdW_pDk_4681H3y5JsMS26o9gARspCMGIa4h8QyN40U&usqp=CAU'
    },
    methods: {
        idadeMultiplicada: function (multiplicador) {
            return this.idade * multiplicador
        },
        getRandom: function () {
            return Math.random()
        }

    }

})