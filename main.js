function Veiculo(marca, modelo, cor){
    if (this.constructor === Veiculo) {
        throw new Error('Veiculo é uma classe abstrata e não pode ser instanciada diretamente.');
    }

    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
}

function Carro(marca, modelo , cor, numPortas){
    Veiculo.call(this, marca, modelo, cor)

    this.numPortas = numPortas;
}

function Moto(marca, modelo, cor, cilindrada ){
    Veiculo.call(this, marca, modelo, cor)

    this.cilindrada = cilindrada;
}


const carro1 = new Carro('VW', 'Gol', 'Preto', 4);
const carro2 = new Carro('BMW', 'M5', 'Branco', 2);
const carro3 = new Carro('Honda', 'Civic', 'Prata', 4);

const moto1 = new Moto('Harley-Davidson', 'Softail', 'Preta', '1600cc');
const moto2 = new Moto('BMW', 'GS', 'Laranja', '1200cc');
const moto3 = new Moto('Yamaha', 'Teneré', 'Azul', '1200cc');


console.log(carro2)