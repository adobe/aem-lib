export default async function decorate(block) {
  return new Promise((resolve) => {
    const p = document.createElement('p');
    p.innerHTML = 'This is an async loaded block.';
    block.innerHTML = '';
    block.appendChild(p);
    resolve();
  });
}
