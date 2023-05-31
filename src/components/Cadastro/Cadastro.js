import logo from './img/logo-normal.png';
import japafundo from './img/japanese-food-4984960.jpg';
import styles from './Cadastro.module.css';
function Cadastro (){
    return(
        <body>
            <img src={japafundo} className={styles.imgFundo}/>
            <div className={styles.containerForm}>
                <hr className={styles.divider01}></hr>
                <div className={styles.cadastroForm}>
                    <form>
                        <img src={logo} alt="Logo" className={styles.logo}/>
                        <input className={styles.inputForm} type="text" placeholder="Nome"/> <br/>
                        <input className={styles.inputForm} type="text" placeholder="Sobrenome"/> <br/>
                        <input className={styles.inputForm} type="email" placeholder="Email"/> <br/>
                        <input className={styles.inputForm} type="password" placeholder="Senha"/> <br/>
                        <input className={styles.inputForm} type="password" placeholder="Confirmar Senha"/>
                        <hr className={styles.divider02}></hr> <br/>
                        <button className={styles.button}>Cadastrar</button> <br/>
                    </form>
                </div>
            </div>
        </body>
    )
}

export default Cadastro;