import styles from './Reserva.module.css'
import fundo from './img/fundo.png'
import Logo002 from './img/logo002.png'
import {UserOutlined} from '@ant-design/icons';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Reserva(){

    const navegacao = useNavigate();
    const [nome, setNome] = useState("");
    const [numeroDeMesa, setNumeroDeMesa] = useState("");
    const [dataDaReserva, setDataDaReserva] = useState("");
    const [horario, setHorario] = useState("");
    const [error, setError] = useState("");

    const fazerReserva = () => {
        if (!nome | !numeroDeMesa | !dataDaReserva | !horario) {
            setError("Preencha todos os campos");
            alert("Preencha todos os campos")
            return;
        }
        const corpo = {
            nome: nome,
            numeroDeMesa: numeroDeMesa,
            dataDaReserva: dataDaReserva,
            horario: horario
        }
        fetch("http://localhost:5000/reserva", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(corpo)
        })
            .then((res) => res.json())
            .then((data) => {
                alert("Reserva cadastrada com sucesso")
            })
            .catch((err) => console.log(err))
    }


    const redirecionarParaDelivery = () => {
        navegacao("/delivery")
    }
    const redirecionarParaCardapio = () => {
        navegacao("/")
    }
    return (
        <body>
            <header>
                <div className={styles.container}>
                    <img src={fundo} alt="Foto de Sushi" className={styles.imgFundo} />
                    <div className={styles.headerWrapper}>
                        <img src={Logo002} alt="Logo" className={styles.Logo002}/>
                        <div className={styles.perfilContainer}>
                            <p className={styles.nomePerfil}>Fulano</p>
                            <div className={styles.perfil}>
                                <UserOutlined className={styles.icone}/>
                            </div>
                        </div>
                        <div className={styles.buttonContainer}>
                            <button autoFocus className={styles.transitionButton} type="button" onClick={redirecionarParaCardapio}>Cardápio</button>
                            <button className={styles.transitionButton} >Reserva</button>
                        </div>
                    </div>
                </div>
                <div className={styles.divider}></div>
            </header>
            <section>
                <div className={styles.containerReserva}>
                    <div className={styles.containerForm}>
                        <form>
                            <label className={styles.label}>Nome</label> <br/>
                            <input  className={styles.input} value={nome}
                                onChange={(e) => [setNome(e.target.value), setError("")]}type='text'/> <br/>
                            <label className={styles.label}>Mesa para quantas pessoas?</label> <br/>
                            <input className={styles.input} value={numeroDeMesa}
                                onChange={(e) => [setNumeroDeMesa(e.target.value), setError("")]}type='text'/> <br/>
                            <div className={styles.divider2}></div>
                            <label className={styles.label}>Data para a Reserva:</label> <br/>
                            <input className={styles.input} value={dataDaReserva}
                                onChange={(e) => [setDataDaReserva(e.target.value), setError("")]} type='date'/> <br/>
                            <label className={styles.label}>Horário(17:00 às 23:59)</label> <br/>
                            <input className={styles.input} value={horario}
                                onChange={(e) => [setHorario(e.target.value), setError("")]}type='time'/> <br/>
                        </form>
                    </div>
                    <hr className={styles.divider3}></hr>
                    <div className={styles.containerDescricao}>
                        <label className={styles.label}>Motivo para reserva. (Não obrigatório)</label> <br/>
                        <textarea rows="10" cols="40" maxlength="500" placeholder='Escreva aqui o motivo da reserva...'></textarea>
                        <div className={styles.containerButtonReserva}>
                            <button className={styles.buttonCancelar}>Cancelar</button>
                        <   button className={styles.buttonConfirmar} type="button" onClick={fazerReserva}>Confirmar</button>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    )
}


export default Reserva