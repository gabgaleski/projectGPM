import { createContext, useState, useMemo } from "react";
import { ReactPropsType } from "../Types/provierTypes";

const initialValue = {
  user: '',
  setUser: () => {},
}

type UserContextType = {
  user: string;
  setUser: (newState: string) => void;
}

export const CreateContext = createContext<UserContextType>(initialValue);

function ContextProvider({ children }: ReactPropsType) {
  const [user, setUser] = useState(initialValue.user);

  const values = useMemo(() => ({
    user,
    setUser,
  }), [
    user,
    setUser,
  ])

  return ( 
    <CreateContext.Provider value={values}>
      {children}
    </CreateContext.Provider>
   );
}

export default ContextProvider;
