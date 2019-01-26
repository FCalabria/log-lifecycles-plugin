export default {
  install: (Vue) => {
    if (process.env.NODE_ENV === 'production') return
    const mixin = {}
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
    const lifecycles = Object.keys(config)
    function logLivecycle (componentName, lifecycle) {
      const lifecycleConfig = config[lifecycle]
      console.log(`%c ${componentName} ${lifecycleConfig.msg}`, `color:${lifecycleConfig.color}`)
    }
    lifecycles.forEach((name) => { mixin[name] = function () { logLivecycle(this.$options.name, name) } })
    Vue.mixin(mixin)
  }
}

