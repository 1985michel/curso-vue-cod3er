const mv = new Vue({
    el: '#app',
    data: {

        ganhou: false,
        perdeu: false,
        log: [],
        ataquesEspeciais: 3,
        fugas: 3,

        nivelJogador: 1,
        nivelMonstro: 1,
        poderJogador: 12,
        poderMonstro: 16,

        sangueJogadorPercentual: 100,
        sangueMonstroPercentual: 100,

        sangueJogador: 100,
        sangueMonstro: 200,

        sangueJogadorOriginal: 100,
        sangueMonstroOriginal: 200,

        iop: true,
        eni: false,
        elio: false,
        modo: 'ataque'

    },
    computed: {
        tamanhoJogador() {
            /* return 200 + (this.nivelJogador * 50) + 'px'; */
            return 300 + 'px';
        },
        tamanhoMonstro() {
            //return 200 + (this.nivelMonstro * 50) + 'px';
            let tamanho = 300 - ((this.nivelJogador - this.nivelMonstro) * 50);
            if (tamanho < 50) {
                return 50 + 'px'
            } else {
                return tamanho + 'px'
            }
        },
        tamanhoSpan() {
            let tamanho = 300 - ((this.nivelJogador - this.nivelMonstro) * 50);
            if (tamanho < 50) {
                return 250 + 'px'
            } else {
                return (300 - tamanho) + 'px'
            }
        }
    },
    methods: {

        ativarEspecial() {
            this.modo = 'especial';
            this.iop = false;
            this.eni = false;
            this.elio = true;
        },
        ativarAtaque() {
            this.modo = 'ataque';
            this.iop = true;
            this.eni = false;
            this.elio = false;
        },
        ativarCura() {
            this.modo = 'cura';
            this.iop = false;
            this.eni = true;
            this.elio = false;

        },
        atualizarPoderJogador() {
            this.poderJogador = this.poderJogador + (this.nivelJogador * 5);
            //this.sangueJogador = 90 + (20 * this.nivelJogador);
            this.sangueJogador = this.sangueJogadorOriginal + (20 * this.nivelJogador);
        },
        atualizarPoderMonstro() {
            this.poderMonstro = this.poderMonstro + (this.nivelMonstro * 5);
            this.sangueMonstro = this.sangueMonstroOriginal + (20 * this.nivelMonstro);
        },
        atacar() {

            if (this.log.length == 0) {
                this.fugas = 3;
            }

            if (!this.ganhou && !this.perdeu) {
                this.monstroAtaca(this.poderMonstro);
                /* this.jogadorAtaca(this.poderJogador); */
            }

            if (!this.ganhou && !this.perdeu) {
                /*  this.monstroAtaca(this.poderMonstro); */
                let ataque = this.poderJogador;
                if (this.iop) {
                    ataque = ataque + (ataque / 10);
                } else if (this.eni) {
                    ataque = ataque - Math.floor(ataque / 5);
                }
                this.jogadorAtaca(ataque);
            }
        },
        monstroAtaca(forca) {
            let ataque = this.obterRandom(forca);

            //this.sangueJogador -= ataque;

            //se o sangue ficar negativo, seta para zero
            this.sangueJogador = Math.max(this.sangueJogador - ataque, 0);

            this.sangueJogadorPercentual = 100 * this.sangueJogador / this.sangueJogadorOriginal;

            this.log.unshift({ monstro: 'MONSTRO ATINGIU JOGADOR COM ' + ataque });
            if (this.sangueJogador <= 0) {
                //this.sangueJogador = 0;
                this.sangueJogadorPercentual = 0;
                this.perdeu = true;
                this.nivelJogador = 1;


            }
        },
        jogadorAtaca(forca) {
            let ataque = this.obterRandom(forca);

            /* this.sangueMonstro -= ataque;
            this.sangueMonstroPercentual = 100 * this.sangueMonstro / this.sangueMonstroOriginal; */


            this.log.unshift({ jogador: 'JOGADOR ATINGIU MONSTRO COM ' + ataque });


            //se o sangue ficar negativo, seta para zero
            this.sangueMonstro = Math.max(this.sangueMonstro - ataque, 0);
            this.sangueMonstroPercentual = 100 * this.sangueMonstro / this.sangueMonstroOriginal;

            if (this.sangueMonstro <= 0) {
                //this.sangueMonstro = 0;
                this.sangueMonstroPercentual = 0
                this.ganhou = true;



                //fazendo o jogador subir de nível
                this.subirNivelJogador();
            }
        },
        subirNivelJogador() {
            this.nivelJogador++;
            this.atualizarPoderJogador();
        },
        ataqueEspecial() {
            if (!this.ganhou && !this.perdeu && this.ataquesEspeciais > 0) {
                this.monstroAtaca(this.poderMonstro);
                let ataque = this.poderJogador * 1.5;
                if (this.elio) {
                    ataque = ataque + (ataque / 5);
                } else if (this.eni) {
                    ataque = ataque - (ataque / 5);
                }
                this.jogadorAtaca(ataque);
                this.ataquesEspeciais -= 1;
            }
        },
        zerarTudo() {
            this.ganhou = false;
            this.perdeu = false;
            this.log = [];
            this.ataquesEspeciais = 3;
            this.fugas = 3;

            this.nivelJogador = 1;
            //this.sangueJogador = 90 + (10 * this.nivelJogador);
            //this.sangueJogadorOriginal = this.sangueJogador;
            this.sangueJogador = this.sangueJogadorOriginal
            this.sangueJogadorPercentual = 100;

            this.nivelMonstro = 1;
            //this.sangueMonstro = 90 + (10 * this.nivelMonstro);
            this.sangueMonstro = this.sangueMonstroOriginal;
            this.sangueMonstroPercentual = 100;

        },
        proximaPartida() {

            this.gerarNivelDoMonstro();

            //this.sangueJogador = 90 + (10 * this.nivelJogador);
            //this.sangueJogadorOriginal = this.sangueJogador;
            this.sangueJogador = this.sangueJogadorOriginal;
            this.sangueJogadorPercentual = 100;

            //this.sangueMonstro = 90 + (10 * this.nivelMonstro);
            //this.sangueMonstroOriginal = this.sangueMonstro;
            this.sangueMonstro = this.sangueMonstroOriginal;
            this.sangueMonstroPercentual = 100;

            this.ganhou = false;
            this.perdeu = false;
            this.log = [];
            this.ataquesEspeciais = 3;
            this.fugas = 3;

        },
        obterRandom(maximo) {
            //return Math.floor(Math.random() * maximo);
            //return Math.round(Math.random() * maximo);
            let minimo = Math.round(maximo / 2)
            return Math.round(Math.random() * (maximo - minimo) + minimo)
        },
        registrarLog(texto) {
            this.log.push(texto);
        },
        curar() {
            if (!this.ganhou && !this.perdeu) {
                let poderCura = this.poderJogador + ((this.nivelJogador + this.nivelMonstro) / 2);
                if (this.eni) {
                    poderCura = poderCura + Math.round(poderCura * this.nivelJogador / 3);
                } else if (this.iop) {
                    poderCura = poderCura - Math.floor(poderCura / 2);
                }
                this.jogadorCura(poderCura);
                this.monstroAtaca(this.poderMonstro);
            }
        },
        jogadorCura(poder) {
            //let cura = this.obterRandom(poder);

            let minimo = poder / 3;
            let cura = Math.round(Math.random() * (poder - minimo) + minimo)

            //this.sangueJogador += cura;
            //this.sangueJogadorPercentual = 100 * this.sangueJogador / this.sangueJogadorOriginal;

            //assume o número menor
            this.sangueJogador = Math.min(this.sangueJogador + cura, this.sangueJogadorOriginal);
            this.sangueJogadorPercentual = 100 * this.sangueJogador / this.sangueJogadorOriginal;

            /* if (this.sangueJogador > this.sangueJogadorOriginal) {
                this.sangueJogador = this.sangueJogadorOriginal;
                this.sangueJogadorPercentual = 100;
            } */
            this.log.unshift({ jogador: 'JOGADOR GANHOU FORÇA DE ' + cura });
        },
        desistir() {
            this.perdeu = true;
        },
        gerarNivelDoMonstro() {
            /* this.nivelMonstro = this.obterRandom(this.nivelJogador); */

            //this.nivelMonstro = Math.floor(Math.random() * ((this.nivelJogador - 1) - this.nivelJogador + 2) + min);

            this.nivelMonstro = this.getStrongMonsters();

            if (this.nivelMonstro <= 0) {
                this.nivelMonstro = 1;
            }
            this.atualizarPoderMonstro();
        },
        fugir() {
            this.fugas -= 1;
            this.gerarNivelDoMonstro();
        },
        getStrongMonsters() {
            let min = this.nivelJogador / 2 + 1;
            let max = this.nivelJogador * 2;
            min = Math.floor(min);
            /* return Math.floor(Math.random() * (max - min) + min) */
            return Math.round(Math.random() * (max - min) + min)
        },
        apenasUmExemploDeAtributoDinamico() {
            this.passandoAtributoDinamico('sangueJogador')
        },
        passandoAtributoDinamico(prop) {
            alert("Recebi o atributo " + prop + " o qual vale " + this[prop])
        },
        outroExemploDeAtributoDinamico(atributo) {
            this.passandoAtributoDinamico(atributo)
        },
        passandoAtributoDinamicoComParametroNoCall(prop) {
            alert("Recebi o atributo " + prop + " o qual vale " + this[prop])
        }

    }




})