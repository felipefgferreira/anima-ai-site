export const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
  e.preventDefault();
  const sectionId = path.replace("#", "");
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
