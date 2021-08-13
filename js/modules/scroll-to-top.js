export default function initScrollToTop() {
  const backToTopBtnEl = document.querySelector('[data-id="back-to-top"]');

  backToTopBtnEl.addEventListener('click', () => {
    window.scrollTo({
      top: 0, 
      behavior: "smooth"
    });
  })
}