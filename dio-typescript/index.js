"use strict";
// console.log('Typescript');
exports.__esModule = true;
exports.numero = void 0;
/* function soma(a: number, b: number) {
    return a + b
} */
/* // types
// interfaces
interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    // executarRugido(alturaEmDecibeis: number): void;
    domestico: boolean;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande'
}

// const animal: IAnimal = {
//     nome: 'Elefante',
//     tipo: 'terrestre',
//     // executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
// }

// animal.executarRugido(20)

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte:  'medio',
    tipo: 'terrestre',
}

// const felino: IFelino = {
//     nome: 'Leão',
//     tipo: 'terrestre',
//     // executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`),
//     visaoNoturna: true
// }

// type IAnimal = {
//     nome: string;
//     tipo: 'terrestre' | 'aquático';
//     executarRugido(alturaEmDecibeis: number): void;
// } */
/* const input = document.getElementById('input') as HTMLInputElement

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement
    console.log(i.value);
} ) */
/* // Generic types
function adicionaApendiceALista<T>(array: T[], value: T) {
    return array.map(() => value)
}

adicionaApendiceALista([1, 2, 3], 1) */
/* interface IUsuario {
    id: string;
    email: string;
    cargo?: 'gerente' | 'coordenador' | 'supervisor'| 'funcionario';
}

// interface IAdmin extends IUsuario {
//     cargo: 'gerente' | 'coordenador' | 'supervisor'
// }

function redirecione(usuario: IUsuario) {
    // if ('cargo' in usuario ) {
    //     // redirecionar para a área de administração
    // }
    // // redirecionar para a área de usuário

    if (usuario.cargo) {
        // redirecionar(usuario.cargo)
    }
    // redirecionar para a área do usuário
} */
/* interface ICachorro {
    readonly nome: string;
    readonly idade: number;
    readonly parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
    readonly [K in keyof ICachorro]-?: ICachorro[K]
} //itera a interface ICachorro e cria uma key readonl para cada key na interface, ao mesmo tempo que torna obrigatório o atributo parqueFavorito

class MeuCachorro implements CachorroSomenteLeitura {
    idade;
    nome;
    parqueFavorito;

    constructor(nome, idade) {
        this.idade = idade
        this.nome = nome
    }

}

const cao = new MeuCachorro('Apolo', 14) */
/* import $ from 'jquery';

$.fn.extend({
    novaFuncao() {
        console.log('Chamou nova função');
    }
})

$('body').novaFuncao() */
exports.numero = 2;
