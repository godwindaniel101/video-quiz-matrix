import BlockTableComponent from '../components/block/BlockTableComponent';
import { render, } from '@testing-library/react'
import { store } from '../state/store'
import { Provider } from 'react-redux'

describe("Block Table", () => {
  describe("given no contacts", () => {
    const { getByText } = render(<Provider store={store}><BlockTableComponent /></Provider>);

    it("Shoould have 'Block Index' in the table created", () => {
      const actual = getByText(/Block Index/i);
      expect(actual).toBeInTheDocument();
    });
  });
});