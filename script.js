// Check if a visit count already exists in localStorage
let visitCount = localStorage.getItem("visit-count");

// If not, set it to 1 (first visit)
if (!visitCount) {
    visitCount = 1;
} else {
    // If it exists, increment by 1
    visitCount = parseInt(visitCount) + 1;
}

// Store the updated count back in localStorage
localStorage.setItem("visit-count", visitCount);

// Update the visit count on the webpage
document.getElementById('visitCount').textContent = visitCount;
