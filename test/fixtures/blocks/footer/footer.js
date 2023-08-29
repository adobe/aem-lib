export default function decorate(block) {
  const p = document.createElement('p');
  p.innerHTML = 'This is a test footer block.';
  block.innerHTML = '';
  block.appendChild(p);
}
