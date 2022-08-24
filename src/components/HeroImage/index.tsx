import React from 'react';
//styles
import { Wrapper } from './HomeImage.styles';
//Types
type Props = {
  image: string,
}
// вместо обращения к ключам пропса, лучше использовать деструктуризацию и сразу передавать
// нужные ключи. Так гораздо читабельнее и это ES6 синтакс
const HeroImage: React.FC<Props> = ({ image}) => {
  return (
    <Wrapper image={image}/>
  )
};

export default HeroImage;
