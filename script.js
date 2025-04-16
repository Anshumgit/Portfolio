<script>
    
    let visitCount = localStorage.getItem("visit-count");
    if (!visitCount) {
        visitCount = 1
    } else {
        visitCount = parseInt(visitCount) + 1
    }
    localStorage.setItem("visit-count", visitCount);
    document.getElementById("visitCount").textContent = visitCount;
</script>
