import { rest } from 'msw'

export default [
  rest.post('/authenticate', (req, res, ctx) => {
    return res(
      ctx.json({
        message: 'Authenticated Successfully!'
      })
    )
  })
]
