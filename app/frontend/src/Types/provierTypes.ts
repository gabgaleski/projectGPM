import { ReactNode } from "react"

export type ReactPropsType = {
  children: ReactNode
}

export type ContextType = {
  user: string;
  setUser: (newState: string) => void;
}