window.addEventListener("scroll", monitorarScroll);

/**
 * Esta função monitora o scroll, decidindo entre mostrar ou não o botão de id `scrollbutton`.
 */
function monitorarScroll() {
  if (window.scrollY > 0) {
    document.querySelector(".scrollButton").style.display = "block";
  } else {
    document.querySelector(".scrollButton").style.display = "none";
  }
}

/**
 * Esta função recebe um elemento e a partir do id deste elemento navega até ele.
 * @param {string} elemento - Refere-se ao nome do id elemento a ser navegado.
 * @param {boolean} msg - A variável recebe 'true' caso o elemento for da barra de navegação.
 */
function goTo(elemento, msg = false) {
  window.scrollTo({ top: document.getElementById(elemento).offsetTop - 100, behavior: "smooth" });
  if (msg) {
    menuMobile();
  }
}

/**
 * Esta função alterna entre o menu mobile abrir ou não.
 */
function menuMobile() {
  const lista = document.getElementById("lista");
  lista.classList.toggle("ativo");
  lista.classList.remove("inicio");
}

/**
 * Esta função cria uma animação de máquina de escrever na tag h1.
 */
function typeWriter() {
  const elemento = document.querySelector("h1");
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 100 * i);
  });
}

typeWriter();
