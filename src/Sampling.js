const RandomGenerator = require('../src/Random');

class Sampling{
    static simpleRandomSample(list, sampleSize, seed) {
        let simpleRandomSample = RandomGenerator.selectNItemsWithASeed(seed, list, sampleSize);
        return simpleRandomSample;
    }
}

module.exports = Sampling;