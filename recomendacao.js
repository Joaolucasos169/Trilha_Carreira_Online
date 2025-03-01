document.addEventListener("DOMContentLoaded", async function() {
    try {
        // Recupera os dados do usuário do localStorage
        const userData = JSON.parse(localStorage.getItem("userData"));
        
        if (!userData) {
            console.error("Nenhum dado do usuário encontrado.");
            return;
        }

        // Envia os dados para a função do Back4App
        const response = await fetch("https://parseapi.back4app.com/functions/getRecommendations", {
            method: "POST",
            headers: {
                "X-Parse-Application-Id": "eF4rMcJQ103tCmjHAJC2uqJvmDT2BzJO4SOhMi9F",
                "X-Parse-REST-API-Key": "R5prU3bdVztNUQgTuoNZxtnoxXSPdXdwyLOhicyE",
                "X-Parse-JavaScript-Key": "bxxqR6znhJBgofEjnTQLzYlq8YTtF6ei5semLwF3",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });
        
        const data = await response.json();
        const recommendationsDiv = document.getElementById("recommendations");

        // Verifica se existem recomendações
        if (data.result && data.result.recommendations) {
            data.result.recommendations.forEach(rec => {
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
        } else {
            console.error("Nenhuma recomendação encontrada.");
        }
    } catch (error) {
        console.error("Erro ao buscar recomendações:", error);
    }
});
