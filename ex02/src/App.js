import React, {useState, useEffect} from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import {withCookies, useCookies} from "react-cookie";
import Login from './views/Login';
import Join from './Join';
import Todo from './Todo';

const App =()=>{
  const [cookies,removeCookie] = useCookies(['user']);
  const [hasCookie, setHasCookie] = useState(false);

  useEffect(()=>{
    if(cookies.user && cookies.user !== 'undefined'){
      setHasCookie(true);
    }
  }, [cookies]);

  return (
    <div className="App">
      <h1>Todo App</h1>

      {!hasCookie ? <Redirect to="login" /> : <Redirect to ="/todo" />}

      <Switch>
        <Route
          exact path ="/login"
          render={routerProps =>{
            return (
              <Login
                {...routerProps}
                setHasCookie={setHasCookie}
              />
            )
          }}
        />
        <Route 
          exact path="/join"
          component={Join}
          />
        <Route
          exact path="/todo"
          render={routerProps => {
            return (
              <Todo
                {...routerProps}
                setHasCookie={setHasCookie}
                removeCookie={()=>{
                  removeCookie('user');
                  setHasCookie(false);
                }}
                />
            );
          }}
        />
      </Switch>
    </div>
  );
};

export default withCookies(App);
