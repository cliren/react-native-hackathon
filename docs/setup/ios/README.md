## iOS

####  Setup
The following instructions are taken from [React Native](https://facebook.github.io/react-native/docs/getting-started.html#content) 
and customized for this project.

* OS X - This guide assumes OS X which is needed for iOS development.
* Homebrew is the recommended way to install Watchman.
* Install Node.js 4.0 or newer.
  * Install nvm with its setup instructions [here](https://github.com/creationix/nvm#installation).. 
   Then run nvm install node && nvm alias default node, which installs the latest version of Node.js and sets 
   up your terminal so you can run it by typing node. With nvm you can install multiple versions of Node.js 
   and easily switch between them.
  * Make sure the following lines are added to your .bash_profile to make sure the right version of node is set.
   
   ```js
   . ~/.nvm/nvm.sh
   # You can set a custom node version to be used if required. Check `nvm list` to find the versions installed.
   # nvm use v5.1.0
   ```
* brew install watchman. We recommend installing watchman, otherwise you might hit a node file watching bug.