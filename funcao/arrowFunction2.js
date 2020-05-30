function Pessoa(){
    this.idade = 0;

    setInterval(() => {
        this.idade++;
    }, 1000);
}

new Pessoa;