export const scrollTo = () => {
  const hash = window.location.hash.substr(1);
  if (hash) {
    const targetElement = document.getElementById(hash);
    if (targetElement) {
      setTimeout(() => {
        const offsetTop = targetElement.offsetTop;
        window.scrollTo({
          top: offsetTop - 50,
          behavior: 'smooth',
        });
      }, 100);
    }
  }
};
