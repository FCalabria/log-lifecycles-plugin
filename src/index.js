const config = {
  beforeCreate: {msg: 'is about to be created', color: '#04B431'},
  created: {msg: 'was created', color: '#04B431'},
  beforeMount: {msg: 'is about to be mounted', color: '#58ACFA'},
  mounted: {msg: 'was mounted', color: '#58ACFA'},
  beforeUpdate: {msg: 'is about to be updated', color: '#DBA901'},
  updated: {msg: 'was updated', color: '#DBA901'},
  activated: {msg: 'was activated', color: '#0101DF'},
  deactivated: {msg: 'was deactivated', color: '#B404AE'},
  beforeDestroy: {msg: 'is about to be destroyed', color: '#800000'},
  destroyed: {msg: 'was destroyed', color: '#800000'},
  errorCaptured: {msg: 'error', color: '#e60000'}
}

function throwError (msg) {
  throw new Error(`LogLifecycles plugin error: ${msg}`)
}

function filterLifecycles (name) {
  if (config.hasOwnProperty(name)) return true
  console.log(`LogLifecycles plugin: ${name} is not a valid lifecycle`)
}

export default {
  install: (Vue, { lifecycles = [] } = {}) => {
    if (process.env.NODE_ENV === 'production') return
    if (!Array.isArray(lifecycles)) throwError('lifecycles option must be an array')

    const mixin = {}
    const lifecyclesToLog = lifecycles.length === 0
      ? Object.keys(config)
      : lifecycles.filter(filterLifecycles);

    function logLivecycle (componentName, lifecycle) {
      const lifecycleConfig = config[lifecycle]
      console.log(`%c ${componentName} ${lifecycleConfig.msg}`, `color:${lifecycleConfig.color}`)
    }

    lifecyclesToLog.forEach((name) => {
      mixin[name] = function () {
        logLivecycle(this.$options.name, name)
      }
    })

    Vue.mixin(mixin)
  }
}

