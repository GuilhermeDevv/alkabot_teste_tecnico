import React, { createContext, ReactNode, useState } from "react";

interface UserData {
    name: string;
    email: string;
}

interface AuthContextType {
    userData: UserData;
    setUserData: React.Dispatch<React.SetStateAction<UserData>>;
    authorized: boolean;
    setAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextType>({
    userData: { name: "", email: "" },
    setUserData: () => { },
    authorized: false,
    setAuthorized: () => { },
});

export function ProvideUser({ children }: { children: ReactNode }) {
    const [userData, setUserData] = useState<UserData>({ name: "", email: "" });
    const [authorized, setAuthorized] = useState(false);

    return (
        <AuthContext.Provider
            value={{ userData, setUserData, authorized, setAuthorized }}
        >
            {children}
        </AuthContext.Provider>
    );
}