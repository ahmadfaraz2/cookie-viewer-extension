# Cookie Viewer Extension

## Overview

Cookie Viewer is a Chrome extension that allows users to view and analyze cookies on the current website. The extension displays detailed attributes of each cookie in a side panel.

## Features

- View cookies in a side panel.
- Display detailed cookie attributes including name, value, domain, expiration date, secure flag, HttpOnly flag, and SameSite attribute.
- Responsive design to enable both horizontal and vertical scrolling.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ahmadfaraz2/cookie-viewer-extension.git
   ```

## Why This Extension?

The question is, "Why did I make this extension even though I had never created an extension before?"

Basically, I'm learning about cookies and sessions from Dr. Angela Yu's Web Development course. The course is from 2019 and it featured an older version of the Chrome browser that showed cookies in settings. However, in the current version, we don't see cookies in the settings; we have to go to DevTools > Application > Storage > Cookies. So, I came up with the idea to make an extension called Cookie Viewer. You can check this out.

## Development History

### First Version

In the first version of the Cookie Viewer extension, I created a popup to display cookie information. This was a simple approach and allowed for basic functionality to view cookies on the current website.

### Second Version (Final)

After exploring the Chrome Developer API further, I discovered the ability to open extensions in a side panel. This approach provided a more convenient and user-friendly way to display detailed cookie information without interrupting the browsing experience. Consequently, I updated the extension to use a side panel instead of a popup for the final version.

