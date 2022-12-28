let datas = require('./datas');

const returnMessageOfTheDay = (day) => {
    return datas.phrases[day - 1]
}

exports.returnMessageOfTheDay = returnMessageOfTheDay;