// 1.
// Defina um objeto de
// Javascript que descreva
// um dos pokemons da lista
// de pokemons do Wikipedia.
// ref: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon
let pokemon = {
    nome: 'Clefairy',
    nomeJapones: 'Pippi',
    numero: 35,
    numeroJoto: 41,
    numeroSinoh: 100,
    evolucao: 'Cleffa'
};

// 2.
// Printe no console a seguinte
// frase: "Hello, my name is < >.
// And my name in Japanese is < >."
console.log(`Hello, my name is ${pokemon.nome}. And my name in Japanese is ${pokemon.nomeJapones}`);

// 3.
// Adicione uma nova propriedade ao
// seu pokemon chamada `can_fly` 
// (ou algo do tipo) e defina
// ela como `true` ou `false`.
pokemon.canFly = false;

// 4.
// Adicione um método ao seu pokemon
// chamado `fly` que retorna "Sorry,
// I can't fly" ou "Flyyyyiinnngggg!".
pokemon.fly = function() {
    return this.canFly ? 'Flyyyyiinnngggg' : 'Sorry, I can\'t fly';
}
console.log(pokemon.fly());

// 5.
// Adicione um método chamado
// `do_something` ao seu pokemon
// que retorna randomicamente uma 
// das Strings "FIGHT", "BAG" ou "RUN".
pokemon.doSomething = function() {
    let habilites = ['FIGHT', 'BAG', 'RUN'];
    return habilites[ Math.floor( Math.random() * habilites.length ) ];
}
console.log( pokemon.doSomething() ) ;

// 6.
// Adicione um método chamado
// `ask` ao seu pokemon que printa
// no console "What will < > do?" e
// retorna o resultado do metodo
// `do_something`.
pokemon.ask = function() {
    console.log(`What will ${pokemon.nome} do?`);
    return this.doSomething();
}
console.log(pokemon.ask());

// 7. 
// Printe todas as propriedades 
// do seu pokemon no console.
for (let prop in pokemon) {
    console.log(`${prop}`);
}

// 8. 
// Printe todas as propriedades
// e seus respectivos valores no
// console no seguinte formato:
// <propriedade>: <valor>
for (let prop in pokemon) {
    console.log(`${prop}: ${pokemon[prop]}`);
}

// 9.
// Crie uma função construtora
// de um pokemon genérico
// function (nome, nomeJapones) {} ==> assinatura
function Pokemon(nome, nomeJapones, podeVoa) {
    this.nome = nome;
    this.nomeJapones = nomeJapones;
    this.podeVoa = podeVoa;
    this.dizOla = function() {
        console.log(`Hello, my name is ${this.nome}. And my name in Japanese is ${this.nomeJapones}`);
    };
    this.voa = function() {
        return this.podeVoa ? 'Flyyyyiinnngggg' : 'Sorry, I can\'t fly';
    };
    this.lute = function() {
        let habilites = ['Luta', 'Chuta', 'Corre', 'Corre que é cilada, bino!'];
        return habilites[ Math.floor( Math.random() * habilites.length ) ];
    };
    this.pergunte = function() {
        console.log(`O que ${this.nome} vai fazer?`);
        return this.lute();
    };
}