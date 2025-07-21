import React from 'react';
import { Screen, AppLogo, Title, Text } from './WelcomePage.styles';

const WelcomePage = ({ onNext, logo, title, subtitle }) => (
  <Screen onClick={onNext}>
    <AppLogo src={logo} alt="logo" />
    <Title>{title}</Title>
    <Text>{subtitle}</Text>
  </Screen>
);

export default WelcomePage;