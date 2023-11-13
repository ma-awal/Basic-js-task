function openTab(evt, tabName) {
  var i, tabContent, tabButtons;
  tabContent = document.getElementsByClassName('tab-content');
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }
  tabButtons = document.getElementsByClassName('tab-button');
  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].className = tabButtons[i].className.replace(' active', '');
  }
  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.className += ' active';
}

function toggleAccordion(evt) {
  var accordionItem = evt.currentTarget.parentNode;
  var accordionContent = accordionItem.querySelector('.accordion-content');
  var accordionIcon = accordionItem.querySelector('span');
  if (accordionContent.style.display === 'block') {
    accordionContent.style.display = 'none';
    accordionIcon.classList.remove('fa-angle-up');
    accordionIcon.classList.add('fa-angle-down');
  } else {
    accordionContent.style.display = 'block';
    accordionIcon.classList.remove('fa-angle-down');
    accordionIcon.classList.add('fa-angle-up');
  }
}

// Open the first tab by default
document.getElementById('tab1').style.display = 'block';
document.getElementsByClassName('tab-button')[0].className += ' active';
