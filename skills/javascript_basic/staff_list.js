'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function() {
  inputString = inputString.split('\n');
  main();
});

function readLine() {
  return inputString[currentLine++];
}

class StaffList {
    /**
     * @type {Array<{ name: string }>}
     */
    list = []

    constructor() {
        
    }
    
    /**
     * @param {string} name
     * @param {number} age
     */
    add(name, age) {
        if (this.list.find(mem => mem.name === name)) {
            return;
        }
        
        if (age <= 20) {
            throw new Error('Staff member age must be greater than 20')
        }
        
        this.list.push({ name })
    }
    
    /**
     * @param {string} name
     */
    remove(name) {
        const toRemoveIndex = this.list.findIndex(mem => mem.name === name)
        
        if (toRemoveIndex > -1) {
            this.list = this.list.filter(mem => mem.name !== name)
            return true;
        }
        
        return false;
    }
    
    /**
     * @returns {number}
     */
    getSize() {
        return this.list.length;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    
    const obj = new StaffList();
    const operationCount = parseInt(readLine().trim());
    
    for(let i = 1; i <= operationCount; i++) {
        const operationInfo = readLine().trim().split(' ');
        try {
            let res;
            if (operationInfo[0] === 'add') {
                obj.add(operationInfo[1], parseInt(operationInfo[2]));
            } else if (operationInfo[0] === 'remove') {
                res = obj.remove(operationInfo[1]);
                ws.write(`${res}\n`);
            } else if (operationInfo[0] === 'getSize') {
                res = obj.getSize();
                ws.write(`${res}\n`);
            }
        } catch (e) {
            ws.write(`${e}\n`);
        }
    }
    ws.end();
}