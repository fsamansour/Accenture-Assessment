function makeNumSentences(nums, predefinedNumbers) {
    if (predefinedNumbers.length === 0) {
        return [];
    }

    const predefinedNumbersArr = predefinedNumbers
        .map(num => {
            return [...nums.matchAll(num)]
                .map(x => ({ value: num, startIdx: x.index, endIdx: x.index + num.length }))
        })
        .flat();

    const ascStartIdx = predefinedNumbersArr.sort((a, b) => a.startIdx > b.startIdx ? 1 : -1);

    const probabilities = ascStartIdx.map(x => {
        x.next = predefinedNumbersArr.filter(y => y.startIdx === x.endIdx)
        return x;
    });

    return JSON.stringify(flatProbabilities(probabilities[0]), undefined, 2);
}

function flatProbabilities(prob) {
    let item = prob;
    let value = '';
    while (item) {
        value += `:${item.value}`;
        if (item.next.length > 1) {
            item = item.next[0]; // FIXME: Handle this part
        } else {
            item = item.next[0];
        }
    }
    value += ':';
    return value;
}

function test() {
    console.log('Task1_makeNumSentences');

    console.log(makeNumSentences('143163421154143', ["21154", "143", "21154143", "1634", "163421154"]));
}

module.exports = {
    makeNumSentences,
    test
}
