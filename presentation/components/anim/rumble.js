import React from 'react';
import { css, keyframes } from 'emotion';
import AddRemoveClassname from '../add-remove-classname';

const magnitude = 4;
const rot = magnitude * 1.5;

const rumbleAnim = keyframes`
  0% {transform: rotate(0deg);}
  25% {transform: translate(${magnitude}px, 0px) rotate(-${rot}deg);}
  50% {transform: translate(0px, -${magnitude}px) rotate(${rot}deg);}
  75% {transform: translate(-${magnitude}px, 0px) rotate(${rot}deg);}
  100% {transform: translate(0px, 2px) rotate(${rot}deg);} 
`;

const rumbleStyle = css`
  animation: ${rumbleAnim} .0625s infinite linear;
`;

function Rumble(props) {
  return (
    <AddRemoveClassname className={rumbleStyle}><div>{props.children}</div></AddRemoveClassname>
  );
}

export default Rumble;
