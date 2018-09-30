import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import PowerTween from './power-tween';
import { purple, pink } from '../theme';

const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
`;

const Icon = styled('div')`
  height: 30vmin;
  width: 30vmin;
  border-radius: 100%;
  background-color: ${purple};
  position: relative;
  svg {
    fill: whitesmoke;
  }
`;

const BadgeWrapper = styled('div')`
  height: 10vmin;
  width: 10vmin;
  position: absolute;
  top: 0;
  right: 0;
`;

const Badge = styled('div')`
  height: 10vmin;
  width: 10vmin;
  background: red;
  position: absolute;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-family: pinopolis, monospace;
  color: whitesmoke;
  z-index: 2;
  backface-visibility: hidden;
  :last-child {
    z-index: 1;
    transform: rotateY(180deg);
  }
`;

function NotificationBadge() {
  return (
    <Container>
      <Icon>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
          <path d="M9 7c-.3 0-.6.2-.9.4l-2.9 2.8c-.4.4-.3 1 0 1.4.4.4 1 .4 1.4 0L8 10.4V15c0 .5.5 1 1 1s1-.5 1-1v-4.6l1.3 1.3c.4.4 1 .4 1.4 0s.4-1 0-1.4L9.8 7.5C9.7 7.2 9.3 7 9 7zm0-5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
        <BadgeWrapper>
          <PowerTween
            anims={[
              [
                {
                  method: 'to',
                  target: child => child,
                  duration: 0.2,
                  args: [{
                    z: 150,
                  }],
                },
                {
                  method: 'to',
                  target: child => child,
                  duration: 0.3,
                  args: [{
                    rotationY: '180deg',
                  }],
                },
                {
                  method: 'to',
                  target: child => child,
                  duration: 0.2,
                  args: [{
                    z: 0,
                  }],
                },
              ],
            ]}
          >
            <div style={{ transformStyle: 'preserve-3d' }}>
              <Badge>1</Badge>
              <Badge>2</Badge>
            </div>
          </PowerTween>
        </BadgeWrapper>
      </Icon>
    </Container>
  );
}

export default NotificationBadge;
