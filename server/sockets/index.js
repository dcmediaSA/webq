const { io } = require('../server');

const Service = require('../service');

const service = new Service();

io.on('connection', (socket) => {
    console.log('🟢 CLIENT CONNECTED');

    socket.on('counter.add', (data) => {
        service.addCounter(data);
    });

    socket.on('disconnect', () => {
        console.log('🔴 CLIENT DISCONNECT');
    });
});
