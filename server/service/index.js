const fs = require('fs');
const Ticket = require('./ticket');

class Service {
    constructor() {
        this.date = new Date();
        this.counters = [];
        this.lastTicket = 0;
        this.assigned = [];
        this.queue = [];
        this.done = [];

        const data = require('../data.json');

        if (data.date === this.date) {
            this.lastTicket = data.lastTicket;
            this.queue = data.queue;
        } else {
            this.reset();
        }
    }

    reset() {
        this.counters = [];
        this.assigned = [];
        this.lastTicket = 0;
        this.queue = [];
        this.done = [];
        this.saveData();
    }

    addCounter(counter) {
        this.counters.push(counter);
        const uniqueCounters = new Set(this.counters);
        const counterArray = [...uniqueCounters];
        this.counters = counterArray;
        this.saveData();
    }

    get nextTicket() {
        this.lastTicket += 1;
        return this.lastTicket;
    }

    createTicket() {
        const newTicket = new Ticket(this.nextTicket);
        this.queue.push(newTicket);
        this.saveData();
        return newTicket;
    }

    assignTicket(counter) {
        if (this.queue.length === 0) {
            return null;
        }

        const nextTicket = this.queue.shift();
        nextTicket.counter = counter;

        this.assigned.unshift(nextTicket);
        this.saveData();

        return nextTicket;
    }

    retractTicket(ticket) {
        if (this.assigned.length === 0) {
            return null;
        }

        const nextTicket = ticket;
        this.done.push(nextTicket);

        const filtered = this.assigned.filter((item) => item.number !== nextTicket.number);
        this.assigned = filtered;

        this.saveData();

        return nextTicket;
    }

    saveData() {
        const jsonData = {
            date: this.date,
            counters: this.counters,
            lastTicket: this.lastTicket,
            assigned: this.assigned,
            queue: this.queue,
            done: this.done,
        };

        const jsonDataString = JSON.stringify(jsonData, null, 4);

        fs.writeFileSync('./data.json', jsonDataString);
    }
}

module.exports = Service;
