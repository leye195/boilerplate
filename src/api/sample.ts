import api from 'api';

export const getTodos = async () => {
  const response = await api.get('https://jsonplaceholder.typicode.com/todos');
  const data = {
    data: response.data,
    status: response.status,
  };

  return data;
};
