import { useContext } from 'react'
import { AuthUserContext, AuthUserContextProps } from '../context/AuthUserContext';

const useAuthUser = (): AuthUserContextProps => {
  const context = useContext(AuthUserContext);

  if (!context) {
    throw new Error("useAuthUser must be used within an AuthUserProvider");
  }

  return context;
}

export default useAuthUser