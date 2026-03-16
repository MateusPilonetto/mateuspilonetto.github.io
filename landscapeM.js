const btnMenu = document.getElementById("menu-btn");
const secaoMenu = document.getElementById("menuOpened");

btnMenu.addEventListener("click", (evento) => {
  evento.stopPropagation();
  secaoMenu.classList.toggle("active");
});

document.addEventListener("click", (evento) => {
  if (
    !secaoMenu.contains(evento.target) &&
    evento.target !== btnMenu &&
    !btnMenu.contains(evento.target)
  ) {
    secaoMenu.classList.remove("active");
  }
});

const linksMenu = secaoMenu.querySelectorAll("a");
linksMenu.forEach((link) => {
  link.addEventListener("click", () => {
    secaoMenu.classList.remove("active");
  });
});

// Formulário

const form = document.querySelector("#form");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const msg = document.querySelector("#msg");
const btn = document.querySelector("#btn");
const msgOk = document.querySelector(".msgOk");
const btnOk = document.querySelector("#btnOk");

console.log("Check:", nome.checkValidity());
console.log("Report:", nome.reportValidity());

console.log("Check:", email.checkValidity());
console.log("Report:", email.reportValidity());

console.log("Check:", msg.checkValidity());
console.log("Report:", msg.reportValidity());

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const form = event.target;

  const serviceID = "service_c3o3ral";
  const templateID = "template_6mz82ie";

  emailjs.sendForm(serviceID, templateID, form).then(
    () => {
      msgOk.style.display = "inline";
      form.reset();
      btnOk.addEventListener("click", () => {
        msgOk.style.display = "none";
      });
    },
    (err) => {
      alert("Erro ao enviar: " + JSON.stringify(err));
    },
  );
});
