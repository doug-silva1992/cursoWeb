/* 
*cpf teste valido: 41584408820
*cnpj teste valido: 11430226000149
*
*cpf teste invalido: 41584408822
*cnpj teste invalido: 11430226000133
*/

function validaCPFCPNJ(cpf_cnpj)
{
    //Setando Variáveis 
    let verifica_cpf_cnpj = cpf_cnpj.split("", cpf_cnpj.length - 2);
    let digito = cpf_cnpj[cpf_cnpj.length - 2].toString() + cpf_cnpj[cpf_cnpj.length - 1].toString();
    let val = [];
    let soma = 0;
    let digito_verificador;
    cpf_cnpj.length == 11 ? ret = "CPF Valido" : ret = "CNPJ Valido";
    
    // identificar se é cpf ou cnpj
    if (cpf_cnpj.length == 11)
    {    
        //Coleta o primeiro dígito verificador
        let mult = 0;
        let n = 1;
        
        for (let i = 0; i < 9; i++)
        {
            mult = verifica_cpf_cnpj[i] * n;
            val.push(mult,);
            n++;
        }

        for (i = 0; i < 9; i++)
        {
            soma += val[i];
        }

        let dig1 = soma%11;

        if (dig1 == 10)
        {
            dig1 = 0;
        }

        //Coleta o segundo dígito verificador
        verifica_cpf_cnpj.push(dig1.toString());

        val = [];
        soma = 0;
        mult = 0;
        
        for (i = 0; i < 10; i++)
        {
            mult = verifica_cpf_cnpj[i] * i;
            val.push(mult);
        }

        for (i = 0; i < 10; i++)
        {
            soma += val[i];
        }

        let dig2 = soma%11;

        if (dig2 == 10)
        {
            dig2 = 0;
        }

        digito_verificador = dig1.toString() + dig2.toString();
        
        if(digito_verificador != digito)
        {
            ret = "CPF invalido";
        }
    } else {

        let mult = [5, 6, 7, 8, 9, 2, 3, 4, 5, 6, 7, 8, 9];
        let total = 0;
        let n = 0;

        for(let i = 1; i <= 12; i++)
        {
            total = verifica_cpf_cnpj[n] * mult[i];
            val.push(total);
            n++;
        }
        
        for(i = 0; i < val.length; i++)
        {
            soma += val[i];
        }

        let dig1 = soma%11;
        
        if (dig1 == 10)
        {
            dig1 = 0;
        }

        verifica_cpf_cnpj.push(dig1.toString());
        val = [];
        soma = 0;
        total = 0;

        for(i = 0; i < verifica_cpf_cnpj.length; i++)
        {
            total = verifica_cpf_cnpj[i] * mult[i];
            val.push(total);
        }

        for(i in val)
        {
            soma += val[i];
        }

        let dig2 = soma%11;

        if (dig2 == 10)
        {
            dig2 = 0;
        }

        digito_verificador = dig1.toString() + dig2.toString();
        
        if(digito_verificador != digito)
        {
            ret = "CNPJ invalido";
        }
    }
    return ret;
}

let tamanho = "11430226000149";
let cpf_cnpj = Number(tamanho);
let resp;

if(tamanho.length == 11)
{
    switch (cpf_cnpj) 
    {
        case 00000000000:
            console.log('cpf inválido');
            break;
        
        case 11111111111:
            console.log('cpf inválido');
            break;

        case 22222222222:
            console.log('cpf inválido');
            break;
        
        case 33333333333:
            console.log('cpf inválido');
            break;

        case 44444444444:
            console.log('cpf inválido');
            break;
                
        case 55555555555:
            console.log('cpf inválido');
            break;

        case 66666666666:
            console.log('cpf inválido');
            break;
                    
        case 77777777777:
            console.log('cpf inválido');
            break;
        
        case 88888888888:
            console.log('cpf inválido');
            break;
                    
        case 99999999999:
            console.log('cpf inválido');
            break;

        default:
            resp = validaCPFCPNJ(tamanho);
            console.log(resp);
            break;
    }   
}
else if(tamanho.length == 14)
{
    switch (cpf_cnpj) 
    {
        case 00000000000000:
            console.log('cnpj inválido');
            break;
        
        case 11111111111111:
            console.log('cnpj inválido');
            break;

        case 22222222222222:
            console.log('cnpj inválido');
            break;
        
        case 33333333333333:
            console.log('cnpj inválido');
            break;

        case 44444444444444:
            console.log('cnpj inválido');
            break;
                
        case 55555555555555:
            console.log('cnpj inválido');
            break;

        case 66666666666666:
            console.log('cnpj inválido');
            break;
                    
        case 77777777777777:
            console.log('cnpj inválido');
            break;
        
        case 88888888888888:
            console.log('cnpj inválido');
            break;
                    
        case 99999999999999:
            console.log('cnpj inválido');
            break;

        default:
            resp = validaCPFCPNJ(tamanho);
            console.log(resp);
            break;
    }
}
else
{
    console.log('Quantidade de dígitos inválido.');
}