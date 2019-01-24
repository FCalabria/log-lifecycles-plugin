export default {
  install: (Vue) => {
    if (process.env.NODE_ENV === 'production') return
    const mixin = {}
    const config = {
      created: {msg: 'was created', color: '#04B431'},
      mounted: {msg: 'was mounted', color: '#58ACFA'},
      updated: {msg: 'was updated', color: '#DBA901'},
      activated: {msg: 'was activated', color: '#0101DF'},
      deactivated: {msg: 'was deactivated', color: '#B404AE'},
      destroyed: {msg: 'was destroyed', color: '#B40404'}
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

