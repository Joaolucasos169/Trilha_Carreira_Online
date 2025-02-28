// Lógica de interação
document.addEventListener("DOMContentLoaded", function() {
    alert("Bem-vindo ao sistema!");
});

document.getElementById("area").addEventListener("change", function() {
    const courseSelect = document.getElementById("course");
    const courseLabel = document.getElementById("course-label");
    courseSelect.innerHTML = ""; // Limpa as opções anteriores

    const selectedArea = this.value;

    // Opções de cursos por área
    const coursesByArea = {
        ArteDesign: ["Design Gráfico", "Design de Moda", "Artes Visuais", "Arquitetura e Urbanismo", "Design de Games"],
        tecnologia: ["Desenvolvimento de Software", "Desenvolvimento Web", "Ciência de Dados", "Cibersegurança", "Inteligência Artificial"],
        saude: ["Biomedicina", "Enfermagem", "Fisioterapia", "Farmácia", "Medicina", "Psicologia"],
        engenharia: ["Engenharia Civil", "Engenharia Mecânica", "Engenharia Elétrica", "Engenharia Ambiental"],
        negocios: ["Administração", "Contabilidade", "Finanças", "Recursos Humanos"],
        beleza: ["Estética", "Cabeleireiro", "Manicure e Pedicure", "Cosmetologia"],
        marketing: ["Marketing Digital", "Publicidade e Propaganda", "Jornalismo", "Relações Públicas"]
    };

    if (selectedArea) {
        courseLabel.style.display = "block";
        courseSelect.style.display = "block";

        // Adiciona as opções ao campo de curso
        coursesByArea[selectedArea].forEach(course => {
            let option = document.createElement("option");
            option.value = course.toLowerCase().replace(/\s/g, "_");
            option.textContent = course;
            courseSelect.appendChild(option);
        });
    } else {
        courseLabel.style.display = "none";
        courseSelect.style.display = "none";
    }
});

document.getElementById("career-form").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const userData = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        city: document.getElementById("city").value,
        area: document.getElementById("area").value,
        course: document.getElementById("course").value,
        education: document.getElementById("education").value
    };

    // Salva os dados no localStorage para serem usados na página de recomendações
    localStorage.setItem("userData", JSON.stringify(userData));
    
    // Redireciona para a página de recomendações
    window.location.href = "recomendacao.html";
});
