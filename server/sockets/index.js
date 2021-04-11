const { io } = require('../server');

const Service = require('../service');

const service = new Service();

io.on('connection', (socket) => {
    console.log('🟢 CLIENT CONNECTED');

    const current = () => {
        socket.broadcast.emit('ticket.current', {
            queue: service.getQueue(),
            assigned: service.getAssigned(),
        });
    };

    socket.on('counter.add', (data) => {
        service.addCounter(data);
        current();
    });

    socket.on('ticket.call', (data, callback) => {
        const ticket = service.createTicket();
        callback(ticket);
        current();
    });

    socket.on('ticket.assign', (data, callback) => {
        const ticketAsigned = service.assignTicket(data);
        callback(ticketAsigned);
        socket.broadcast.emit('ticket.call', ticketAsigned);
        current();
    });

    socket.on('ticket.retract', (data, callback) => {
        const ticketRetract = service.retractTicket(data);
        callback(ticketRetract);
        current();
    });

    socket.on('ticket.create', (data, callback) => {
        const number = service.createTicket();
        callback(number);
        current();
    });

    current();

    socket.on('disconnect', () => {
        console.log('🔴 CLIENT DISCONNECT');
    });
});
