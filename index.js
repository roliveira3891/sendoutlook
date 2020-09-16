require('dotenv').config();

var nodeoutlook = require('nodejs-nodemailer-outlook')
var table = require('./dados')

async function enviar(data){
    var table = require('./dados')
    nodeoutlook.sendEmail({
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        from: 'relatorios_nordeste@outlook.com',
        to: 'renato.boliveira@telefonica.com',
        subject: 'Testes table',
        html: data,
        text: 'This is text version!',
        replyTo: '*@outlook.com',
        onError: (e) => console.log(e),
        onSuccess: (i) => console.log(i)
    })
}

main()
async function main() {
    const resultado = await Promise.all([
        table.datatable(),
        table.dataemails()
    ])

    console.log(resultado[0])
    enviar(resultado[0])
    
}



//console.log(table.table())
//enviar()

