import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Preloader from "./components/preloader";
import Index from "./pages/app/Index";
import Transactions from "./pages/app/transactions";
import Notfound from "./pages/errors/notfound";
import ErrorRequest from "./pages/errors/errorRequest";
import { useSelector } from "react-redux";
import "./assets/css/style.css";
import { RootState } from "./state/reducers"
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({ dsn:process.env.REACT_APP_SENTRY_DSN || 'https://1e06c79ba484483fbbdb988c0f79ba6f@o1050192.ingest.sentry.io/6031430', 
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0, 
});


export const App = () => {
  const { loading } = useSelector((state: RootState) => state.preloader);
  return (
    <React.Fragment>
    <Preloader loading={loading} />
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/transaction/:transactionId" component={Transactions} />
        <Route path="/error" component={ErrorRequest} />
        <Route path="*" component={Notfound} />
      </Switch>
      </Router>
    </React.Fragment>
  );
};
export default App;
