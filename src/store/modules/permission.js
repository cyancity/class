import { asyncRouterMap, constantRouterMap } from '@/router'

function hasPermission (roles, route) {
  // judge permission to routes
  if (route.mata && route.meta.role) {
    return roles.some(role => route.meta.role.indexOf(role) >= 0)
  } else {
    return true
  }
}

function filteAsyncRouter (asyncRouterMap, roles) {
  // if has permission to async routes filter by role and generate accessedRouters
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filteAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  console.log(accessedRouters)
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      // add routes after const routes by user role
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes ({ commit }, data) {
      return new Promise(resolve => {
        const { roles } = data
        let accessedRouters
        if (roles.indexOf('admin') >= 0) {
          // admin can access to any routes
          accessedRouters = asyncRouterMap
        } else {
          // filter async routes by role
          accessedRouters = filteAsyncRouter(asyncRouterMap, roles)
        }
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
