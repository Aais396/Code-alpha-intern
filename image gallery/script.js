document.addEventListener('DOMContentLoaded', function () {
    // Select all delete buttons
    const deleteButtons = document.querySelectorAll('.delete-btn');

    deleteButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Find the closest <li> element and remove it
            const listItem = button.closest('li');
            if (listItem) {
                listItem.remove();
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('bton');
    const fileInput = document.getElementById('file-input');
    const imageList = document.querySelector('.images ul'); // Define imageList as the ul element
  
    addButton.addEventListener('click', function () {
      fileInput.click();
    });
  
    fileInput.addEventListener('change', function () {
      const files = fileInput.files;
  
      for (const file of files) {
        if (file && file.type.startsWith('image/')) {
          const imgElement = document.createElement('img');
          imgElement.src = URL.createObjectURL(file); // Use URL.createObjectURL() to create a URL for the file
          imgElement.alt = file.name;
          imgElement.style.maxWidth = '250px'; // Optional: limit the size of the displayed image
  
          const listItem = document.createElement('li');
          listItem.style.listStyle = 'none'; // Optional: remove default list styling
  
          const imgContainer = document.createElement('div');
          imgContainer.className = 'image-container'; // Optional: add class for styling
          imgContainer.appendChild(imgElement);
  
          const buttonContainer = document.createElement('div');
          buttonContainer.className = 'btn';
  
          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
          deleteButton.className = 'delete-btn';
          deleteButton.addEventListener('click', function () {
            listItem.remove();
          });
  
          buttonContainer.appendChild(deleteButton);
          listItem.appendChild(imgContainer);
          listItem.appendChild(buttonContainer);
          imageList.appendChild(listItem);
        }
      }
    });
  });