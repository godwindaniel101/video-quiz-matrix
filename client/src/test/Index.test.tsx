import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'
import { Provider } from 'react-redux'
import { store } from '../state/store'

describe('Testing Rest Services', () => {
  test('renders learn react link', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    )
    const linkElement = screen.getByText('Quick Blocks')
    expect(linkElement).toBeInTheDocument()
  })
})
