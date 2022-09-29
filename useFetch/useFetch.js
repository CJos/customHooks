import { useEffect, useState } from 'react';

export const useFetch = (url, initialCounter = 0) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const [counter, setCounter] = useState({
    counter: 0,
  });

  const onChangeQuote = () => {
    setCounter(counter + 1);
  };

  const getFetch = async () => {
    // Lanzamos el State con la carga activada.
    setState({
      ...state,
      isLoading: true,
    });

    // Realizamos el proceso de recogida de datos del API.
    const resp = await fetch(url);
    const data = await resp.json();

    // Establecemos la carga como desactivada.
    setState({
      data,
      isLoading: false,
      hasError: null,
    });
  };
  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    counter: counter,
    onChangeQuote,
  };
};
