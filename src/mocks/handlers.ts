import { http, HttpResponse } from 'msw'
 
export const handlers = [
  http.get('https://mockservice.com/data/v1/energy-consumption', () => {
    return HttpResponse.json({
        "timestamp": "2024-08-14T10:00:00Z",
        "consumption": 5.8,
        "savings": 2.4
    })
  }),
]