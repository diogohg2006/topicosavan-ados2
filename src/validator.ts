function validarChamado(titulo: string): boolean {
    if (!titulo  || titulo.trim() === "") {
        throw new Error("O título do chamado não pode ser vazio.");
    }
    return true;
if (titulo.trim().length < 5) {
        throw new Error("O título deve possuir no minimo 5 caracters.");
    }

    if (titulo.trim().length > 100) {
        throw new Error("O título deve possuir no máximo.");
    }

}
export default validarChamado;