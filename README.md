# Hack Day Notes

If you haven't installed the required tools necessary, follow the [docs](http://goodreads.github.io/react-native-hackathon/index.html)
to get your environment setup. Please download XCode if you haven't already (required to work on an iOS app).



### Getting started

This repo will serve as a starting point for the hack day project. It has basic code organization (for maximum reusablity between
android and iOS platforms), starting pages, data store examples


Follow the below instructions to get started.

```
$ git clone git@github.com:goodreads/react-native-hackathon.git
$ git checkout hack_day
$ npm run setup
```

### Running the app (iOS)

* Open /Explore/ios/Explore.xcodeproj project using XCode
* Hit run to start node server (serving the JS files) and the simulator
* Open /Explore in your favorite editor and start editing the JS files
* Press ⌘ + R in the simulator to see the changes


### Running the app (android)

* Open /Explore/android project using Android Studio
* Download http://www.genymotion.com simulator
* Run the android project
* Open /Explore in your favorite editor and start editing the JS files
* Press the menu button (F2 by default, or ⌘-M in Genymotion) and select Reload JS to see your change!


###Features

Design will share screen ideas and discussions will follow on Slack!

###### Loading Screen

* Design a loading screen with a logo (work with design team)

###### Home Screen

* Display a list view of listopia, genres and popular books
  * Each list item should display the list name
  * List items should be categorized by section headers (see current iOS app)
  * Tapping on a list item should display books in a list (same rule applies to genres and popular books)
  
###### Book List page

* Displays a list of books
  * Each book has an image, title, author and other information (see current iOS app)
  * Tapping on a list item should display a book page
  
###### Book page

* Displays book contents (see current app)
  * Should display a centered book image (get creative with scrollable view, look for other React Native modules to use)
  * Should display other book information
  
###### Navigation

* Child views should support navigation toolbar to go back to previous pages. Check https://facebook.github.io/react-native/docs/navigator.html#content and other docs.

  
### Tech Stack References

* ES6 (latest JavaScript framework) http://es6-features.org/
* React (View framework) https://facebook.github.io/react/
* Redux (data store framework) https://github.com/rackt/redux
* Lodash (JavaScript utility library) http://www.lodash.com