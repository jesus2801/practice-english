import Swal from 'sweetalert2';

export const showErr = (msg: string) => {
  Swal.fire('¡Error!', msg, 'error');
};

export const handleLoading = (state: boolean, title?: string) => {
  if (state) {
    Swal.fire({
      title: title || 'Cargando',
      didOpen: () => {
        Swal.showLoading();
      },
    });
  } else {
    Swal.close();
  }
};
