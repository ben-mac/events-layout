// Show second row of events when button clicked

const loadMore = document.querySelector('.load-more');
const events = document.querySelector('.more-events');

function addClass() {
  events.classList.add('open');
};

loadMore.addEventListener('click', addClass);