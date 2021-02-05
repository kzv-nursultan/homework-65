import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from './containers/MainPage/MainPage';
import Edit from './containers/Edit/Edit';
import Layout from './components/Layout/Layout';

const  App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={MainPage}/>
          <Route path="/edit" component={Edit}/>
          <Route path="/about" component={MainPage}/>
          <Route path="/contacts" component={MainPage}/>
          <Route path="/news" component={MainPage}/>
          <Route path="/documentation" component={MainPage}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
