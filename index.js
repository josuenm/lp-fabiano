let listTitle = document
  .querySelector('.selected-title')
  .innerText.toLowerCase()
  .replace(/\s/g, '');

let downloadButton = document.querySelector('.download-button');
downloadButton.href = `./assets/pdfs/${listTitle}pdf.pdf`;

function handleOption({ target }) {
  document.querySelector('.select-option.active').classList.remove('active');
  target.classList.add('active');

  document.querySelector('.selected-title').innerHTML = target.innerText;
  listTitle = target.innerText.toLowerCase().replace(/\s/g, '');
  downloadButton.href = `./assets/pdfs/${listTitle}pdf.pdf`;

  document.querySelector('.molds').remove();

  let container = document.createElement('div');
  container.classList.add('molds');
  document.querySelector('.molds-container').appendChild(container);

  for (let i = 1; i <= 6; i++) {
    let imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    let image = document.createElement('img');
    let src = target.innerText.toLowerCase().replace(/\s/g, '');
    image.src = `./assets/molds/${src}0${i}.jpg`;

    imageContainer.appendChild(image);

    document.querySelector('.molds').appendChild(imageContainer);
  }
}

document.querySelectorAll('.select-option').forEach((item) => {
  item.addEventListener('click', handleOption);
});
