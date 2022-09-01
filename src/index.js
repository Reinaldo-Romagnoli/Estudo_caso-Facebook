import { crateRoot, createRoot } from "react-dom/client";
import App from "./App";
import AuthProvider from "./context/auth";

const root = createRoot(document.querySelector("#root"));

root.render(
    <AuthProvider>
        <App/>
    </AuthProvider>
);