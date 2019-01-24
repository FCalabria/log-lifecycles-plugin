# Vue lifecycle log

> A Vue.js plugin to log lifecycles of the components

## Usage

Installation

```sh
npm install --save vue-lifecycle-log
```

Import it on your entry file (normally `main.js`) and use it with Vue. It is automatically disabled on production mode.

```javascript
import Vue from 'vue'
import LogLifecycles from 'vue-lifecycle-log'

Vue.use(LogLifecycles)
```

It uses the component's `name` for logging, so if you don't have it defined, it will print undefined

## Lifecycles supported

Right now it logs only the following lifecycles:

- Created
- Mounted
- Updated
- Activated
- Deactivated
- Destroyed
