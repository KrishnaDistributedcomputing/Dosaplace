document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");
    const placesList = document.getElementById("placesList");

    // Sample JSON data (replace with your data)
    const placesData = [
        { name: "Hotel 1", type: "Hotel" },
        { name: "Dosa Place 1", type: "Dosa" },
        // Add more entries here
    ];

    // Function to render the list
    function renderList(query) {
        placesList.innerHTML = "";

        placesData.forEach((place) => {
            if (query === "" || place.name.toLowerCase().includes(query.toLowerCase())) {
                const item = document.createElement("a");
                item.className = "list-group-item";
                item.textContent = `${place.name} (${place.type})`;
                placesList.appendChild(item);
            }
        });
    }

    // Initial render
    renderList("");

    // Search input event listener
    searchInput.addEventListener("input", function () {
        renderList(this.value);
    });
});
