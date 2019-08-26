# gatsby-plugin-drift

Easily add Drift (drift.com) to your Gatsby site.

## Install

`yarn add gatsby-plugin-drift`

## Usage

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: 'gatsby-plugin-drift',
    options: {
      appId: 'YOUR-APP-ID',
      enableDuringDevelop: true // Optional. Enables Drift chat widget when running Gatsby dev server. Defaults to false.
    },
  },
],
```
