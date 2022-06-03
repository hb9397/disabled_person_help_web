/*global kakao*/
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Board from './components/Board/Board';
import LoginPage from './components/Login/Loginpage';
import RegisterPage from './components/Login/Registerpage';
import Userpage from './components/Login/Userpage';
// import Startlogin from './components/Login/Startlogin';
import WriteBoard from './components/Board/WriteBoard';
function App() {

  return (
    <BrowserRouter>
      <div className='app'>
        <div className='header'>
          <Header />
        </div>

        <Switch>
          <Route exact path='/'>
            <Main></Main>
          </Route>
          
          <Route path="/board">
            <Board></Board>
          </Route>

          <Route path="/wirteboard">
            <WriteBoard></WriteBoard>
          </Route>

          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>

          <Route path="/register">
            <RegisterPage></RegisterPage>
          </Route>

          <Route path="/user">
            <Userpage></Userpage>
          </Route>
        </Switch>

      </div>
    </BrowserRouter>

  );
}
export default App;

//css수정, DB 위도 경도 없는 데이터 수정, 반응형 웹, 부가기능, 서버 배포, 분석보고서 
