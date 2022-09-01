import { createContext, useEffect, useState  } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [user, setUSer] = useState(null);

    useEffect(() => {
        function loadStorage() {
            const storageUser = localStorage.getItem("AuthFaceClone");

            if (storageUser) {
                setUSer(JSON.parse(storageUser));
            }
        }

        loadStorage();
    }, []);

    const singWithFacebook = (res) => {
        let data = {
            name: res.name,
            email: res.email,
            avatarUrl:res.picture.data.url,
        };

        setUSer(data);
        localStorage.setItem("AuthFaceClone",JSON.stringify(data));
    };

    function signOut() {
        localStorage.removeItem("AuthFaceClone");

        setUSer(null);
    }

    return (
        <AuthContext.Provider
            value={{
                singWithFacebook,
                signOut,
                user,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;