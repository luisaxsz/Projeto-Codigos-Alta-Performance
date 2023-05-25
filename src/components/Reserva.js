import styles from './Reserva.module.css'
import fundo from './img/fundo.png'
import Logo002 from './img/logo002.png'

function Reserva(){
    return (
        <body>
            <div className={styles.container}> 
                <img src={fundo} alt="Foto de Sushi" className={styles.imgFundo} />
                <img src={Logo002} alt="Logo" className={styles.Logo002}/>
                <div className={styles.perfilContainer}>
                    <div className={styles.perfil}>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <button>Cardápio</button>
                    <button>Reserva</button>
                    <button>Delivery</button>
                </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.containerReserva}>
                <div className={styles.divider3}></div>
                <div className={styles.containerForm}>
                    <form>
                        <label className={styles.label}>Nome</label> <br/>
                        <input type='text'/> <br/>
                        <label className={styles.label}>Mesa para quantas pessoas?</label> <br/>
                        <input type='text'/> <br/>
                        <div className={styles.divider2}></div>
                        <label className={styles.label}>Data para a Reserva:</label> <br/>
                        <input type='date'/> <br/>
                        <label className={styles.label}>Horário(17:00 às 23:59)</label> <br/>
                        <input type='time'/> <br/>
                    </form>
                </div>
                <div className={styles.containerDescricao}>
                <label className={styles.label}>Motivo para reserva. (Não obrigatório)</label> <br/>
                    <textarea rows="10" cols="40" maxlength="500" placeholder='Escreva aqui o motivo da reserva...'></textarea>
                    <div className={styles.containerButtonReserva}>
                        <button className={styles.buttonCancelar}>Cancelar</button>
                    <   button className={styles.buttonConfirmar}>Confirmar</button>
                    </div>
                </div>
            </div>
        
        </body>
    )
}

export default Reserva