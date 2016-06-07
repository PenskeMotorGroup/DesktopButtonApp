<p align="center">
  <img src="https://raw.githubusercontent.com/tylermakin/DesktopButtonApp/master/assets/screenshot.png" alt="screenshot" />
</p>

# Desktop Button Chrome App

This is a simple Internet of Things style button :red_circle: for your computer's desktop :computer:, configured as a Chrome App :mag:. The button can be configured to display on top of all other windows and is draggable :hand: to anywhere on your screen. Because it runs entirely on CSS, HTML, and JavaScript, the button is easy to edit :pencil: for anyone with basic web programming knowledge.

The button ties in to any backend with API integration :phone: via a simple XMLHttpRequest. By using pure JavaScript :scroll: and the Chrome App architecture, this is an extremely lightweight tool :wrench: for anyone looking to add function to their personal computer :smile: or distribute a tool to a wider audience. :family:

## Customize Function

To customize the URL :globe_with_meridians: called by clicking the button :red_circle:, add the full path to `scripts/click.js` and add the root directory to `manifest.json`. Don't forget to add permissions :lock_with_ink_pen: for `http` and `https` if you will be using both.

```
"permissions": [
  "http://www.google.com/",
  "https://www.google.com/"
]
```

Read more about Chrome App-specific considerations [here](https://developer.chrome.com/apps/xhr). :books:

## Distribution

Want to share the magic :tada: with others? Learn more about [hosting](https://developer.chrome.com/apps/hosting) and [packaging](https://developer.chrome.com/apps/packaging). You can even set up automatic updates, public distribution, and more!

<p align="center">
  <img src="https://raw.githubusercontent.com/tylermakin/DesktopButtonApp/master/img/button.png" alt="screenshot" height="200" />
</p>
