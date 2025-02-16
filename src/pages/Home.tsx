import React, { ReactNode } from "react";
import Users from "../components/Users";
import UsersInfo from "../components/UsersInfo";

interface HomeProps {
  children: ReactNode;
}

const Home: React.FC<HomeProps> = ({ children }) => {
  return (
    <div className='home'>
      <Users />
      <div className='content'>
        <UsersInfo />
        {children}
      </div>
    </div>
  );
};

export default Home;
