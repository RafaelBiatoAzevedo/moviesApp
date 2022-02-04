# MOVIES APP

## Intoduction

Application created in React Native CLI that lists popular movies, ranked, playing in cinema and theatrical releases, and their details.

## Technologies used

### Languages

- JavaScript
- TypeScript

### Frameworks

- React-Native-CLI
- Redux

### Libraries

- axios
- react-native-dropdown-picker
- react-native-responsive-screen
- react-native-vector-icons
- styled-components

### API

https://developers.themoviedb.org/3/


## Installations

### Run
- step 1 - 
  yarn start or npm start
  
- step 2 - 
  yarn android or npm run android

### Generate APK

- step 1 - 
yarn android_clean or npm run android_clean

- step 2 - 
yarn/npm react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

- step 3 - 
cd android

- step 4 - 
get app.debug.apk in moviesapp/android/app/build/outputs/apk/debug/app.debug.apk



----------

> This is a challenge by onBank
