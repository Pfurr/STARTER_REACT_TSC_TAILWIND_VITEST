/* eslint-disable no-useless-escape */
import { describe, expect } from 'vitest'

//! RTL
import { cleanup, render, screen } from '../../../utils/testUtilsRTL'

// MSW
import { rest } from 'msw'
import { server } from '../../../mocks/server'

// COMP
import Demo, { API_URL } from '../../components/Demo'

afterEach(cleanup)

//? SUCCESSFUL TEST - if MSW is available in src/main.tsx
//! the current test by defaul setting will still be passed even if msw is disabled, returning a 'false positive'.
describe('Demo component - testing mocked data', () => {
  test('renders correctly', () => {
    // get
    render(<Demo />)

    // act
    const textElement = screen.getByText(
      'Users - Demo component - check if Msw is working?'
    )

    // assert
    expect(textElement).toBeInTheDocument()
  })

  test('renders a list of fake users', async () => {
    // get
    render(<Demo />)

    // act
    const users = await screen.findAllByRole('listitem')

    // assert
    expect(users).toHaveLength(3)
    expect(users[0]).toHaveTextContent('Tuco')
    expect(users[1]).toHaveTextContent('Biondo')
    expect(users[2]).toHaveTextContent('Sentenza')
    // expect(users[2]).toHaveTextContent('SentenzaSSSSSSS') // expect test to fail
  })

  test('renders error', async () => {
    // setup api mock api server
    server.use(
      rest.get(API_URL, (req, res, ctx) => {
        return res(ctx.status(500))
      })
    )
    // get
    render(<Demo />)

    // act
    const error = await screen.findByText('Error fetching users')
    // const error = await screen.findByText("Error Data get fetching.....fail"); // expect test to fail

    // assert
    expect(error).toBeInTheDocument()
  })
})
