// ScrollToSection.js
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../../Pages/Menu/Menu/Menu';

const ScrollToSection = () => {
  const { sectionId } = useParams();

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [sectionId]);

  return <Menu />;
};

export default ScrollToSection;
