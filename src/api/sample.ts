import api from 'api';

export const getTodo = async () => {
  const response = await api.get('todos/1');
  const data = {
    data: response.data,
    status: response.status,
  };

  return data;
};
