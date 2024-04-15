// frontend/src/components/Register.js
import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "@/services/api";
import "../assets/register.css";
import {
    faCheck,
    faTimes,
    faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState("");
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [password, setPassword] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setValidName(USER_REGEX.test(username));
    }, [username]);

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(password));
        setValidMatch(password === matchPwd);
    }, [password, matchPwd]);

    const handleRegister = async (e) => {
        e.preventDefault();

        // if button enabled with JS hack
        const v1 = USER_REGEX.test(username);
        const v2 = PWD_REGEX.test(password);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }

        try {
            console.log("Sending registration request with data:", {
                username,
                password,
                email,
                firstName,
                lastName,
            });

            const response = await api.post("/register/register", {
                username,
                password,
                email,
                firstName,
                lastName,
            });

            setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setUsername("");
            setPassword("");
            setMatchPwd("");
            setEmail("");
            setFirstName("");
            setLastName("");

            console.log("User registration successful", response.data);
        } catch (err) {
            if (!err?.response) {
                setErrMsg("No Server Response");
            } else if (err.response?.status === 409) {
                setErrMsg("Username Taken");
            } else {
                setErrMsg("Registration Failed");
            }
            errRef.current.focus();
        }
    };

    return (
        <>
            {success ? (
                <section className="register">
                    <div className="login__decoration">
                        <img src="/Group_20.png" alt="" />
                    </div>
                    <div className="register__content">
                        <h1>Success!</h1>
                        <p>
                            <Link to="/authentication/login">
                                <button>Connectez-vous</button>
                            </Link>
                        </p>
                    </div>
                    <div className="login__decoration">
                        <img src="/Group_20.png" alt="" />
                    </div>
                </section>
            ) : (
                <section className="register">
                    <div className="login__decoration">
                        <img src="/Group_20.png" alt="" />
                    </div>
                    <div className="register__content">
                        <p
                            ref={errRef}
                            className={errMsg ? "errmsg" : "offscreen"}
                            aria-live="assertive"
                        >
                            {errMsg}
                        </p>
                        <h2>Register</h2>
                        <form onSubmit={handleRegister}>
                            <label htmlFor="username">
                                Username:
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className={validName ? "valid" : "hide"}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    className={
                                        validName || !username
                                            ? "hide"
                                            : "invalid"
                                    }
                                />
                                <input
                                    type="text"
                                    id="username"
                                    ref={userRef}
                                    autoComplete="off"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    required
                                    aria-invalid={validName ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={() => setUserFocus(true)}
                                    onBlur={() => setUserFocus(false)}
                                />
                                <p
                                    id="uidnote"
                                    className={
                                        userFocus && username && !validName
                                            ? "instructions"
                                            : "offscreen"
                                    }
                                >
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    4 to 24 characters.
                                    <br />
                                    Must begin with a letter.
                                    <br />
                                    Letters, numbers, underscores, hyphens
                                    allowed.
                                </p>
                            </label>
                            <br />

                            <label htmlFor="password">
                                Password:
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className={validPwd ? "valid" : "hide"}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    className={
                                        validPwd || !password
                                            ? "hide"
                                            : "invalid"
                                    }
                                />
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                    aria-invalid={validPwd ? "false" : "true"}
                                    aria-describedby="pwdnote"
                                    onFocus={() => setPwdFocus(true)}
                                    onBlur={() => setPwdFocus(false)}
                                />
                                <p
                                    id="pwdnote"
                                    className={
                                        pwdFocus && !validPwd
                                            ? "instructions"
                                            : "offscreen"
                                    }
                                >
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    8 to 24 characters.
                                    <br />
                                    Must include uppercase and lowercase
                                    letters, a number and a special character.
                                    <br />
                                    Allowed special characters:{" "}
                                    <span aria-label="exclamation mark">
                                        !
                                    </span>{" "}
                                    <span aria-label="at symbol">@</span>{" "}
                                    <span aria-label="hashtag">#</span>{" "}
                                    <span aria-label="dollar sign">$</span>{" "}
                                    <span aria-label="percent">%</span>
                                </p>
                            </label>
                            <br />

                            <label htmlFor="confirm_pwd">
                                Confirmer le mot de passe:
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className={
                                        validMatch && matchPwd
                                            ? "valid"
                                            : "hide"
                                    }
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    className={
                                        validMatch || !matchPwd
                                            ? "hide"
                                            : "invalid"
                                    }
                                />
                                <input
                                    type="password"
                                    id="confirm_pwd"
                                    value={matchPwd}
                                    onChange={(e) =>
                                        setMatchPwd(e.target.value)
                                    }
                                    required
                                    aria-invalid={validMatch ? "false" : "true"}
                                    aria-describedby="confirmnote"
                                    onFocus={() => setMatchFocus(true)}
                                    onBlur={() => setMatchFocus(false)}
                                />
                                <p
                                    id="confirmnote"
                                    className={
                                        matchFocus && !validMatch
                                            ? "instructions"
                                            : "offscreen"
                                    }
                                >
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Must match the first password input field.
                                </p>
                            </label>
                            <br />

                            <label>
                                Email:
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                            <br />
                            <label>
                                First Name:
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                />
                            </label>
                            <br />
                            <label>
                                Last Name:
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                />
                            </label>
                            <br />
                            <button
                                type="submit"
                                disabled={
                                    !validName || !validPwd || !validMatch
                                        ? true
                                        : false
                                }
                            >
                                S'inscrire
                            </button>
                        </form>
                        <p>
                            <Link to="/authentication/login">
                                <button>Connectez-vous</button>
                            </Link>
                        </p>
                    </div>
                    <div className="login__decoration">
                        <img src="/Group_20.png" alt="" />
                    </div>
                </section>
            )}
        </>
    );
};

export default Register;
