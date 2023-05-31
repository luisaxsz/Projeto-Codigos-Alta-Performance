import imgFundo from './img/imgFundo.png';
import Logo from './img/logo_mauricio.png';
import styles from './Cardapio.module.css';
import React from 'react';
import {UserOutlined} from '@ant-design/icons';

function Cardapio(){
    return(
        <body>
            <header>
                <img src={imgFundo} alt="Sushi Fundo" className={styles.imgFundo}/>
                <img src={Logo} alt="Logo" className={styles.logoHeader}/>
                <div className={styles.containerPerfil}>
                    <p className={styles.nomePerfil}>Fulano</p>
                    <div className={styles.iconePerfil}>
                        <UserOutlined className={styles.icone}/>
                    </div>
                </div>
                <div className={styles.containerButton}>
                    <button className={styles.transitionButton}>Cardápio</button>
                    <button autoFocus className={styles.transitionButton}>Reserva</button>
                    <button className={styles.transitionButton}>Carrinho</button>
                </div>
            </header>
            <section>
                
            </section>
        </body>
    )
}

export default Cardapio;