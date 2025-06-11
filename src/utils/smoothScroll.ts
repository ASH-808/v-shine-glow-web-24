
export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export const handleNavClick = (href: string) => {
  const elementId = href.replace('#', '');
  smoothScrollTo(elementId);
};
