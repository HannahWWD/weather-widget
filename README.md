# weather-widget

The weather widget is a one-week personal project to get my hands dirty on TypeScript features such as type checking, decorators and interfaces. The web app detects user input (with a autocomplete feature) to update multiple components with designated city's weather and image data. A lazing loading library with blurry effect is used to handle the latency of downloading high-solution background images.

## Demo

### Try out live demo [**HERE**](https://clever-minsky-d826e4.netlify.app/).


## Getting Start

Before start, make sure Typescript is installed globally. `npm install -g typescript`

To run the app in development mode, run:
```
npm i 
npm start
```
The app should now run properly at **port 8080**.

To optimized production code, use `npm run build`.

## Limitations

- The app currently only works with American cities.
- The User location detection feature was added in the app.ts and reversedGeo.ts but disabled due to the slow fetching speed. 

## License
All the content within this repository is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/) unless otherwise specified





