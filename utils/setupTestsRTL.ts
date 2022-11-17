import '@testing-library/jest-dom'

import { fetch } from 'cross-fetch'

//**** SETTINGS MWS SERVER */
// src/setupTests.js -> ts

// Add `fetch` polyfill.
global.fetch = fetch

//! -> no extention need
import { server } from '../mocks/server'

// Establish API mocking before all tests.
beforeAll(() => server.listen()) // Default

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())
