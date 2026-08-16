const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#main-nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

// Replace this once the repository exists, e.g. https://github.com/4pillars/policy-commons.
const repositoryUrl = 'https://github.com/';
document.querySelectorAll('[data-repo-link]').forEach((link) => {
  link.href = repositoryUrl;
});
