document.getElementById("portfolioForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        about: document.getElementById("about").value,
        skills: document.getElementById("skills").value,
        projects: document.getElementById("projects").value,
        email: document.getElementById("email").value
    };

    localStorage.setItem("portfolioData", JSON.stringify(data));
    window.location.href = "preview.html";
});

