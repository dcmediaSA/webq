const { io } = require('../server');

io.on('connection', (socket) => {
    console.log('🟢 CLIENT CONNECTED');

    socket.on('disconnect', () => {
        console.log('🔴 CLIENT DISCONNECT');
    });
});
