import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const withScrollAnimation = (WrappedComponent: React.ComponentType) => {
  const AnimatedComponent = (props: any): JSX.Element => {
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);

    const onScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      }
    };

    useEffect(() => {
      window.addEventListener('scroll', onScroll);
      onScroll(); // Trigger it once initially in case the component is already in view on load
      return () => window.removeEventListener('scroll', onScroll);
    }, [controls]);

    const variants = {
      visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
      hidden: { opacity: 0, scale: 0.8 }
    };

    return (
      <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
        <WrappedComponent {...props} />
      </motion.div>
    );
  };

  // Setting the display name for debugging purposes
  AnimatedComponent.displayName = `WithScrollAnimation(${getDisplayName(WrappedComponent)})`;

  return AnimatedComponent;
};

// Function to get the display name of a component
function getDisplayName(WrappedComponent: React.ComponentType) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withScrollAnimation;
