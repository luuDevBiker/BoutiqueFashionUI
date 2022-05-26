import { ReactDOM } from "react";

const Login = ()=>{
    return(
        <div>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="email" />
                <input type="password" placeholder="password" />
                <button>Login</button>
                <a href="#">Forgot password?</a>
            </form>
        </div>
    )
}

export default Login;
