import { render, screen } from '@testing-library/react'
import ErrorRequest from '../pages/errors/errorRequest'
import { Provider } from 'react-redux'
import { store } from '../state/store'

describe('Tesing Error Page', () => {
  test('should have Something went wrong', () => {
    render(
      <Provider store={store}>
        <ErrorRequest />
      </Provider>,
    )
    const linkElement = screen.getByText('Something went wrong')
    expect(linkElement).toBeInTheDocument()
  })
})
