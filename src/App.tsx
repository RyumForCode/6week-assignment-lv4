import styled from 'styled-components';
import './App.css';
import Footer from './components/ui/Footer';
import Header from './components/ui/Header';
import Router from './shared/Router';

function App() {
  return (
    <StWrapper>
      <Header/>
        <Router />
      <Footer/>
    </StWrapper>
  );
}

export default App;

const StWrapper = styled.div`
  display : flex;
  width : 100%;
  height : 100vh;
  margin : auto;
  flex-direction : column;
  justify-content : space-between;
  z-index : 2;
`