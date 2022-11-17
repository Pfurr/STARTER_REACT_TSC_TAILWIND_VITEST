/* eslint-disable no-useless-escape */
import { describe } from 'vitest'

//! RTL
import { cleanup, render, screen } from '../../../utils/testUtilsRTL'

// COMP
import App from '../../App'

afterEach(cleanup)

describe('App', () => {
  test('prints out initial contents of the DOM', () => {
    render(<App />)
    screen.debug()
  })
})
