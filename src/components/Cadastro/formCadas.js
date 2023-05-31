import japafundo from './imgs/japanese-food-4984960.jpg';
import logo from './imgs/logo-normal.png';
import cortina from './imgs/fundo-cadastro.png';
import styles from './formCadas.css';

function Cadastro() {
  
    return (
        <div id='corpo'>
            <img src={japafundo} alt="uma comida" id='fundoPng'/>
            <img src={cortina} id='cortina'/> 
            
            <div className="formulario">
                <img src={logo} alt="logo" id='logo'/>
                <form className="formula">
                    <input type="text" id="name" name="name" placeholder="Nome" required/>
                    <input type="email" id="mail" name="mail" placeholder="Email" required/>
                    <input type="text" id="nascimento" name="nascimento" placeholder="Data de Nasc." required/>
                    <input type="password" id="senha" name="senha" placeholder="Senha" required/>
                    <input type="password" id="ConfirmaSenha" name="ConfirmaSenha" placeholder="Confirmar Senha" required/>
                    <hr/>
                    <input type="submit" value="Confirmar"/>
                </form>

            </div>
        </div>
    );
}
export default Cadastro;