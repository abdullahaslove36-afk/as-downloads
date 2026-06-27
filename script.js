async function loadApps() {
    const response = await fetch("apps.json");
    const apps = await response.json();

    const container = document.getElementById("apps");

    container.innerHTML = "";

    apps.forEach(app => {
        container.innerHTML += `
        <div class="card">
            <img src="${app.image}" alt="${app.name}">
            <h2>${app.name}</h2>
            <p>Category: ${app.category}</p>
            <a class="download" href="${app.download}" target="_blank">
                Download
            </a>
        </div>
        `;
    });
}

loadApps();

function searchApps() {
    let input = document.getElementById("search").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let title = card.querySelector("h2").innerText.toLowerCase();

        if (title.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
          }
