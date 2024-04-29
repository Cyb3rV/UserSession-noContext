const { createContext, useState } = require("react");

const AuthContext = createContext(null);

const initialAuth = false;

export function AuthProvider({children}) {
    const [auth, setAuth] = useState(initialAuth);


    const handleAuth = (e) => {
        console.log(auth);
        setAuth(!auth);
      }

    const data = {auth, handleAuth};

    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext;