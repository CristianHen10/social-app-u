import React from 'react';
import HelpImg from '../assets/images/login/help-hands.png';
import '../assets/css/login.css';

export default function Login() {
    return (
        <>
            <div className="container-general">
                <div className="container-left">
                    <div className="content-slogan">
                        <h2>SI DAS UN POCO,<br />LO ESTAS DANDO TODO.</h2>
                    </div>
                    <div className="content-img">
                        <img src={HelpImg} alt="Imagen representativa" />
                    </div>
                    <div className="content-copy">
                        <label>Copyright - Todos los derechos reservados 2021</label>
                    </div>
                </div>
                <div className="container-right">
                    <div className="container-right-login">
                        <div className="content-login-external">
                            <h3>Inicia Sesion</h3>
                            <div>
                                <button>Sign in with Google</button>
                                <button>G</button>
                            </div>
                        </div>
                        <div>
                            -------------------- Or -------------------------
                        </div>
                        <div className="content-login-form">
                            <div className="content-form-email">
                                <label>Username or Email Address</label>
                                <input />
                            </div>
                            <div className="content-form-password">
                                <label>Password</label>
                                <input />
                            </div>
                            <div className="content-form-action">
                                <button>Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
