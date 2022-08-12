import { PureComponent } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import ProductDescriptionPage from './pages/ProductDescriptionPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.component';
import CartPage from './pages/CartPage';
import NavBar from './components/NavBar';
import styled from "styled-components";



const PageWrapper = styled.div`
  min-height: 100vh;
  width: 1238px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
`;

export class AppContainer extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <PageWrapper>
          <BrowserRouter>
            <NavBar />
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/all" component={ProductListPage} />} />
              <Route exact path="/cart" component={CartPage} />
              <Route exact path="/:category" component={ProductListPage} />
              <Route exact path="/:category/:id" component={ProductDescriptionPage} />
              <Route exact path="/404" component={NotFoundPage} />
            </Switch>
          </BrowserRouter>
        </PageWrapper>
      </Provider>
    );
  }
}

export default AppContainer;