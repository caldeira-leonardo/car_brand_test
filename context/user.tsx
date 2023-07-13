import { createContext, useContext, useState } from "react";

interface ContextUserProps {
    user?: UserData;
    handleUser(data: UserData): void;
};

interface UserData {
    id?: string,
    name?: string,
    token?: string;
};

interface ProviderPRops {
    children: React.ReactNode;
}


export const UserContext = createContext<ContextUserProps>({} as ContextUserProps);

function UserProvider({ children }: ProviderPRops) {
    const [user, setUser] = useState<UserData>({});

    const handleUser = (data: UserData) => setUser(data);

    return <UserContext.Provider value={{ user, handleUser }}>
        {children}
    </UserContext.Provider>;
}

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };