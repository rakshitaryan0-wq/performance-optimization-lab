// inefficient.js
const { performance } = require('perf_hooks');

// Generate 100,000 random numbers between 1 and 50,000
const rawData = [];
for (let i = 0; i < 100000; i++) {
    rawData.push(Math.floor(Math.random() * 50000) + 1);
}

function processDataLegacy(data) {
    let uniqueData = [];
    // Algorithmic bottleneck: Array.includes inside a loop is O(n^2)
    for (let i = 0; i < data.length; i++) {
        if (!uniqueData.includes(data[i])) {
            uniqueData.push(data[i]);
        }
    }
    return uniqueData;
}

const startTime = performance.now();
const result = processDataLegacy(rawData);
const endTime = performance.now();

console.log(`[Legacy] Processed ${result.length} unique items.`);
console.log(`[Legacy] Execution Time: ${(endTime - startTime).toFixed(2)} milliseconds`);