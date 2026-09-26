// The existing archive's URL-based filter, without a router or layout algorithm.
const links = [...document.querySelectorAll('[data-filter-link]')];
const cards = [...document.querySelectorAll('[data-filterable]')];
const status = document.querySelector('[data-filter-status]');
const valid = new Set(links.map(link => link.dataset.filterLink));

function readFilter() {
  const value = new URLSearchParams(location.search).get('filter');
  return valid.has(value) ? value : 'show-all';
}

function applyFilter(filter) {
  cards.forEach(card => {
    card.hidden = filter !== 'show-all' && card.dataset.category !== filter;
  });
  links.forEach(link => {
    if (link.dataset.filterLink === filter) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  const label = links.find(link => link.dataset.filterLink === filter).textContent.trim();
  const count = cards.filter(card => !card.hidden).length;
  status.textContent = `${label}: ${count} ${count === 1 ? 'entry' : 'entries'}. About and Contacts remain available.`;
}

links.forEach(link => link.addEventListener('click', event => {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  const filter = link.dataset.filterLink;
  const url = new URL(location.href);
  if (filter === 'show-all') url.searchParams.delete('filter');
  else url.searchParams.set('filter', filter);
  if (url.href !== location.href) history.pushState({ filter }, '', url);
  applyFilter(filter);
}));

window.addEventListener('popstate', () => applyFilter(readFilter()));
window.addEventListener('pageshow', () => applyFilter(readFilter()));
applyFilter(readFilter());
