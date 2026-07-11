const http = require('http')

const server = http.createServer( (request, response) => {
    console.log(request)



    if (request.url === '/'){
        response.end('Weclome to our home page')
    }

    if (request.url === '/about'){
        response.end('Here is our short history')
    }

    response.end(`
        <H1>Error!</H1>
        <p> Page does not exist,/p>
        <a href="/"> Home </a>
        `
    )


})

server.listen(5000)