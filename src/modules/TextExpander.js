
export function createExpandableText(text, maxLines = 2, seeMoreLabel, seeLessLabel) {
  const container = document.createElement('div');
  container.className = 'expandable-text';

  const content = document.createElement('div');
  content.className = 'expandable-content';
  content.innerHTML = text; 

  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'expand-toggle';
  toggleBtn.textContent = seeMoreLabel;

  const tempDiv = document.createElement('div');
  tempDiv.style.cssText = `
    position: absolute;
    visibility: hidden;
    width: ${content.offsetWidth || '600px'};
    font-size: 1rem;
    line-height: 1.7;
    padding: 0;
    margin: 0;
    font-family: inherit;
  `;
  tempDiv.innerHTML = text;
  document.body.appendChild(tempDiv);
  const fullHeight = tempDiv.scrollHeight;
  document.body.removeChild(tempDiv);

  const lineHeight = parseFloat(getComputedStyle(document.body).lineHeight) || 1.7;
  const maxHeight = maxLines * lineHeight * 1.2;

  let isExpanded = false;

  function updateView() {
    if (isExpanded) {
      content.style.maxHeight = 'none';
      toggleBtn.textContent = seeLessLabel;
    } else {
      content.style.maxHeight = maxHeight + 'px';
      content.style.overflow = 'hidden';
      toggleBtn.textContent = seeMoreLabel;
    }
  }

  if (fullHeight <= maxHeight + 10) {
    content.style.maxHeight = 'none';
    toggleBtn.style.display = 'none';
  } else {
    content.style.maxHeight = maxHeight + 'px';
    content.style.overflow = 'hidden';
    toggleBtn.addEventListener('click', () => {
      isExpanded = !isExpanded;
      updateView();
    });
  }

  container.appendChild(content);
  container.appendChild(toggleBtn);

  return container;
}