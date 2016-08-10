# JWPlayer for Meteor (v1.4+)
Integrate a CDN hosted version of JWPlayer using your own license.

NOTE: This version only works with JWPlayer v7

## Install

```
npm install bas-meteor-jwplayer
```

## Setup

Load globally:

```js
import { JWPlayer } from 'bas-meteor-jwplayer';

JWPlayer.load('YOUR_KEY_HERE');
```

Or only on specific routes:

```js
import { JWPlayer } from 'bas-meteor-jwplayer';

// Iron Router
Router.onBeforeAction(function() {
  JWPlayer.load('YOUR_KEY_HERE');
  this.next();
}, { only: ['route1', 'route2'] });
```

```js
import { JWPlayer } from 'bas-meteor-jwplayer';

// Flow Router
FlowRouter.triggers.enter([JWPlayer.load('YOUR_KEY_HERE')], {
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
import { JWPlayer } from 'bas-meteor-jwplayer';

// use JWPlayer.loaded() to reactively check that the lib is ready
Template.myTemplate.onRendered(function() {
  this.autorun(function() {
    if (JWPlayer.loaded()) {
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
