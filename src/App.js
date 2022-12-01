import { Routes } from './Routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export function App () {
  return (
    <>
      <ToastContainer />
      <Routes />
    </>
  );
}
