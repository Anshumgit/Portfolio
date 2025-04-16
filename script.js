{/* <script>
    
    let visitCount = localStorage.getItem("visit-count");
    if (!visitCount) {
        visitCount = 1
    } else {
        visitCount = parseInt(visitCount) + 1
    }
    localStorage.setItem("visit-count", visitCount);
    document.getElementById("visitCount").textContent = visitCount;
</script> */}


fetch('https://api.countapi.xyz/update/anshum-portfolio/visits/?amount=1')
  .then(res => res.json())
  .then(data => {
    document.getElementById('visitCount').textContent = data.value;
  });
