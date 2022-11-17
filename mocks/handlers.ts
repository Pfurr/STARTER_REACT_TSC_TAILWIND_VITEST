// LINK docs: https://mswjs.io/docs/getting-started/mocks/rest-api
import { rest } from 'msw'

export const handlers = [
  //? 1° - mocked call api
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    const DATA_FAKE_RETURNED = [
      {
        id: 1,
        username: 'Tuco'
      },
      {
        id: 2,
        username: 'Biondo'
      },
      {
        id: 3,
        username: 'Sentenza'
      }
    ]
    // console.log('MSW_DATA_RETURNED =', DATA_FAKE_RETURNED)
    return res(ctx.status(200), ctx.json(DATA_FAKE_RETURNED))
  })
]
