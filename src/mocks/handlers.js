import { http, HttpResponse } from 'msw'

import { API_BASE_URL } from '../../src/utils'
import activities from '../activities'
const URL = API_BASE_URL
export const handlers = Object.values(activities).map(activity => {
  return http[activity.method.toLowerCase()](`${URL}/${activity.url}`, ({ request }) => {
    console.log({ request })
    return HttpResponse.json(activity.response)
  })
})