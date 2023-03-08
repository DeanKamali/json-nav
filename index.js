function query(json, queryStr) {
    const queryArr = queryStr.split('.');
    let result = [json];

    for (let i = 0; i < queryArr.length; i++) {
        const currentQuery = queryArr[i];
        const nextResult = [];

        for (let j = 0; j < result.length; j++) {
            const currentResult = result[j];

            if (Array.isArray(currentResult)) {
                for (let k = 0; k < currentResult.length; k++) {
                    const currentElement = currentResult[k];
                    if (typeof currentElement === 'object' && currentElement[currentQuery]) {
                        nextResult.push(currentElement[currentQuery]);
                    }
                }
            } else if (typeof currentResult === 'object' && currentResult[currentQuery]) {
                nextResult.push(currentResult[currentQuery]);
            }
        }

        result = nextResult;
    }

    return result;
}

module.exports = { query };