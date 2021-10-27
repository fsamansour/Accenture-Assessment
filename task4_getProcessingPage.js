const StatesEnum = Object.freeze({
    PROCESSING: 'processing',
    ERROR: 'error',
    SUCCESS: 'success'
})

const ErrorCodesEnum = Object.freeze({
    NO_STOCK: 'NO_STOCK',
    INCORRECT_DETAILS: 'INCORRECT_DETAILS'
})

const ErrorsEnum = Object.freeze({
    [ErrorCodesEnum.NO_STOCK]: 'No stock has been found',
    [ErrorCodesEnum.INCORRECT_DETAILS]: 'Incorrect details have been entered'
});

function getProcessingPage(steps) {
    return steps.reduce((acc, step) =>
            acc.then(() => {
                switch (step.state) {
                    case StatesEnum.PROCESSING:
                        return new Promise(resolve => setTimeout(() => resolve(), 2000));
                    case StatesEnum.SUCCESS:
                        return Promise.resolve({ title: 'Order complete', message: null });
                    case StatesEnum.ERROR:
                        return new Promise(resolve => resolve({ title: 'Error page', message: ErrorsEnum[step.errorCode] || null }))
                }
            }),
        Promise.resolve())
}

function test() {
    console.log('Task4_getProcessingPage');
    getProcessingPage([{ state: StatesEnum.PROCESSING }, { state: StatesEnum.ERROR }]).then(result => {
        console.log('Error with no errorCode', result);
    });

    getProcessingPage([{ state: StatesEnum.PROCESSING }, { state: StatesEnum.ERROR, errorCode: ErrorCodesEnum.NO_STOCK }]).then(result => {
        console.log(`Error with errorCode ${ErrorCodesEnum.NO_STOCK}`, result);
    });

    getProcessingPage([{ state: StatesEnum.PROCESSING }, { state: StatesEnum.ERROR, errorCode: ErrorCodesEnum.INCORRECT_DETAILS }]).then(result => {
        console.log(`Error with errorCode ${ErrorCodesEnum.INCORRECT_DETAILS}`, result);
    });

    getProcessingPage([{ state: StatesEnum.PROCESSING }, { state: StatesEnum.SUCCESS }]).then(result => {
        console.log('Success state', result);
    });

    getProcessingPage([{ state: StatesEnum.PROCESSING }, { state: StatesEnum.PROCESSING }, { state: StatesEnum.SUCCESS }]).then(result => {
        console.log('Delayed success state', result);
    });
}

module.exports = {
    getProcessingPage,
    test
}
