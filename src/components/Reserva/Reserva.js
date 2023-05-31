import styles from './Reserva.module.css'
import fundo from './img/fundo.png'
import Logo002 from './img/logo002.png'
import {UserOutlined} from '@ant-design/icons';

function Reserva(){
    return (
        <body>
            <header>
                <div className={styles.container}>
                    <img src={fundo} alt="Foto de Sushi" className={styles.imgFundo} />
                    <img src={Logo002} alt="Logo" className={styles.Logo002}/>
                    <div className={styles.perfilContainer}>
                        <div className={styles.perfil}>
                            <UserOutlined className={styles.icone}/>
                        </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button autoFocus className={styles.transitionButton}>Cardápio</button>
                        <button className={styles.transitionButton} >Reserva</button>
                        <button className={styles.transitionButton}>Delivery</button>
                    </div>
                </div>
                <div className={styles.divider}></div>
            </header>
            <section>
                <div className={styles.containerReserva}>
                    <div className={styles.containerForm}>
                        <form>
                            <label className={styles.label}>Nome</label> <br/>
                            <input  className={styles.input} type='text'/> <br/>
                            <label className={styles.label}>Mesa para quantas pessoas?</label> <br/>
                            <input className={styles.input} type='text'/> <br/>
                            <div className={styles.divider2}></div>
                            <label className={styles.label}>Data para a Reserva:</label> <br/>
                            <input className={styles.input} type='date'/> <br/>
                            <label className={styles.label}>Horário(17:00 às 23:59)</label> <br/>
                            <input className={styles.input} type='time'/> <br/>
                        </form>
                    </div>
                    <hr className={styles.divider3}></hr>
                    <div className={styles.containerDescricao}>
                        <label className={styles.label}>Motivo para reserva. (Não obrigatório)</label> <br/>
                        <textarea rows="10" cols="40" maxlength="500" placeholder='Escreva aqui o motivo da reserva...'></textarea>
                        <div className={styles.containerButtonReserva}>
                            <button className={styles.buttonCancelar}>Cancelar</button>
                        <   button className={styles.buttonConfirmar}>Confirmar</button>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    )
}


export default Reserva