import api from 'api';

export const getTodos = async () => {
  const response = await api.get('todos');
  const data = {
    data: response.data,
    status: response.status,
  };

  return data;
};
