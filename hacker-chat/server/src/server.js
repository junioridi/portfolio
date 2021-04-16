import net from 'net';
import readline from 'readline';


let clients = [];

const server = net.createServer((socket) => {

    clients.push(socket);
    console.log('Entrou mais uma vez');

    socket.on("close", () => {
        clients = clients.filter( s => s !== socket );
        console.log(`Número de clientes conectados ${clients.length}`);
    })

    socket.on("end", () => { 
        console.log("Cliente desconectou");
    });

    socket.on("data", (data) => {
        console.log(data.toString());
        clients.forEach( s => { 
            if(socket == s)
            {
                //s.write("Mesmo socket");
                return;
            }
            s.write(data);
        });

    });
});

server.listen(4000, '127.0.0.1');
