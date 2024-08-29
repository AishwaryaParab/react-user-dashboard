import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

export interface AuthUser {
    name: string;
    email: string;
    picture: string;
}

export interface AuthUserContextProps {
    authUser: AuthUser | null;
    setAuthUser: Dispatch<SetStateAction<AuthUser | null>>;
}

interface AuthUserProviderProps {
    children: ReactNode;
}

export const AuthUserContext = createContext<AuthUserContextProps | undefined>(undefined);

export const AuthUserProvider = ({ children }: AuthUserProviderProps) => {
    const [authUser, setAuthUser] = useState<AuthUser | null>(() => {
        const storedUser = localStorage.getItem('te-user');
        return storedUser ? (JSON.parse(storedUser) as AuthUser) : null;
    });

    return <AuthUserContext.Provider value={{ authUser, setAuthUser }}>
        {children}
    </AuthUserContext.Provider>
}