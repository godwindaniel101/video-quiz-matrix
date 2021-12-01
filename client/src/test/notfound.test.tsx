import { render, screen } from '@testing-library/react'
import Notfound from '../pages/errors/notfound'
import { Provider } from 'react-redux'
import { store } from '../state/store'

describe('Tesing Error Page', () => {
  test('should have 404 Route not found', () => {
    render(
      <Provider store={store}>
        <Notfound />
      </Provider>,
    )
    const linkElement = screen.getByText('404 Route not found')
    expect(linkElement).toBeInTheDocument()
  })
})
