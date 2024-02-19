import { createContext, useState, useMemo } from "react";
import { ReactPropsType, ContextType } from "../Types/provierTypes";

const initialValue = {
  user: '',
  setUser: () => {},
}

export const CreateContext = createContext<ContextType>(initialValue);

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
