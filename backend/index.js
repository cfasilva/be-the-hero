const express = require('express')

const app = express()

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Cleber Silva'
    })
})

app.post('/users', (request, response) => {
    const body = request.body

    console.log(body)

    return response.json({
        evento: 'Semana Omnistack 11',
        aluno: 'Vicente de Abreu'
    })
})

app.listen(3333)