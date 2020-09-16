require('dotenv').config();

var nodemailer = require('nodemailer')
var table = require('./dados')

async function enviar(data, tecnologia){
    var transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secureConnection: false,
        secure: false,
        requireTLS: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        },
        tls: {
          rejectUnauthorized: false
        }
    });

    let info = await transporter.sendMail({
        from: process.env.EMAILS_FROM, // sender address
        to: process.env.EMAILS_TO, // list of receivers
        subject: `Relatórios Nordeste - Clientes V ${tecnologia}`, // Subject line
        //text: "Teste text", // plain text body
        html: data[0], // html body
    });

    console.log("Message sent: %s ", info.messageId);
    console.log("Data / Hora ", Date())
}

main()
async function main() {
    const resultadoGPON = await Promise.all([
      table.datatable('GPON'),
    ])
    enviar(resultadoGPON,'S6 (Platinum) FIBRA')

    const resultadomETALICO = await Promise.all([
        table.datatable('METALICO'),
    ])
    enviar(resultadomETALICO,'S6 (Platinum) MASSIVO')
   
}

