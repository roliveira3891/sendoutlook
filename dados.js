module.exports = {
async datatable() { 
    return `<table>
        <tr>
            <td>NOME</td>
            <td>IDADE</td>
            <td>CIDADE</td>
        </tr>
        <tr>
            <td>Renato</td>
            <td>37</td>
            <td>Goiânia</td>
        </tr>
        <tr>
            <td>Oliveira</td>
            <td>37</td>
            <td>Recife</td>
        </tr>
    </table>`
    },

    async dataemails(){
        const emails = ["",""]
        return emails
    }
    
}

