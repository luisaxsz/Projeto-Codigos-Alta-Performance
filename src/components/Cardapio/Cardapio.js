import imgFundo from './img/imgFundo.png';
import Logo from './img/logo_mauricio.png';
import styles from './Cardapio.module.css';
import React from 'react';
import {UserOutlined} from '@ant-design/icons';
import item from './img/item.png'
import {PlusCircleOutlined} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

function Cardapio(){
    const navegacao = useNavigate();
    const redirecionarParaReserva = () => {
        navegacao("/reserva")
    }
    const redirecionarParaCarrinho = () => {
        navegacao("/carrinho")
    }

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
                    <button autoFocus className={styles.transitionButton}>Cardápio</button>
                    <button className={styles.transitionButton} type="button" onClick={redirecionarParaReserva}>Reserva</button>
                </div>
                <div className={styles.divider}></div>
            </header>
            <section>
                <div className={styles.containerItem}>
                    <img src={item} alt='Item' className={styles.item}/>
                    <div className={styles.descricao}>
                        <h2>Prato 001</h2>
                        <hr className={styles.divider02}></hr>
                        <p>Resumo dos ingredientes do prato.Descrição não tão detalhada</p>
                        <h3>R$50,00</h3>
                    </div>
                    <button className={styles.addItem}><PlusCircleOutlined className={styles.addIcon} /></button>
                </div>
            </section>
        </body>
    )
}

export default Cardapio;