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
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <RegistrationComp />
        </Paper>
      </Container>
    </>
  );
}

export default App;
