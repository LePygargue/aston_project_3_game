// frontend/src/components/Login.js
import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import api from "@/services/api";
import useAuth from "@/hooks/useAuth";
import "../assets/login.css";

const Login = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/game";

    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg("");
    }, [username, password]);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            console.log("Sending login request with data:", {
                username,
                password,
            });

            const response = await api.post("auth/login", {
                username,
                password,
            });

            console.log("Login successful", response.data);

            console.log(JSON.stringify(response?.data));

            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;

            setAuth(username, password, roles, accessToken);

            setUsername("");
            setPassword("");
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg("No Server Response");
            } else if (err.response?.status === 400) {
                setErrMsg("Missing Username or Password");
            } else if (err.response?.status === 401) {
                setErrMsg("Unauthorized");
            } else {
                setErrMsg("Login Failed");
            }
            errRef.current.focus();
        }
    };

    return (
        <section className="login">
            <div className="login__decoration">
                <img src="/Group_20.png" alt="" />
            </div>
            <div className="login__content">
                <a href="/">
                    <img src="/logo.png" alt="" />
                </a>
                <hr />
                <p
                    ref={errRef}
                    className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                >
                    {errMsg}
                </p>
                <h2>Continuer l'enquête</h2>
                <form onSubmit={handleLogin}>
                    <label htmlFor="username">
                        Identifiant
                        <br />
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                        />
                    </label>
                    <br />
                    <label htmlFor="password">
                        Mot de passe
                        <br />
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </label>
                    <br />
                    <button>Login</button>
                </form>
                <hr />
                <Link to="/authentication/register">
                    <button>Commencer l'enquête</button>
                </Link>
            </div>
            <div className="login__decoration">
                <img src="/Group_20.png" alt="" />
            </div>
        </section>
    );
};

export default Login;
