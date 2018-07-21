// ***********************************
// *                                 *
// *  X-Team TensorFlow.js - CNN     *
// *                                 *
// ***********************************

/**
 *  TensorFlow.js CNN
 */

const buildCnn = function (data) {
  return new Promise(function (resolve, reject) {
    const model = tf.sequential()

    model.add(tf.layers.conv1d({
      inputShape: [data.dates.length, 1],
      kernelSize: 100,
      filters: 8,
      strides: 2,
      activation: 'relu',
      kernelInitializer: 'VarianceScaling'
    }))

    model.add(tf.layers.maxPooling1d({
      poolSize: [500],
      strides: [2]
    }))

    model.add(tf.layers.conv1d({
      kernelSize: 5,
      filters: 16,
      strides: 1,
      activation: 'relu',
      kernelInitializer: 'VarianceScaling'
    }))

    model.add(tf.layers.maxPooling1d({
      poolSize: [100],
      strides: [2]
    }))

    model.add(tf.layers.dense({
      units: 10,
      kernelInitializer: 'VarianceScaling',
      activation: 'softmax'
    }))

    return resolve({
      'model': model,
      'out': model.getLayer('dense_Dense1'),
      'originalData': data
    })
  })
}

/**
 * TensorFlow.js
 *
 * See: https://medium.com/tensorflow/a-gentle-introduction-to-tensorflow-js-dba2e5257702
 */

const cnn = function (model, data, cycles) {
  const tdates = tf.tensor1d(data.dates),
    thighs = tf.tensor1d(data.highs),
    test = tf.tensor1d(d.test_times)

  modelHelper(model)

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      try {
        model.compile({optimizer: 'sgd', loss: 'binaryCrossentropy', lr: 0.1})

         model.fit(
           tdates,
           thighs, {
            batchSize: 3,
            epochs: cycles
          }).then(function () {
          print('')
          print('Running CNN for AAPL at ' + cycles + ' epochs')
          print(model.predict(test))
          print(d.test_highs)
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

print('Beginning AAPL CNN tests at ' + new Date() + '... this may take a while!')
fetchWrapper('http://localhost:5555/api/').then(function (data) {
  prep(data).then(function (result) {
    buildCnn(result).then(function (built) {
      cnn(built.model, built.originalData, 100).then(function (e) {
        print('Completed tests at ' + new Date() + '... thanks for waiting!')
      })
    })
  })
})