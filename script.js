const pegarValor = () => {
  // Pega o valor do input pelo ID
  const valor = document.getElementById("input-text").value;
  // Exibe o valor no parágrafo com ID 'resultado'

  // Seleciona o elemento onde você deseja adicionar a li
  const ulElement = document.querySelector("ul");

  // Cria a tag li
  const liElement = document.createElement("li");

  // Cria o input do tipo checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "input-checkbox";

  // Cria o label
  const label = document.createElement("label");
  label.setAttribute("for", "input-checkbox");
  label.textContent = valor;

  // Cria a imagem
  const img = document.createElement("img");
  img.src = "./assets/icon_delete.svg";
  img.alt = "Delete Icon";
  img.onclick = () => {
    if (checkbox.checked) {
      // Verifica se o checkbox está marcado
      liElement.remove(); // Remove a li correspondente

      // Seleciona o elemento com a classe 'alert-img' e altera o display para block
      const alertImg = document.querySelector(".alert-img");
      if (alertImg) {
        alertImg.style.display = "block";
      }
    } else {
      alert("Por favor, selecione o item que deseja apagar.");
    }
  };

  // Adiciona os elementos criados à li
  liElement.appendChild(checkbox);
  liElement.appendChild(label);
  liElement.appendChild(img);

  // Adiciona a li à ul
  ulElement.appendChild(liElement)[0];
  document.getElementById("input-text").value = "";
};

const deleteImg = () => {
  const alertImg = document.querySelector(".alert-img");
  alertImg.style.display = "none";
};
