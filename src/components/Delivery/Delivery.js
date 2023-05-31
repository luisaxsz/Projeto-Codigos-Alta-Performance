import styles from './Delivery.module.css'
import fundoHeader from './img/fundoDelivery.png'
import logo from './img/logo_mauricio.png'
import {UserOutlined} from '@ant-design/icons';

function Delivery(){
    return(
        <body>
            <header>
                <img src={fundoHeader} alt="Foto sushi" className={styles.imgFundo}/>
                <div className={styles.headerWrapper}>
                    <img src={logo} alt="Logo" className={styles.logo}/>
                    <div className={styles.containerPerfil}>
                        <div className={styles.containerIcone}><UserOutlined className={styles.icone}/></div>
                    </div>
                    <div className={styles.containerButton}>
                        <button autoFocus className={styles.transitionButton}>Cardápio</button>
                        <button className={styles.transitionButton}>Reserva</button>
                        <button className={styles.transitionButton}>Carrinho</button>
                    </div>
                </div>
            </header>
        </body>
    )
};

export default Delivery;