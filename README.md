# RN WEB monorepo

## STEP 1

1. After initializing the project with `react-native init` format the root dir structure (to use yarn workspaces -> split into mobile web and components)

2. Move everything except `.git` to mobile part of the dir

2a. Rename `name` in package.json in mobile to `mobile`

3. Make new package.json in root

4. Install RN in the root again (while also removing node_modules from mobile)

5. Find all and replace -> `node_modules/react-native/` into `../../node_modules/react-native/` (I had to also manualy fix one path in Pods)

6. Edit AppDelegate and metro.config.js as in here: https://dev.to/brunolemos/tutorial-100-code-sharing-between-ios-android--web-using-react-native-web-andmonorepo-4pej

7. You can run the mobil commands form the root with prefixing it with `yarn workspace mobile` (e.g. for metro `yarn workspace mobile start` and for simulator `yarn workspace mobile ios --simulator="NAME"`)

> for IOS manual path fix in Pods for `node_modules/@react-native-community`

## Step 2 - Android changes

manual path fix in `android/app/build.gradle` and `android/settings.gradle` -> relative paths for `node_modules/@react-native-community`

```
apply from: file("../../../node_modules/@react-native-community/cli-platform-android/native_modules.gradle");
```
