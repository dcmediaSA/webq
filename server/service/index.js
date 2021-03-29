const fs = require('fs');
const Ticket = require('./ticket');

class Service {
    constructor() {
        this.date = new Date();
        this.counters = [];
        this.lastTicket = 0;
        this.queue = [];

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
        this.lastTicket = 0;
        this.queue = [];
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

    saveData() {
        const jsonData = {
            date: this.date,
            counters: this.counters,
            lastTicket: this.lastTicket,
            queue: this.queue,
        };

        const jsonDataString = JSON.stringify(jsonData, null, 4);

        fs.writeFileSync('./data.json', jsonDataString);
    }
}

module.exports = Service;
