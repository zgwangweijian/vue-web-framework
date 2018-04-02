import { fetch } from './fetch'

const apiPrefix = '/api'

export function getAuthorizedMenus () {
  return fetch({
    url: apiPrefix + '/w/authorizations/myAuthorizedMenus',
    method: 'get'
  })
}
