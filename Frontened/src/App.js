import './App.css';
import Header from './component/Header/Header';
import CardList from './component/CardList/CardList'
import Carousel from './component/Crousel/Crousel';
import RegistrationComp from './component/Registration/RegistrationComp';
import { Box, Container, CssBaseline, Paper } from '@material-ui/core';

function App() {
  return (
    <>
    <Header/>
    {/* <Navbar/> */}
     <Carousel/>
     <CardList/>
     <CssBaseline />
      <Container component={Box} p={4} style={{margin:"30px auto"}}>
        <Paper style={{background:"#f5f5f5",padding:"20px 0px 20px 10px",}} component={Box} p={3}>
          <RegistrationComp />
        </Paper>
      </Container>
    </>
  );
}

export default App;
