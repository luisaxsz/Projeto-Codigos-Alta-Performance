import styles from './Login.module.css'
import Logo from './img/logo.png'
import imgFundo from './img/imagelogin.png'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Login(){

    const navegacao = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    let verificacao = true
    const fazerLogin = () => {
        if (!email | !senha) {
            setError("Preencha todos os campos");
            alert("Preencha todos os campos")
            return;
        }
        else {
        fetch("http://localhost:5000/clientes", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                for (const element of data){
                    if(element.email === email && element.senha === senha) {
                        verificacao = true
                        navegacao("/")
                    } else verificacao = false
                };
                if (verificacao === false) alert("Email ou senha invalidos")

            })
            .catch((err) => console.log(err))
        }
    };
    const redirecionarParaCadastro = () => {
        navegacao("/cadastro")
    }

    return (
    <body>
        <div className={styles.container}>
                <img className={styles.imgFundo} src={imgFundo} alt="fundo"/>
                <div className={styles.containerLogin}>
                <div className={styles.containerBox}>
                    <img className={styles.Logo} src={Logo} alt = "logo"/>
                        <form action="">
                            <input className={styles.input} type="text" value={email}
                                onChange={(e) => [setEmail(e.target.value), setError("")]} placeholder="Login"/> <br/>
                            <input className={styles.input} type="password" value={senha}
                                onChange={(e) => [setSenha(e.target.value), setError("")]} placeholder="Senha"/> <br/>
                            <button className={styles.buttonLogin} type="button" onClick={fazerLogin}>Entrar</button>
                            <button className={styles.buttonCadastro} type="button" onClick={redirecionarParaCadastro}>Cadastrar</button>
                        </form>
                </div>
                </div>
        </div>
    </body>
    )
}

export default Login
