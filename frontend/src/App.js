import UserContext from "./contexts/userContext";
import Routes from "./routes";
import {useState} from 'react';


import "./css/reset.css"
import GlobalStyled from "./components/styled/globalStyled";


function App() {
  const [userData, setUserData] = useState(null)

  return (
    <>
      <UserContext.Provider value={{userData, setUserData}}>
        <GlobalStyled>
          <Routes setUserData={setUserData}/>
        </GlobalStyled>
      </UserContext.Provider>
    </>
  );
}

export default App;
