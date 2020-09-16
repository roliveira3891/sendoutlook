const service = require('./service')

module.exports = {
    async datatable(tecnologia) { 
        const results = await service.dadosClientes(tecnologia)
        const ttable = `<tr><td width=50 nowrap colspan=12 style='width:37.5pt;border:solid #D9D9D9 1.0pt;background:#248CC1;padding:3.0pt 3.0pt 3.0pt 3.0pt'><p class=MsoNormal align=center style='text-align:center'><b><span style='font-family:"Candara",sans-serif;color:#F4F6F7'>ANALITICO GPON "S 6" (PREMIUM)</span></b><o:p></o:p></p></td></tr>
        <tr>
        <td width=50 nowrap style='width:37.5pt;border:solid #D9D9D9 1.0pt;border-top:none;background:#EBEBEB;padding:2.25pt 5.25pt 2.25pt 5.25pt'><p class=MsoNormal align=center style='text-align:center'><b><span style='font-size:9.0pt;font-family:"Candara",sans-serif;color:black'>ID</span></b><o:p></o:p></p></td>
        <td width=50 nowrap style='width:37.5pt;border:solid #D9D9D9 1.0pt;border-top:none;background:#EBEBEB;padding:2.25pt 5.25pt 2.25pt 5.25pt'><p class=MsoNormal align=center style='text-align:center'><b><span style='font-size:9.0pt;font-family:"Candara",sans-serif;color:black'>STATUS</span></b><o:p></o:p></p></td>
        <td width=50 nowrap style='width:37.5pt;border:solid #D9D9D9 1.0pt;border-top:none;background:#EBEBEB;padding:2.25pt 5.25pt 2.25pt 5.25pt'><p class=MsoNormal align=center style='text-align:center'><b><span style='font-size:9.0pt;font-family:"Candara",sans-serif;color:black'>STATUS_REASON</span></b><o:p></o:p></p></td>
        <td width=50 nowrap style='width:37.5pt;border:solid #D9D9D9 1.0pt;border-top:none;background:#EBEBEB;padding:2.25pt 5.25pt 2.25pt 5.25pt'><p class=MsoNormal align=center style='text-align:center'><b><span style='font-size:9.0pt;font-family:"Candara",sans-serif;color:black'>ARMARIO</span></b><o:p></o:p></p></td>
        <td width=50 nowrap style='width:37.5pt;border:solid #D9D9D9 1.0pt;border-top:none;background:#EBEBEB;padding:2.25pt 5.25pt 2.25pt 5.25pt'><p class=MsoNormal align=center style='text-align:center'><b><span style='font-size:9.0pt;font-family:"Candara",sans-serif;color:black'>PRODUTO</span></b><o:p></o:p></p></td>
        <td width=50 nowrap style='width:37.5pt;border:solid #D9D9D9 1.0pt;border-top:none;background:#EBEBEB;padding:2.25pt 5.25pt 2.25pt 5.25pt'><p class=MsoNormal align=center style='text-align:center'><b><span style='font-size:9.0pt;font-family:"Candara",sans-serif;color:black'>DETAIL</span></b><o:p></o:p></p></td>
        <td width=50 nowrap style='width:37.5pt;border:solid #D9D9D9 1.0pt;border-top:none;background:#EBEBEB;padding:2.25pt 5.25pt 2.25pt 5.25pt'><p class=MsoNormal align=center style='text-align:center'><b><span style='font-size:9.0pt;font-family:"Candara",sans-serif;color:black'>DATA_ABERTURA</span></b><o:p></o:p></p></td>
        <td width=50 nowrap style='width:37.5pt;border:solid #D9D9D9 1.0pt;border-top:none;background:#EBEBEB;padding:2.25pt 5.25pt 2.25pt 5.25pt'><p class=MsoNormal align=center style='text-align:center'><b><span style='font-size:9.0pt;font-family:"Candara",sans-serif;color:black'>DATA_VENCIMENTO</span></b><o:p></o:p></p></td>
        <td width=50 nowrap style='width:37.5pt;border:solid #D9D9D9 1.0pt;border-top:none;background:#EBEBEB;padding:2.25pt 5.25pt 2.25pt 5.25pt'><p class=MsoNormal align=center style='text-align:center'><b><span style='font-size:9.0pt;font-family:"Candara",sans-serif;color:black'>TELEPHONENUMBER</span></b><o:p></o:p></p></td>
        <td width=50 nowrap style='width:37.5pt;border:solid #D9D9D9 1.0pt;border-top:none;background:#EBEBEB;padding:2.25pt 5.25pt 2.25pt 5.25pt'><p class=MsoNormal align=center style='text-align:center'><b><span style='font-size:9.0pt;font-family:"Candara",sans-serif;color:black'>CITY</span></b><o:p></o:p></p></td>
        <td width=50 nowrap style='width:37.5pt;border:solid #D9D9D9 1.0pt;border-top:none;background:#EBEBEB;padding:2.25pt 5.25pt 2.25pt 5.25pt'><p class=MsoNormal align=center style='text-align:center'><b><span style='font-size:9.0pt;font-family:"Candara",sans-serif;color:black'>CLUSTER</span></b><o:p></o:p></p></td></tr>`
        let dtable = ''

        for(item of results){
            let status = ''
            if(item[6]<0){
                status = 'VENCIDO'
                cor = ';background:#a01f11;'
            }else{
                status = `Falta ${item[6].toFixed(0)} horas`
                cor = ';background:#11a01f;'
            }
            dtable += `<tr><td nowrap style='border:solid #DDDDDD 1.0pt;border-top:none;padding:2.25pt 5.25pt 2.25pt 5.25pt'><p class=MsoNormal align=center style='text-align:center'><span style='font-size:9.0pt;font-family:"Calibri",sans-serif;color:#7B7B7B'>${item[0]}</span><o:p></o:p></p></td>`
            dtable += `<td nowrap style='border:solid #DDDDDD 1.0pt;border-top:none;padding:2.25pt 5.25pt 2.25pt 5.25pt'><p class=MsoNormal align=center style='text-align:center'><span style='font-size:9.0pt;font-family:"Calibri",sans-serif;color:#7B7B7B'>${item[1]}</span><o:p></o:p></p></td>`
            dtable += `<td nowrap style='border:solid #DDDDDD 1.0pt;border-top:none;padding:2.25pt 5.25pt 2.25pt 5.25pt'><p class=MsoNormal align=center style='text-align:center'><span style='font-size:9.0pt;font-family:"Calibri",sans-serif;color:#7B7B7B'>${item[2]}</span><o:p></o:p></p></td>`
            dtable += `<td nowrap style='border:solid #DDDDDD 1.0pt;border-top:none;padding:2.25pt 5.25pt 2.25pt 5.25pt'><p class=MsoNormal align=center style='text-align:center'><span style='font-size:9.0pt;font-family:"Calibri",sans-serif;color:#7B7B7B'>${item[4]}</span><o:p></o:p></p></td>`
            dtable += `<td nowrap style='border:solid #DDDDDD 1.0pt;border-top:none;padding:2.25pt 5.25pt 2.25pt 5.25pt'><p class=MsoNormal align=center style='text-align:center'><span style='font-size:9.0pt;font-family:"Calibri",sans-serif;color:#7B7B7B'>${item[5]}</span><o:p></o:p></p></td>`
            dtable += `<td nowrap style='border:solid #DDDDDD 1.0pt;border-top:none;padding:2.25pt 5.25pt 2.25pt 5.25pt ${cor}'><p class=MsoNormal align=center style='text-align:center'><span style='font-size:9.0pt;font-family:"Calibri",sans-serif;color:#fff'>${status}</span><o:p></o:p></p></td>`
            dtable += `<td nowrap style='border:solid #DDDDDD 1.0pt;border-top:none;padding:2.25pt 5.25pt 2.25pt 5.25pt'><p class=MsoNormal align=center style='text-align:center'><span style='font-size:9.0pt;font-family:"Calibri",sans-serif;color:#7B7B7B'>${item[7]}</span><o:p></o:p></p></td>`
            dtable += `<td nowrap style='border:solid #DDDDDD 1.0pt;border-top:none;padding:2.25pt 5.25pt 2.25pt 5.25pt'><p class=MsoNormal align=center style='text-align:center'><span style='font-size:9.0pt;font-family:"Calibri",sans-serif;color:#7B7B7B'>${item[8]}</span><o:p></o:p></p></td>`
            dtable += `<td nowrap style='border:solid #DDDDDD 1.0pt;border-top:none;padding:2.25pt 5.25pt 2.25pt 5.25pt'><p class=MsoNormal align=center style='text-align:center'><span style='font-size:9.0pt;font-family:"Calibri",sans-serif;color:#7B7B7B'>${item[9]}</span><o:p></o:p></p></td>`
            dtable += `<td nowrap style='border:solid #DDDDDD 1.0pt;border-top:none;padding:2.25pt 5.25pt 2.25pt 5.25pt'><p class=MsoNormal align=center style='text-align:center'><span style='font-size:9.0pt;font-family:"Calibri",sans-serif;color:#7B7B7B'>${item[10]}</span><o:p></o:p></p></td>`
            dtable += `<td nowrap style='border:solid #DDDDDD 1.0pt;border-top:none;padding:2.25pt 5.25pt 2.25pt 5.25pt'><p class=MsoNormal align=center style='text-align:center'><span style='font-size:9.0pt;font-family:"Calibri",sans-serif;color:#7B7B7B'>${item[11]}</span><o:p></o:p></p></td></tr>`
        }
        const gtable = `<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 style='border-collapse:collapse'><thead>${ttable}</thead>${dtable}</table><br><b>Email enviado automaticamente a cada 1 hora.</b>`
        return gtable
    },

   
    
}

