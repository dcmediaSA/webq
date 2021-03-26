const fs = require('fs');

class service {
    constructor() {
        this.counters = [];
    }

    reset() {
        this.counters = [];
        this.saveData();
    }

    addCounter(counter) {
        this.counters.push(counter);
        const uniqueCounters = new Set(this.counters);
        const counterArray = [...uniqueCounters];
        this.counters = counterArray;
        this.saveData();
    }

    saveData() {
        const jsonData = {
            counters: this.counters,
        };

        const jsonDataString = JSON.stringify(jsonData, null, 4);

        fs.writeFileSync('./data.json', jsonDataString);
    }
}

module.exports = service;
