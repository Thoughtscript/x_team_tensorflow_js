# x_team_tensorflow_js

X-Team <a href="https://js.tensorflow.org/">**TensorFlow.js**</a> Stock Prediction Example.

# Examples

Logic training with `100` epochs:

![100](https://github.com/Thoughtscript/x_team_tensorflow_js/blob/master/images/Logic100.PNG)

Logic training with `1200` epochs:

![1200](https://github.com/Thoughtscript/x_team_tensorflow_js/blob/master/images/Logic1200.PNG)

# Installation and Set Up

In order to improve performance and better leverage parallel, asynchronous processes this example was rearchitected with most of the work put into the server.

We know make heavy use of the great **npm** libraries:

1. <a href="https://github.com/tensorflow/tfjs">**tfjs**</a>.
2. <a href="https://github.com/tensorflow/tfjs-node">**tfjs-node**</a>.
3. <a href="https://github.com/tensorflow/tfjs-node-gpu">**tfjs-node-gpu**</a>.

But as a result of that, this example <a href="https://stackoverflow.com/questions/51004170/unable-to-npm-install-tensorflow-tfjs-node">requires using Linux</a> in order to achieve full functionality!

On Windows, this can be accomplished using the new Linux Subsystem: see this great<a href="https://blogs.msdn.microsoft.com/commandline/2017/10/27/running-node-js-on-wsl-from-visual-studio-code/">article</a>.

For NVM on Linux:

```bash
#!/usr/bin/env bash

echo "Updating OS"
sudo apt-get update

echo "Installing NVM"
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.4/install.sh | bash
```

Setup instructions:
```bash
    $ npm install
    $ npm run start
```

Views:
```
    http://localhost:5555/logic
    http://localhost:5555/aapl
```

# Licensing

MIT Licensed!

# Shout Outs

To my knowledge this is perhaps one of the first fully JavaScript **Stock Prediction** examples (either using a *Recurrent Neural Net* or a *Convolutional Neural Net*):

1. **John Murphy's** outstanding <a href="https://www.linkedin.com/pulse/trading-penny-stocks-nodejs-robinhood-api-john-murphy/">**pure-node implementation**</a>.
2. **karthikbadam's** <a href="https://github.com/encog/encog-javascript">**Encog-based**</a> <a href="https://github.com/karthikbadam/TimeFork">**TimeFork**</a>.

Other great resources:

3. **TensorFlow's** Official <a href="https://www.tensorflow.org/tutorials/deep_cnn">**CNN**</a> Article!
4. **Firdaouss Doukkali's** great introductory <a href="https://medium.com/@phidaouss/convolutional-neural-networks-cnn-or-convnets-d7c688b0a207">**article**</a>!
5. A great <a href="https://github.com/Ronak-59/Stock-Prediction">**full-stack example leveraging Python, PHP, and JavaScript**</a>.
6. Special thanks to <a href="https://medium.com/tensorflow/a-gentle-introduction-to-tensorflow-js-dba2e5257702">**Zaid Alyafeai**</a> for several crystal-clear code samples!