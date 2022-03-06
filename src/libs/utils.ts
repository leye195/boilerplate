export const classnames = (...classnameList: string[]) => {
  return classnameList.join(' ');
};

export const sessionStore = () => {
  const session = window.sessionStorage;

  const getItem = (key: string) => {
    try {
      const value = JSON.parse(session.getItem(key) as string);
      return value ?? null;
    } catch (error) {
      return null;
    }
  };

  const setItem = (key: string, value: any) => {
    session.setItem(key, value);
  };

  const removeItem = (key: string) => {
    session.removeItem(key);
  };

  return {
    getItem,
    setItem,
    removeItem,
  };
};

export const localStore = () => {
  const local = window.localStorage;

  const getItem = (key: string) => {
    try {
      const value = JSON.parse(local.getItem(key) as string);
      return value ?? null;
    } catch (error) {
      return null;
    }
  };

  const setItem = (key: string, value: any) => {
    local.setItem(key, value);
  };

  const removeItem = (key: string) => {
    local.removeItem(key);
  };

  return {
    getItem,
    setItem,
    removeItem,
  };
};
