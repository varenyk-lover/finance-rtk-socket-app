import {io} from 'socket.io-client';

const socket = io('http://localhost:4000');

const fetchTickers = () => {
    return new Promise((resolve) => {
        socket.emit('start');
        socket.on('ticker', (data) => {
            resolve(data);
        });


    });
};

export {fetchTickers};
