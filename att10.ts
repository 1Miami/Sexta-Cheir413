interface Criatura {
    aparecer(): void;
    atacar(): void;
}

class Monstro implements Criatura {
    aparecer(): void {
        console.log("Monstro apareceu.");
    }

    atacar(): void {
        console.log("Monstro atacando.");
    }
}

class Lobisomem extends Monstro {
    aparecer(): void {
        console.log('Lobisomem apareceu sob a lua cheia')
    }
    atacar(): void {
        let arma = 'AK-47'
        console.log("Lobisomem atacando com arma: " + arma);
    }
}

function gerenciarCriatura(criatura: Criatura): void {
    criatura.aparecer();
    criatura.atacar();
}

const monstro = new Monstro();
const lobisomem = new Lobisomem();

gerenciarCriatura(monstro);       
gerenciarCriatura(lobisomem); 