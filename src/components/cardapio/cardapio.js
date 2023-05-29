import "./cardapio.css";
import food from '../imgs/sushi-balls-5878892.jpg';
import Logo002 from '../imgs/logo_mauricio.png'
import fundo from '../imgs/japanese-food-4984960.jpg'

function Cardapio(){
    return (
        <div>
            <header>
                <img src={Logo002} id="logo" alt="Logo da pagina"/>
                <img src={fundo} id="fundo" alt="fundo da pagina"/>
                <div id="perfil">
                    <p>Fulano Silva</p>
                    <div id="icone">perfil</div>
                </div>
                <div id="navegar">
                    <nav>
                        <ul id="escolha">
                        <li className="selecionado">Cardápio</li>
                        <li>Reserva</li>
                        <li>Delivery</li>
                        </ul>
                    </nav>
                </div>
                <hr/>
            </header>
            <main>
                <div id="bolinha">
                    <div>
                        <input type="radio" name="grupo" id="opcao1" class="radio-input" checked/>
                        <label for="opcao1"></label>
                    
                        <input type="radio" name="grupo" id="opcao2" class="radio-input"/>
                        <label for="opcao2"></label>
                    
                        <input type="radio" name="grupo" id="opcao3" class="radio-input"/>
                        <label for="opcao3"></label>
                    </div>
                </div>
                <div className="produtos">
                    <img src={food} className="fotProd" alt="foto do alimento"/>
                    <div className="detalhes">
                    <h1>Prato 001</h1>
                    <hr/>
                    <p>Resumo dos ingredientes do prato, descrição meia bomba</p>
                    <h2>25,50.</h2>
                    </div>
                </div>
                <div className="produtos">
                    <img src={food} className="fotProd" alt="foto do alimento"/>
                    <div className="detalhes">
                    <h1>Prato 002</h1>
                    <hr/>
                    <p>Resumo dos ingredientes do prato, descrição meia bomba</p>
                    <h2>25,50.</h2>
                    </div>
                </div>
                <div className="produtos">
                    <img src={food} className="fotProd" alt="foto do alimento"/>
                    <div className="detalhes">
                    <h1>Prato 003</h1>
                    <hr/>
                    <p>Resumo dos ingredientes do prato, descrição meia bomba</p>
                    <h2>25,50.</h2>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Cardapio;