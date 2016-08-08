# JWPlayer for Meteor
Integrate a CDN hosted version of JWPlayer using your own license.

NOTE: This version only works with JWPlayer v7

## Install

```
npm install bas-meteor-jwplayer
```

## Setup

Load globally:

```js
Bas_JWPlayer.load('YOUR_KEY_HERE');
```

Or only on specific routes:

```js
// Iron Router
Router.onBeforeAction(function() {
  Bas_JWPlayer.load('YOUR_KEY_HERE');
  this.next();
}, { only: ['route1', 'route2'] });
```

```js
// Flow Router
FlowRouter.triggers.enter([Bas_JWPlayer.load('YOUR_KEY_HERE')], {
  only: ['route1', 'route2']
});
```

## Config

Template HTML

```html
<template name="myTemplate">
  <div id="player"></div>
</template>
```

Template JS

```js
// use Bas_JWPlayer.loaded() to reactively check that the lib is ready
Template.myTemplate.onRendered(function() {
  this.autorun(function() {
    if (Bas_JWPlayer.loaded()) {
      jwplayer('player').setup({
        file: 'http://example.com/my-video.mp4',
        width: '100%',
        aspectratio: '16:9',
        autostart: true
      });
    }
  });
});
```

## Resources

- [JWPlayer Homepage](http://www.jwplayer.com/)
- [JWPlayer Support/Docs](http://support.jwplayer.com/)
- [JWPlayer Javascript API](http://support.jwplayer.com/customer/portal/topics/564475-javascript-api/articles)
