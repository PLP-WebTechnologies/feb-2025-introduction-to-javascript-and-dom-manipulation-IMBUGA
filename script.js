// Change text content dynamically
document.getElementById("changeTextBtn").addEventListener("click", function () {
    const description = document.getElementById("description");
    description.textContent = "🎉 Text has been changed using JavaScript!";
    description.style.color = "green"; // Modify CSS style via JS
  });
  
  // Add or remove an image from Pexels when a button is clicked
  document.getElementById("toggleElementBtn").addEventListener("click", function () {
    const existingImg = document.getElementById("pexelsImage");
  
    if (existingImg) {
      existingImg.remove();
    } else {
      const img = document.createElement("img");
      img.id = "pexelsImage";
      img.src = "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=600";
      img.alt = "Beautiful scenery from Pexels";
      img.style.width = "300px";
      img.style.marginTop = "20px";
      document.body.appendChild(img);
    }
  });
  