import "./delivery.css";
import Logo002 from "./imgs/logo_mauricio.png";
import fundo from "./imgs/pexels-rajesh-tp-2098085.jpg";
import food from "./imgs/japanese-food-4984960.jpg";
import React, { useState } from "react";

function Delivery() {
  const [enderecoSelecionado, setEnderecoSelecionado] = useState(1);
  const [endereco1Aberto, setEndereco1Aberto] = useState(true);

  const selecionarEndereco = (endereco) => {
    setEnderecoSelecionado(endereco);
    setEndereco1Aberto(endereco === 1);
  };

  const [metodoSelecionado, setMetodoSelecionado] = useState(1);
  const [metodoAberto, setMetodoAberto] = useState(true);

  const selecionarMetodo = (metodo) => {
    setMetodoSelecionado(metodo);
    setMetodoAberto(metodo === 1);
  };

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
            <input type="radio" name="grupo" id="opcao1" class="radio-input" />
            <label for="opcao1"></label>

            <input type="radio" name="grupo" id="opcao2" class="radio-input" />
            <label for="opcao2"></label>

            <input
              type="radio"
              name="grupo"
              id="opcao3"
              class="radio-input"
              checked
            />
            <label for="opcao3"></label>
          </div>
        </div>
        <div id="boxContainer">
          <div id="endereco">
            <h2>ENDEREÇO</h2>
            <div className="containerEnd">
              <p>Endereço 1</p>
              <button
                className="selectEnd"
                onClick={() => selecionarEndereco(1)}
              >
                +
              </button>
            </div>
            <div>
              {endereco1Aberto && (
                <div>
                  <label>Rua</label>
                  <input type="text" placeholder="Ex:Rua da gloria" />
                  <label>Num. da Casa</label>
                  <input type="number" placeholder="Ex:1" />
                  <label>Complemento</label>
                  <input type="text" placeholder="Ex:Bloco A" />
                  <button className="addEnd2">Adicionar Endereço</button>
                </div>
              )}
              <div className="containerEnd">
                <p>Endereço 2</p>
                <button
                  className="selectEnd"
                  onClick={() => selecionarEndereco(2)}
                >
                  +
                </button>
              </div>
              {enderecoSelecionado === 2 && (
                <div>
                  <label>Rua</label>
                  <input type="text" placeholder="Ex:Rua da gloria" />
                  <label>Num. da Casa</label>
                  <input type="number" placeholder="Ex:1" />
                  <label>Complemento</label>
                  <input type="text" placeholder="Ex:Bloco A" />
                  <button className="addEnd2">Adicionar Endereço</button>
                </div>
              )}
              <div className="containerEnd">
                <p>Endereço 3</p>
                <button
                  className="selectEnd"
                  onClick={() => selecionarEndereco(3)}
                >
                  +
                </button>
              </div>
              {enderecoSelecionado === 3 && (
                <div>
                  <label>Rua</label>
                  <input type="text" placeholder="Ex:Rua da gloria" />
                  <label>Num. da Casa</label>
                  <input type="number" placeholder="Ex:1" />
                  <label>Complemento</label>
                  <input type="text" placeholder="Ex:Bloco A" />
                  <button className="addEnd2">Adicionar Endereço</button>
                </div>
              )}
              <div className="containerEnd">
                <p>Endereço 4</p>
                <button
                  className="selectEnd"
                  onClick={() => selecionarEndereco(4)}
                >
                  +
                </button>
              </div>
              {enderecoSelecionado === 4 && (
                <div>
                  <label>Rua</label>
                  <input type="text" placeholder="Ex:Rua da gloria" />
                  <label>Num. da Casa</label>
                  <input type="number" placeholder="Ex:1" />
                  <label>Complemento</label>
                  <input type="text" placeholder="Ex:Bloco A" />
                  <button className="addEnd2">Adicionar Endereço</button>
                </div>
              )}
            </div>
          </div>
          <div id="linha">+</div>
          <div id="carrinhoContainer">
            <div id="carrinho">
              <h2>CARRINHO</h2>
              
              <div id="Items">
                <p>Itens Adicionados</p>
              <div id="compras">
                <div className="produtos">
                    <img src={food} className="fotProd" alt="foto do alimento"/>
                    <div className="detalhes">
                    <h1>Prato 001</h1>
                    <hr/>
                    <article className="ingredientes">Resumo dos ingredientes do prato, descrição meia bomba</article>
                    <h2>25,50.</h2>
                    </div>
                </div>
                <h4>X</h4>
                <div className="produtos">
                    <img src={food} className="fotProd" alt="foto do alimento"/>
                    <div className="detalhes">
                    <h1>Prato 001</h1>
                    <hr/>
                    <article className="ingredientes">Resumo dos ingredientes do prato, descrição meia bomba</article>
                    <h2>25,50.</h2>
                    </div>
                </div>
                <h4>X</h4>
              </div>
              </div>
            </div>
            <div id="locations">
              <h3>Endereço Utilizado</h3>
              <p>Endereço 1</p>
            </div>
          </div>
        </div>
        <div id="containerSelect">
          <h2>FORMA DE PAGAMENTO</h2>
          <div className="titlePag">
            <p>Cartão de Crédito</p>
            <button onClick={() => selecionarMetodo(1)}>+</button>
          </div>
          <div className="functionPag">
            {metodoAberto && (
              <div className="formPag">
                <label>Número do cartão</label> <br />
                <input type="number" placeholder="Ex:2345 5678 8996 4567" />
                <br />
                <label>Validade</label>
                <br />
                <input type="date" />
                <br />
                <label>CVV</label>
                <br />
                <input type="number" placeholder="Ex:123" />
                <br />
              </div>
            )}
            <div className="titlePag">
              <p>Dinheiro</p>
              <button onClick={() => selecionarMetodo(2)}>+</button>
            </div>
            {metodoSelecionado === 2 && (
              <div className="formPag">
                <label>Precisa de Troco? Qual o valor?</label>
                <br />
                <input type="number" placeholder="Ex:100" />
                <br />
              </div>
            )}
            <div className="titlePag">
              <p>Cartão de Débito</p>
              <button onClick={() => selecionarMetodo(3)}>+</button>
            </div>
            {metodoSelecionado === 3 && (
              <div className="formPag">
                <label>Número do cartão</label>
                <br />
                <input type="number" placeholder="Ex:2345 5678 8996 4567" />
                <br />
                <label>Validade</label>
                <br />
                <input type="date" />
                <br />
                <label>CVV</label>
                <br />
                <input type="number" placeholder="Ex:123" />
                <br />
              </div>
            )}
          </div>
        </div>
        <div id="pedir">
          <hr/>
          <button id="finalizar">Finalizar Pedido</button>
          <button id="cancelar">Cancelar Pedido</button>
        </div>
      </main>
    </div>
  );
}
export default Delivery;
