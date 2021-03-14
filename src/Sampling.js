const RandomGenerator = require('../src/Random');

class Sampling{
    static simpleRandomSample(list, sampleSize, seed=100) {
        // pick a simple random sample from array, with replacement and optional seed
        return RandomGenerator.selectNItemsWithASeed(seed, list, sampleSize);
    }
}

module.exports = Sampling;