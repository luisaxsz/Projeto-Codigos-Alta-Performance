import logo from './img/logo-normal.png';
import japafundo from './img/japanese-food-4984960.jpg';
import styles from './Cadastro.module.css';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";


function Cadastro (){

    const navegacao = useNavigate();
    const [email, setEmail] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    
    const [confirmaSenha, setconfirmaSenha] = useState("");
    const [error, setError] = useState("");

    const fazerCadastro = () => {
        if (!email | !senha | !nome | !sobrenome | !confirmaSenha) {
            setError("Preencha todos os campos");
            alert("Preencha todos os campos")
            return;
        }

        if(senha !== confirmaSenha) {
            alert("A senha precisa igual")
            return
        }

        const corpo = {
            nome: nome,
            email: email,
            sobrenome: sobrenome,
            senha: senha
        }
        
        fetch("http://localhost:5000/clientes", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(corpo)
        })
            .then((res) => res.json())
            .then((data) => {
                navegacao("/")
            })
            .catch((err) => console.log(err))
    
    };


    return(
        <body>
            <img src={japafundo} className={styles.imgFundo}/>
            <div className={styles.containerForm}>
                <hr className={styles.divider01}></hr>
                <div className={styles.cadastroForm}>
                    <form>
                        <img src={logo} alt="Logo" className={styles.logo}/>
                        <input className={styles.inputForm} type="text" value={nome}
                                onChange={(e) => [setNome(e.target.value), setError("")]} placeholder="Nome"/> <br/>
                        <input className={styles.inputForm} type="text" value={sobrenome}
                                onChange={(e) => [setSobrenome(e.target.value), setError("")]} placeholder="Sobrenome"/> <br/>
                        <input className={styles.inputForm} type="email" value={email}
                                onChange={(e) => [setEmail(e.target.value), setError("")]} placeholder="Email"/> <br/>
                        <input className={styles.inputForm} type="password" value={senha}
                                onChange={(e) => [setSenha(e.target.value), setError("")]} placeholder="Senha"/> <br/>
                        <input className={styles.inputForm} type="password" value={confirmaSenha}
                                onChange={(e) => [setconfirmaSenha(e.target.value), setError("")]} placeholder="Confirmar Senha"/>
                        <hr className={styles.divider02}></hr> <br/>
                        <button className={styles.button} type="button" onClick={fazerCadastro}>Cadastrar</button> <br/>
                    </form>
                </div>
            </div>
        </body>
    )
}

export default Cadastro;