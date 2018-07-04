window.onload = function () {

  /**
   * See: https://www.tensorflow.org/tutorials/deep_cnn
   * See: https://js.tensorflow.org/
   * See: https://github.com/tensorflow/tfjs-examples
   */

  var CONSTANTS = {
    LEARNING_RATE: .1,
    BATCH_SIZE: 64,
    TRAIN_STEPS: 100,
    IMAGE_SIZE: 28,
    LABELS_SIZE: 10,
    STRIDES: 2,
    PAD: 0
  }

  /**
  var loss = function (labels, ys) {
    return tf.losses.softmaxCrossEntropy(labels, ys).mean()
  }

  var model = function (inputXs) {
    var xs = inputXs.as4D(-1, CONSTANTS.IMAGE_SIZE, CONSTANTS.IMAGE_SIZE, 1)
    var layer1 = tf.tidy(() => {
      return xs.conv2d(conv1Weights, 1, 'same')
        .relu()
        .maxPool([2, 2], CONSTANTS.strides, CONSTANTS.pad)
    })
    var layer2 = tf.tidy(() => {
      return layer1.conv2d(conv2Weights, 1, 'same')
        .relu()
        .maxPool([2, 2], CONSTANTS.strides, CONSTANTS.pad)
    })
    return layer2.as2D(-1, fullyConnectedWeights.shape[0])
      .matMul(fullyConnectedWeights)
      .add(fullyConnectedBias)
  }
   */

}