import { createContext, useContext, useState } from "react";

interface User {
  id: number;
  name: string;
  phone: string;
}

interface UserContextType {
  selectedUser: User | null;
  setSelectedUser: (user: User | null) => void;
}

// Create context
const UserContext = createContext<UserContextType | null>(null);

// Provider component
export function UserProvider({ children }: { children: React.ReactNode }) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ selectedUser, setSelectedUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Hook to use the context
export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
