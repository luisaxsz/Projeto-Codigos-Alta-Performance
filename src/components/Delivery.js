import "./delivery.css";
import Logo002 from "./imgs/logo_mauricio.png";
import fundo from "./imgs/japanese-food-4984960.jpg";

function Delivery() {
  return (
    <div>
      <header>
        <img src={Logo002} id="logo" alt="Logo da pagina" />
        <img src={fundo} id="fundo" alt="fundo da pagina" />
        <div id="perfil">
          <p>Fulano Silva</p>
          <div id="icone">perfil</div>
        </div>
        <div id="navegar">
          <nav>
            <ul id="escolha">
              <li>Cardápio</li>
              <li>Reserva</li>
              <li className="selecionado">Delivery</li>
            </ul>
          </nav>
        </div>
        <hr />
      </header>
      <main>
        <div id="bolinha">
          <div>
            <input
              type="radio"
              name="grupo"
              id="opcao1"
              class="radio-input"
            />
            <label for="opcao1"></label>

            <input type="radio" name="grupo" id="opcao2" class="radio-input" />
            <label for="opcao2"></label>

            <input type="radio" name="grupo" id="opcao3" class="radio-input" checked/>
            <label for="opcao3"></label>
          </div>
        </div>
        <div id="endereco">
            <h2>ENDEREÇO</h2>
            <div>
                <p>Endereço 1</p>
                <label>Rua</label>
                <input type="text" placeholder="tal de tal de tal"/>
                <label>Num. da Casa</label>
                <input type="number" placeholder="tal de tal de tal"/>
                <label>Complemento</label>
                <input type="text" placeholder="tal de tal de tal"/>
                <button>Adicionar Endereço</button>
                <p>Endereço 2 <span>+</span></p>
                <p>Endereço 3 <span>+</span></p>
                <p>Endereço 4 <span>+</span></p>
            </div>
        </div>
        <div id="linha"></div>
        <div id="carrinho">
            <h2>CARRINHO</h2>
            <div id="Items">
                <p>Itens Adicionados</p>
                <div></div> 
            </div>
            <div id="locations">
                <h3>Endereço Utilizado</h3>
                <p id="check">Endereço 1 <span>v</span></p>
                <p>Endereço 2 <span>+</span></p>
                <p>Endereço 3 <span>+</span></p>
                <p>Endereço 4 <span>+</span></p>
            </div>
        </div>
      </main>
    </div>
  );
}
export default Delivery;
