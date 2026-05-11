function showPage(id) {
  const pages = document.querySelectorAll(".page");

  pages.forEach((page) => {
    page.classList.remove("active");
  });

  const selectedPage = document.getElementById(id);

  if (selectedPage) {
    selectedPage.classList.add("active");
    window.scrollTo(0, 0);
  }
}

const applicationForm = document.getElementById("applicationForm");
const applicationMessage = document.getElementById("applicationMessage");

applicationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const age = parseInt(document.getElementById("age").value, 10);
  const country = document.getElementById("country").value.trim();
  const interest = document.getElementById("interest").value;
  const researchIdea = document.getElementById("researchIdea").value.trim();
  const whyJoin = document.getElementById("whyJoin").value.trim();

  if (!name || !age || !country || !interest || !researchIdea || !whyJoin) {
    applicationMessage.textContent = "Por favor completa todos los campos.";
    applicationMessage.style.color = "#dc3545";
    return;
  }

  if (age < 13 || age > 18) {
    applicationMessage.textContent =
      "Gracias por tu interés, " +
      name +
      ". Por seguridad, el programa principal está diseñado para estudiantes de 13 a 18 años.";
    applicationMessage.style.color = "#dc3545";
    return;
  }

  applicationMessage.textContent =
    "¡Aplicación recibida, " +
    name +
    "! Área de interés: " +
    interest +
    ". País: " +
    country +
    ".";
  applicationMessage.style.color = "#28a745";

  applicationForm.reset();
});

function joinWorkshop() {
  alert(
    "Los talleres estarán disponibles cuando comience la temporada oficial del programa. En el futuro, aquí aparecerán horarios, mentores y enlaces seguros."
  );
}

function reportIssue(area) {
  const details = prompt(
    "Reportando incidente relacionado con: " +
      area +
      ". Describe brevemente el problema:"
  );

  if (details && details.trim() !== "") {
    alert(
      "Reporte enviado. Gracias por ayudar a mantener la comunidad segura. Un moderador revisará el caso."
    );
  } else {
    alert("Reporte cancelado.");
  }
}

function showMentorForm() {
  const mentorForm = document.getElementById("mentorForm");

  if (mentorForm.classList.contains("hidden")) {
    mentorForm.classList.remove("hidden");
  } else {
    mentorForm.classList.add("hidden");
  }
}

function submitMentorForm() {
  alert(
    "Gracias por tu interés en ser mentor. En una versión real, esta información se enviaría a un equipo de revisión."
  );
}