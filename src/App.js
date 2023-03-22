import logo from './logo.svg';
import './App.css';
import { LocalizationProvider, ruRU} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import HoroscopeList from './pages/HoroscopeList';
import "dayjs/locale/ru";
import Header from './components/Header';
import Footer from './components/Footer';
import { height, width } from '@mui/system';


function App() {
  return (
    <div className='App'>
       <Header />
      <LocalizationProvider  dateAdapter={AdapterDayjs}  adapterLocale="ru"  localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}>
        <HoroscopeList />
      </LocalizationProvider>
      <Footer />
  </div>
  );  
}

export default App;
