/* eslint-disable object-curly-newline */
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { AuthContext } from './context';
import GlobalTemplate from './templates/GlobalTemplate';
import Homepage from './views/pages/Homepage';
import Categories from './views/pages/Categories';
import Series from './views/pages/Series';
import Contact from './views/pages/Contact';
import Glossary from './views/pages/Glossary';
import AdminArticles from './views/admin/AdminArticles';
import AdminArticleTypes from './views/admin/AdminArticleTypes';
import AdminGlossary from './views/admin/AdminGlossary';
import Login from './views/admin/Login';
import { useAuth } from './hooks/useAuth';

const App = () => {
  const authHandler = useAuth();
  const {
    isLoggedIn,
    userId,
    userRoles,
    userFirstName,
    userLastName,
    token,
    tokenExpiration,
    userAvatar,
    login,
    logout,
  } = authHandler;

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userId,
        userRoles,
        userFirstName,
        userLastName,
        token,
        tokenExpiration,
        userAvatar,
        login,
        logout,
      }}
    >
      <BrowserRouter>
        <Switch>
          <GlobalTemplate>
            <Route path="/" exact component={Homepage} />
            <Route path="/categories" exact component={Categories} />
            <Route path="/series" exact component={Series} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/glossary" exact component={Glossary} />
            <Route path="/administration" exact component={Login} />

            <Route path="/administration/articles" exact component={AdminArticles} />
            <Route path="/administration/article-types">
              {!authHandler.isLoggedIn ? <Redirect to="/administration" /> : <AdminArticleTypes />}
            </Route>
            <Route path="/administration/glossary">
              {!authHandler.isLoggedIn ? <Redirect to="/administration" /> : <AdminGlossary />}
            </Route>
            {/* <Route path="/administration/glossary" exact component={AdminGlossary} /> */}
            {/* <Redirect from="*" to="/" /> */}
          </GlobalTemplate>
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
