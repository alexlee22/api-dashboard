# api-dashboard

## To-Do List

This is still a work in progress, and therefore has a lot of work to be done! Here is a list of future works:

- Styles,
    - Shadows (boxes, text and rotating arrow)
    - Allocate set FONTS and COLOR
- Redesign NEWS section with CSS Animation:
    - Looks choppy and not smooth
- Add a weather forecast
    - Graph for the next X hours
- Background:
    - Add an option to get animated videos
    - Decrease file sizes of the background
    - Cycle through images/videos based on the time
- Remove React-Hot-Loader
- Add RPI Setup
    

## Setup

This build was created using `Node v11.11.0` and `npm v6.7.0`. Ensure both can be run through your command line (CMD). You can [download NodeJS here.](https://nodejs.org/en/download/)

It is recommended to view in a Google Chrome or Chromium browser. You can [download Chrome here.](https://www.google.com/chrome/) To install Chromium on a Raspberry PI [(Credits:)](https://tutorials-raspberrypi.com/google-chrome-for-raspberry-pi/)

1. Update your RPI `sudo apt-get update`,
2. Install Chromeium `sudo apt-get install chromium-browser --yes`

### API Keys

The information we use doesn't come from your imagination `or mabee it does?` Before using your dashboard, you have to get some API keys!

#### NEWS

I use [newsapi.org](https://newsapi.org/) for our news source. It is currently set to receive news from [ABC Australia.](https://www.abc.net.au/). 
To modify the source of news, check out their API documentation [here!](https://newsapi.org/docs).

Their API keys are avalible to developers for non-commercial uses, follow their prompts for guidance to getting a commercial key. To get a developer key:

1. Sign up & in,
2. Click on your email address in the top right corner,
3. Generate a key,
4. Copy your key into the file `./src/const.js` in the parameter `NEWS_API_KEY`,
5. Note: ensure to leave `&apiKey=` before your key

```
export const NEWS_API_LINK = 'https://newsapi.org/v2/top-headlines?sources=abc-news-au';
export const NEWS_API_KEY = '&apiKey=<YOUR KEY HERE>';
```

#### WEATHER

I used [OpenWeatherMap](https://openweathermap.org/) to get weather data for Sydney, Australia. You will need to set the location by finding the ID of the city by downloading the list on this [site (look for the link under the title `Tips on how to use API effectively`.)](https://openweathermap.org/appid)

This API keys is licenced under the Creative Commons 4 and can be used for both commercial and non-commercial use (always check their site for more details before commercial use). However, there are limitations to the free version such as a limit on the number of calls. To get a developer key:

1. Sign up & in,
2. On the main page after login in the middle click on `API Keys`,
3. Create a key with a name,
4. Copy your key into the file `./src/const.js` in the parameter `WEATHER_API_KEY`

```
export const WEATHER_API_LINK = 'https://api.openweathermap.org/data/2.5/weather?id=7839759&units=metric&appid=';
export const WEATHER_API_KEY = '<YOUR KEY HERE>;
```

### Install and Run

First, install NPM packages by running `npm install`. Then see if you wish to `run` or `build`:

- Run compiles the site and hosts the site locally. To run use the command `npm run dev` and navigate to `localhost:1234` in your web browser (recommended chrome). Another port will be announced if `1234` is already in use.
- Build compiles the site but does not host, the static files can then be used for hosting. To build the files use `npm run build` and the files will appear in a folder labelled `dist`. If you wish to host the dashboard through GitHub pages and are not using `username.github.io`, run open `package.json` and replace `/api-dashboard/` with your repo name, then run `npm run buildGHPages` in your command line.

## Image References

Image references can be found in their own `README` file [here!](https://github.com/alexlee22/api-dashboard/blob/master/src/images/README.md)

## BONUS

### GitHub Pages Hosting

You might have noticed that there are two different builds in the `package.json` file. See the second half of `Build` in the "Install and Run chapter" using the command `npm run buildGHPages`. You can check out more information on [GitHub Pages here!](https://pages.github.com/)

### RPI Setup

SoonTM

## ETC

Have fun and stay frosty!

Licence: [MIT](https://choosealicense.com/licenses/mit/)