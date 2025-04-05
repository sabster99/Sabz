// Select all links and sections
const newLink = document.getElementById("new-link");
const menLink = document.getElementById("men-link");
const womenLink = document.getElementById("women-link");
const kidsLink = document.getElementById("kids-link");

const newSection = document.getElementById("new-section");
const menSection = document.getElementById("men-section");
const womenSection = document.getElementById("women-section");
const kidsSection = document.getElementById("kids-section");

// Function to toggle visibility of a section
function toggleSection(section) {
    // Check if the section is currently visible
    if (section.style.display === "flex" || section.style.display === "block") {
        section.style.display = "none"; // Hide it if it's visible
    } else {
        // Hide all other sections first
        newSection.style.display = "none";
        menSection.style.display = "none";
        womenSection.style.display = "none";
        kidsSection.style.display = "none";
        
        // Show the clicked section
        section.style.display = "flex"; // or 'block' depending on your layout
    }
}

// Add click event listeners to each link
newLink.addEventListener("click", function(event) {
    event.preventDefault();
    toggleSection(newSection);
});

menLink.addEventListener("click", function(event) {
    event.preventDefault();
    toggleSection(menSection);
});

womenLink.addEventListener("click", function(event) {
    event.preventDefault();
    toggleSection(womenSection);
});

kidsLink.addEventListener("click", function(event) {
    event.preventDefault();
    toggleSection(kidsSection);
});

  
  
  const firstVpButton = document.querySelector('.first-vp-button');

firstVpButton.addEventListener('click', function() {
  alert("Please select a category from the navigation bar to begin.");
});
