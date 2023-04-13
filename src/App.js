import Home from './Component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./Component/Header";
import DataTable from "./Component/DataTable";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/datatable' element={<DataTable />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
