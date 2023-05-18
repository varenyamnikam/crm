import React from "react";
import "./App.css";
import ContextAllPost from "./contextStore/AllPostContext";
import ContextAuth from "./contextStore/AuthContext";
import ContextPost from "./contextStore/PostContext";
import MainRoutes from "./Routes/MainRoutes";
import { GoogleOAuthProvider } from "@react-oauth/google";
function App() {
  return (
    <div>
      <GoogleOAuthProvider clientId="1039592446485-t6ael103e1vtiprre4i3muhbuvgimpsi.apps.googleusercontent.com">
        <ContextAuth>
          <ContextAllPost>
            <ContextPost>
              <MainRoutes />
            </ContextPost>
          </ContextAllPost>
        </ContextAuth>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
