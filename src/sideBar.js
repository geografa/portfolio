// create sidebar toggle function
export function toggleSidebar(map) {
  const toggleButton = document.getElementById("sidebar-toggle");
  const sidebar = document.querySelector(".sidebar");

  toggleButton.addEventListener("click", () => {
    // Toggle the sidebar's position
    sidebar.classList.toggle("active");

    // Determine the new padding value
    const padding = sidebar.classList.contains("active") ? 0 : 300;
    console.log(padding);
    // Use map.easeTo to shift the map by the padding amount
    map.easeTo({
      padding: { left: padding },
      duration: 1000, // Adjust the duration as needed
    });
  });
}
