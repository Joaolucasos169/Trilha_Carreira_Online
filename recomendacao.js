// recomendacao.js
document.addEventListener("DOMContentLoaded", async function() {
    try {
        // Recupera os dados do usuário do localStorage
        const userData = JSON.parse(localStorage.getItem("userData"));
        
        if (!userData) {
            console.error("Nenhum dado do usuário encontrado.");
            return;
        }

        // Envia os dados para a API do Back4App
        const response = await fetch("https://meu-backend.back4app.io/recommend", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        });

        const data = await response.json();
        const recommendationsDiv = document.getElementById("recommendations");
        
        data.recommendations.forEach(rec => {
            const recElement = document.createElement("div");
            recElement.classList.add("step");
            recElement.innerHTML = `
                <h2>${rec.nome}</h2>
                <p><strong>Carga Horária:</strong> ${rec.carga_horaria}</p>
                <p><strong>Instituição:</strong> ${rec.instituicao}</p>
                <p><strong>Endereço:</strong> ${rec.endereco}</p>
                <p><strong>Contato:</strong> ${rec.contato}</p>
                <p><strong>Site:</strong> <a href="${rec.site}" target="_blank">${rec.site}</a></p>
            `;
            recommendationsDiv.appendChild(recElement);
        });
    } catch (error) {
        console.error("Erro ao buscar recomendações:", error);
    }
});
