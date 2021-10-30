import { useRef } from 'react';

const RippleButton = ({ children, className, ...rest }) => {
  const button = useRef(null);

  const rippleEffect = (e) => {
    const x = e.clientX - e.target.getBoundingClientRect().left;
    const y = e.clientY - e.target.getBoundingClientRect().top;
    
    let span = document.createElement('span');
    span.style.top = `${y}px`;
    span.style.left = `${x}px`;
    span.style.transform = 'translate(-50%, -50%)';

    span.className = 'ripple';

    button.current.appendChild(span);
    setTimeout(() => button.current.removeChild(span), 1000);
  };

  return (
    <button
      ref={button}
      className={`btn ${className}`}
      onClick={rippleEffect}
      {...rest}
    >
      {children}
    </button>
  );
};

export default RippleButton;
