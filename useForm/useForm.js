import { useState } from 'react';

export const useForm = (initialForm = {}) => {
  // Creamos el useState con las propiedades necesarias.
  const [formState, setFormState] = useState(initialForm);

  // Creamos una funcion que implementa el valor de lo que estamos escribiendo.
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Creamos una funcion que elimine todos los datos del formulario.
  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
