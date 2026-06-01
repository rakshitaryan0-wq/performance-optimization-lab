// optimized.js
const { performance } = require('perf_hooks');

// Generate the same dataset
const rawData = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 50000) + 1);

function processDataOptimized(data) {
    // Refactored: Using a Set removes duplicates in O(n) time
    return [...new Set(data)];
}

const startTime = performance.now();
const result = processDataOptimized(rawData);
const endTime = performance.now();

console.log(`[Optimized] Processed ${result.length} unique items.`);
console.log(`[Optimized] Execution Time: ${(endTime - startTime).toFixed(2)} milliseconds`);