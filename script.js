// Modal for "Compose Mail"
let composeModal = document.getElementById("compose-modal");

// Open the compose modal
function openComposeModal() {
    composeModal.style.display = "block";
}

// Close the compose modal
function closeComposeModal() {
    composeModal.style.display = "none";
}

// Close modal if clicked outside
window.onclick = function(event) {
    if (event.target === composeModal) {
        composeModal.style.display = "none";
    }
}

// Form submission for sending an email
document.getElementById("compose-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Email sent successfully!");
    closeComposeModal();
});
