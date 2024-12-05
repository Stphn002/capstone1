document.getElementById('uploadForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the title and file input
    const imageTitle = document.getElementById('imageTitle').value;
    const imageFile = document.getElementById('imageFile').files[0];
  
    // Validate file selection
    if (!imageFile) {
      alert('Please select an image to upload!');
      return;
    }
  
    // Create a FileReader to read the image
    const reader = new FileReader();
    reader.onload = function (e) {
      // Create a new image card
      const imageCard = document.createElement('div');
      imageCard.classList.add('image-card');
  
      // Add the image and title to the card
      imageCard.innerHTML = `
        <img src="${e.target.result}" alt="${imageTitle}">
        <p>${imageTitle}</p>
      `;
  
      // Append the image card to the posted images section
      document.getElementById('postedImages').appendChild(imageCard);
  
      // Clear the form inputs
      document.getElementById('uploadForm').reset();
    };
  
    // Read the file as a data URL
    reader.readAsDataURL(imageFile);
  });
  
  