const { io } = require('../server');

const Service = require('../service');

const service = new Service();

io.on('connection', (socket) => {
    console.log('🟢 CLIENT CONNECTED');

    socket.on('counter.add', (data) => {
        service.addCounter(data);
    });

    socket.on('ticket.call', (data, callback) => {
        const ticket = service.createTicket();
        callback(ticket);
    });

    socket.on('ticket.assign', (data, callback) => {
        const ticketAsigned = service.assignTicket(data);
        callback(ticketAsigned);
        socket.broadcast.emit('ticket.call', ticketAsigned);
    });

    socket.on('ticket.retract', (data, callback) => {
        const ticketRetract = service.retractTicket(data);
        callback(ticketRetract);
    });

    socket.on('ticket.create', (data, callback) => {
        const number = service.createTicket();
        callback(number);
    });

    socket.on('disconnect', () => {
        console.log('🔴 CLIENT DISCONNECT');
    });
});
