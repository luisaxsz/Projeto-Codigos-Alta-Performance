import styles from './Login.module.css'
import Logo from './img/logo.png'
import imgFundo from './img/imagelogin.png'

function Login(){
    return (
    <body>
        <div className={styles.container}>
                <img className={styles.imgFundo} src={imgFundo} alt="fundo"/>
                <div className={styles.containerLogin}>
                <div className={styles.containerBox}>
                    <img className={styles.Logo} src={Logo} alt = "logo"/>
                        <form action="">
                            <input className={styles.input} type="text" placeholder="Login"/> <br/>
                            <input className={styles.input} type="text" placeholder="Senha"/> <br/>
                            <button className={styles.buttonLogin}>Entrar</button>
                            <button className={styles.buttonCadastro}>Cadastrar</button>
                        </form>
                </div>
                </div>
        </div>
    </body>
    )
}

export default Login
