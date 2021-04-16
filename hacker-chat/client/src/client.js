import net from 'net';
import readline from 'readline';

const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});

const argv = process.argv.slice(2);
const userName = argv[0];


const client = new net.Socket();
client.connect(4000, '127.0.0.1', () => {

    client.on('data', (data) => {
        console.log(data.toString());
    });
        

    rl.addListener( 'line', (line) => {
        client.write(`${userName}:${line}`);
    });

    client.on('end', () => {
        rl.close();
    });

});


