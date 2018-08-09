// ***********************************
// *                                 *
// *  X-Team TensorFlow.js - Logic   *
// *                                 *
// ***********************************

/**
 *  Helpers
 */

const print = function (text) {
  let el = document.getElementsByClassName('rnn')[0]
  el.append(document.createTextNode(text))
  el.append(document.createElement('br'))
  console.log(text)
}

/**
 * Prep Data
 */

const prep = function (data) {
  return new Promise(function (resolve, reject) {
    let dates = [], highs = []
    try {
      for (let i = 0; i < data.length; i++) {
        dates.push(new Date(data[i]['Date'] + 'T00:00:00.000').getTime())
        highs.push(data[i]['Close'])
      }
    } catch (ex) {
      resolve(ex)
      console.log(ex)
    }
    return resolve({
      dates: dates,
      highs: highs
    })
  })
}

/**
 * TensorFlow.js
 *
 * See: https://medium.com/tensorflow/a-gentle-introduction-to-tensorflow-js-dba2e5257702
 */

const rnn = function (op, units, shape, data, cycles) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      try {

        const model = tf.sequential()
        model.add(tf.layers.dense({units: units, inputShape: shape, activation: 'tanh'}))
        model.add(tf.layers.dense({units: 1, activation: 'sigmoid'}))
        model.compile({optimizer: 'sgd', loss: 'binaryCrossentropy', lr: 0.1})
        const xs = tf.tensor1d(data.dates), ys = tf.tensor1d(data.highs)

        model.fit(xs, ys, {
          batchSize: 1,
          epochs: cycles
        }).then(function (success) {
          print(success)
          print('')
          print('Running RNN for: ' + op + ' at ' + cycles + ' epochs')
          print(model.predict(tf.tensor1d(data.dates)))
          resolve(print(''))
        })

      } catch (ex) {
        resolve(print(ex))
      }
    }, 5000)
  })
}

/**
 * Init
 */

print('Beginning AAPL RNN tests at ' + new Date() + '... this may take a while!')
fetchWrapper('http://localhost:5555/api/').then(function (data) {
  prep(data).then(function (result) {
    rnn('Apple', result.highs.length, 1, result, 10).then(function (e) {
      print('Completed tests at ' + new Date() + '... thanks for waiting!')
    })
  })
})