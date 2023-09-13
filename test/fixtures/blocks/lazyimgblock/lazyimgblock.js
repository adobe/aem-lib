export default async function decorate(block) {
  return new Promise((resolve) => {
    const img = document.createElement('img');
    img.src = '/test/fixtures/logo.png';
    img.loading = 'lazy';
    block.innerHTML = '';
    block.appendChild(img);
    resolve();
  });
}
