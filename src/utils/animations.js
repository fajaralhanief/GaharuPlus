// Framer Motion Animation Variants & Spring Configurations

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const slideUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08
    }
  }
};

export const cardHover = {
  rest: { y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  hover: { 
    y: -7, 
    transition: { duration: 0.3, ease: 'easeOut' } 
  }
};

export const buttonTap = {
  scale: 0.97
};

