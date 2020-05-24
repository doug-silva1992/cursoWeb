function tratarErroELancar(erro)
{
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.nome,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritadi(obj)
{
    try
    {
        console.log(obj.nome.toUpperCase() + '!!!');
    }
    catch (e)
    {
        tratarErroELancar(e);
    }
    finally
    {
        console.log('final');
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj);