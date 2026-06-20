const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.global-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    });
  });
}

const trainingHeading = [...document.querySelectorAll('h3')]
  .find((heading) => heading.textContent.trim() === '主な研修・受賞');

if (trainingHeading) {
  const trainingList = trainingHeading.nextElementSibling;
  if (trainingList?.tagName === 'UL') {
    trainingList.innerHTML = `
      <li>全がん連「がん教育外部講師eラーニング」修了</li>
      <li>愛知県「がんのピア・サポーター養成講座」修了</li>
      <li>日本癌治療学会学術集会 第56回PALプログラム 優秀ポスター賞など</li>
    `;
  }
}

const heroVisual = document.querySelector('.hero-visual');
if (heroVisual && !heroVisual.querySelector('.hero-character-caption')) {
  const caption = document.createElement('p');
  caption.className = 'hero-character-caption';
  caption.textContent = 'シャチホコ記念カフェ公式キャラクター「ハニカム君」';
  Object.assign(caption.style, {
    position: 'absolute',
    left: '50%',
    bottom: '4px',
    transform: 'translateX(-50%)',
    zIndex: '2',
    margin: '0',
    padding: '6px 12px',
    width: 'max-content',
    maxWidth: '95%',
    borderRadius: '999px',
    background: 'rgba(255,255,255,.92)',
    color: '#173a63',
    fontSize: '.82rem',
    fontWeight: '700',
    lineHeight: '1.5',
    textAlign: 'center',
    boxShadow: '0 8px 22px rgba(33,52,73,.10)'
  });
  heroVisual.appendChild(caption);
}
