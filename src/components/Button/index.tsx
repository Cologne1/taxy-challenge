import React, { useState } from 'react'
import { useInViewEffect } from 'react-hook-inview'
//styles
import { Wrapper } from './Button.styles';
//Types
type Props = {
  text: string,
  callback:  (() => void),
}

const Button: React.FC<Props> = ({ text, callback }) => {
  const [isVisible, setIsVisible] = useState(false)

  const ref = useInViewEffect(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        callback();
      }
      setIsVisible(entry.isIntersecting)
    },
    { threshold: 1 },
  )
  return (
    <>
      <Wrapper ref={ref} type='button' onClick={callback}>
      </Wrapper>
    </>
  );
};

export default Button;
