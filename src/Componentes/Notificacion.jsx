import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const tiposValidos = ['success', 'error', 'info', 'warn'];

export const mostrarNotificacion = (mensaje, tipo = 'success') => {
  const tipoSeguro = tiposValidos.includes(tipo) ? tipo : 'info';
  toast[tipoSeguro](mensaje);
};

const Notificacion = () => (
  <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
  />
);

export default Notificacion;

