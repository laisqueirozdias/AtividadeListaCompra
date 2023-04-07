const inputDescricao = document.getElementById("inputDescricao");
const inputQuantidade = document.getElementById("inputQuantidade");
const inputPreco = document.getElementById("inputPreco");
const btAdicionar = document.getElementById("btAdicionar");
const btLimpar = document.getElementById("btLimpar");
const novaTabela = document.getElementById("novaTabela");

let objetoItems = [];

const redesenhaObjeto = (objetoItems) => {
    novaTabela.innerHTML = '';
    for (let index = 0; index < objetoItems.length; ++index) {
   const tabela = document.createElement('tr');
   const descricao = document.createElement('th');
   const quantidade = document.createElement('th');
   const preco = document.createElement('th');
   descricao.textContent = objetoItems[index].desc;
   quantidade.textContent = objetoItems[index].qtd;
   preco.textContent = objetoItems[index].valor;
   tabela.appendChild(descricao);
   tabela.appendChild(quantidade);
   tabela.appendChild(preco);
   novaTabela.appendChild(tabela);
    }
};

const handleBtAdicionarClick = () => {
  const descricao = inputDescricao.value;
  const quantidade = inputQuantidade.value;
  const preco = inputPreco.value;
  if (!descricao) {
    alert("Necessário digitar um item!");
    return;
  }
  else if (!quantidade) {
    alert("Necessário digitar uma quantidade!");
    return;
  }
  else if (!preco) {
    alert("Necessário digitar um valor!");
    return;
  }
 
  inputDescricao.value = '';
  inputQuantidade.value = '';
  inputPreco.value = '';
  inputDescricao.focus();
  objetoItems.push({
    desc: descricao, 
    qtd: quantidade,
    valor: preco
  });
  redesenhaObjeto(objetoItems);
};

const handleBtLimparClick = () => {
  objetoItems = [];
  novaTabela.innerHTML = '';
    inputDescricao.focus();
};

btAdicionar.onclick = handleBtAdicionarClick;
btLimpar.onclick = handleBtLimparClick;