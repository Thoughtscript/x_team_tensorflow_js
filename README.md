# x_team_tensorflow_js

WIP: X-Team <a href="https://js.tensorflow.org/">**TensorFlow.js**</a> Stock Prediction Example.

Presently only the `Logic` example is 100% - it includes all basic logic operations implemented in client-side TensorFlow.js RNN.

# Examples

Logic training with `100` epochs:

![100](https://github.com/Thoughtscript/x_team_tensorflow_js/blob/master/images/Logic100.PNG)

Logic training with `1200` epochs:

![1200](https://github.com/Thoughtscript/x_team_tensorflow_js/blob/master/images/Logic1200.PNG)

# Installation and Set Up

Setup and installation instructions:

### Linux

In order to improve performance and better leverage parallel, asynchronous, processes this example was rearchitected with most of the work put into the server.

We now make heavy use of the great **npm** libraries:

1. <a href="https://github.com/tensorflow/tfjs">**tfjs**</a>.
2. <a href="https://github.com/tensorflow/tfjs-node">**tfjs-node**</a>.
3. <a href="https://github.com/tensorflow/tfjs-node-gpu">**tfjs-node-gpu**</a>.

And as a result of that, this example <a href="https://stackoverflow.com/questions/51004170/unable-to-npm-install-tensorflow-tfjs-node">requires using Linux</a> in order to achieve full functionality!

**For NVM on Linux:**

```bash
#!/usr/bin/env bash

echo "Updating OS"
sudo apt-get update

echo "Installing NVM"
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.4/install.sh | bash

echo "Installing Linux Dependencies"
sudo apt-get install build-essentials
```

**For NVM on Windows Linux Subsystem:**

***(This approach is recommended for running the app only!)***

1. See this great <a href="https://blogs.msdn.microsoft.com/commandline/2017/10/27/running-node-js-on-wsl-from-visual-studio-code/">article</a> for more!
2. Access your Linux workspace <a href="https://www.howtogeek.com/261383/how-to-access-your-ubuntu-bash-files-in-windows-and-your-windows-system-drive-in-bash/">**directly in your usual Windows text-editor**</a>.

E.g. - Access this repo in Windows directory: `C:\Users\MY_WINDOWS_USER\AppData\Local\Packages\CanonicalGroupLimited.UbuntuonWindows_7...c\LocalState\rootfs\home\u\x_team_tensorflow_js`

3. If you run into an <a href="https://github.com/Microsoft/WSL/issues/14">**Error: EACCESS: permission denied**</a> issue during installation try:

```bash
    $ sudo chown -R u:p node_modules
    $ sudo chown -R u:p u/.nvm
```
### Node and NPM

Setup instructions:
```bash
    $ npm install
    $ npm run start
```

Views:
```
    http://localhost:5555/logic
    http://localhost:5555/cnn
    http://localhost:5555/rnn
```

# Licensing

MIT Licensed!

# Shout Outs

To my knowledge this is perhaps one of the first 100% JavaScript **Stock Prediction** examples (either using a *Recurrent Neural Net* or a *Convolutional Neural Net*) and probably the first for TensorFlow.js:

1. **John Murphy's** outstanding <a href="https://www.linkedin.com/pulse/trading-penny-stocks-nodejs-robinhood-api-john-murphy/">**pure-node implementation**</a>.
2. **karthikbadam's** <a href="https://github.com/encog/encog-javascript">**Encog-based**</a> <a href="https://github.com/karthikbadam/TimeFork">**TimeFork**</a>.

Other great resources:

3. **TensorFlow's** Official <a href="https://www.tensorflow.org/tutorials/deep_cnn">**CNN**</a> Article!
4. **Firdaouss Doukkali's** great introductory <a href="https://medium.com/@phidaouss/convolutional-neural-networks-cnn-or-convnets-d7c688b0a207">**article**</a>!
5. A great <a href="https://github.com/Ronak-59/Stock-Prediction">**full-stack example leveraging Python, PHP, and JavaScript**</a>.
6. Special thanks to <a href="https://medium.com/tensorflow/a-gentle-introduction-to-tensorflow-js-dba2e5257702">**Zaid Alyafeai**</a> for several crystal-clear code samples!
