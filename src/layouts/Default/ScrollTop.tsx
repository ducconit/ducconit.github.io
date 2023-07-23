import React, { useEffect, useState } from 'react';

interface ProgressScrollProps {
  width?: number;
  height?: number;
  borderSize?: number;
  mainBgColor?: string;
  lightBorderColor?: string;
  darkBorderColor?: string;
  fontSize?: string;
}

const ProgressScroll: React.FC<ProgressScrollProps> = ({
  width = 50,
  height = 50,
  borderSize = 5,
  mainBgColor = '#222F43',
  lightBorderColor = '#0EA5EA',
  darkBorderColor = '#0F172A',
  fontSize = '20px',
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;
      const maxOffset = bodyHeight - windowHeight;
      const currentOffset = window.pageYOffset || document.documentElement.scrollTop;
      const currentProgress = Math.min(100, Math.round((currentOffset / maxOffset) * 100));

      setProgress(currentProgress);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    window.addEventListener('load', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="progressScroll" style={{ width, height, position: 'fixed', bottom: '20px', right: '20px',zIndex:999 }}>
      <div
        className="progressScroll-border"
        style={{
          position: 'relative',
          textAlign: 'center',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          backgroundColor: darkBorderColor,
          backgroundImage: `conic-gradient(${lightBorderColor} 0%, ${lightBorderColor} ${progress * 3.6}deg, transparent ${progress * 3.6}deg, transparent 360deg)`,
          backgroundRepeat: 'no-repeat',
        }}
        onClick={scrollToTop}
      >
        <div
          className="progressScroll-circle"
          style={{
            position: 'relative',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            width: width - borderSize,
            height: height - borderSize,
            borderRadius: '50%',
            backgroundColor: mainBgColor,
          }}
        >
          <span
            className="progressScroll-text"
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position: 'absolute', fontSize }}
          >
            <i className="fi-rr-arrow-small-up"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressScroll;
