// ***********************************
// *                                 *
// *  X-Team TensorFlow.js - Logic   *
// *                                 *
// ***********************************

/**
 *  Helpers
 */

const print = function (text) {
  let el = document.getElementsByClassName('logic')[0]
  el.append(document.createTextNode(text))
  el.append(document.createElement('br'))
  console.log(text)
}

/**
 *  Data sets
 */

const prep = function() {}

const data = fetchWrapper('http://localhost:5555/api/')

/**
 * TensorFlow.js
 *
 * See: https://medium.com/tensorflow/a-gentle-introduction-to-tensorflow-js-dba2e5257702
 */

const cnn = function (cycles) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      try {
       /**
        model.fit(xs, ys, {
          batchSize: 1,
          epochs: cycles
        }).then(function () {
          print('')
          print('Running CNN for: ' + op + ' at ' + cycles + ' epochs')
          print(model.predict(tf.tensor2d(args['testing'])))
          print(args['expected'])
          resolve(print(''))
        })
        */

      } catch (ex) {
        resolve(print(ex))
      }
    }, 5000)
  })
}

/**
 * Init
 */

print('Beginning tests at ' + new Date() + '... this may take a while!')
cnn(100).then(function (e) {
  print('Completed tests at ' + new Date() + '... thanks for waiting!')
})
