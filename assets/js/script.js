let typeBorderRadius = 'px'

function setBorderRadius() {
  const topLeft = document.getElementById('topLeft').value
  const topRight = document.getElementById('topRight').value
  const bottomLeft = document.getElementById('bottomLeft').value
  const bottomRight = document.getElementById('bottomRight').value

  document.querySelector('.box').style.borderRadius = `${topLeft}${typeBorderRadius} ${topRight}${typeBorderRadius} ${bottomRight}${typeBorderRadius} ${bottomLeft}${typeBorderRadius}`;

  let copyText = document.getElementById("copyArea");
  copyText.value = `border-radius: ${topLeft}${typeBorderRadius} ${topRight}${typeBorderRadius} ${bottomRight}${typeBorderRadius} ${bottomLeft}${typeBorderRadius}`;
}

setBorderRadius()

function setBorderRadiusType(type) {
  typeBorderRadius = type
  setBorderRadius()
}

function copyCode() {
  let copyText = document.getElementById("copyArea");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  
  let tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copiado!";
}

function outFunc() {
  let tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copiar Código";
}