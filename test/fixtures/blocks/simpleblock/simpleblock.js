export default function decorate(block) {
  const p = document.createElement('p');
  p.innerHTML = 'This is a simple block.';
  block.innerHTML = '';
  block.appendChild(p);
}
