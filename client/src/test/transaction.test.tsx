import TransactionComponent from "../components/transaction/TransactionComponent";
import { render } from "@testing-library/react";
import { store } from "../state/store";
import { Provider } from "react-redux";
import { Route, MemoryRouter } from "react-router";

const hashId = "00000000000000000000e661028aa65df025494e91117431eb6bdf8e715daeb4";
describe("Block Table", () => {
  describe("given no contacts", () => {
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`transaction/${hashId}`]}>
          <Route path="transaction/:transactionId">
            <TransactionComponent />
          </Route>
        </MemoryRouter>
      </Provider>
    );

    it("Should have 'hash key' in the table created", () => {
      const actual = getByText('Quick Block');
      expect(actual).toBeInTheDocument();
    });
  });
});
