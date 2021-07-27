import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <DayList />
          </Route>
          <Route path="/day/:day">
            {/* :을 찍으면 day라는 변수로 숫자(1,2,3) 값을 얻을 수 있음 */}
            <Day />
          </Route>
          <Route path="/create_word">
            <CreateWord />
          </Route>
          <Route path="/create_day">
            <CreateDay />
          </Route>
          <Route>
            <EmptyPage />
            {/* path를 설정하지 않았기 때문에 가장 위에 적게되면 모든 페이지가 EmptyPage로 감 주의하자 */}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
