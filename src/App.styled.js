import styled from 'styled-components';

export const BodyContainer = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  min-width: 100vw;
  background: white;
  box-sizing: border-box;
`;

export const SquareContainer = styled.div`
  --size: min(100vh, 100vw);
  width: var(--size);
  height: var(--size);
  display: grid;
  grid-template-rows: 1fr 13fr 1fr;
  background: white;
  border-radius: 24px;
  box-shadow: 0 0 24px rgba(0,0,0,0.08);
  overflow: hidden;
  box-sizing: border-box;
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 0 2rem;
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const HomeButton = styled.button`
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 0.5rem;
  display: grid;
  place-items: center;
  width: 3.5rem;
  height: 3.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  img {
    width: 70%;
    height: 70%;
    object-fit: contain;
  }
`;

export const RuButton = styled.button`
  background: ${props => props.$active ? '#2563eb' : 'white'};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 0.5rem;
  display: grid;
  place-items: center;
  width: 3.5rem;
  height: 3.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  margin-left: 0.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${props => props.$active ? 'white' : '#2563eb'};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
  &:active {
    transform: scale(0.98);
  }
`;

export const TjButton = styled.button`
  background: ${props => props.$active ? '#2563eb' : 'white'};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 0.5rem;
  display: grid;
  place-items: center;
  width: 3.5rem;
  height: 3.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  margin-left: 0.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${props => props.$active ? 'white' : '#2563eb'};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
  &:active {
    transform: scale(0.98);
  }
`;

export const TimeText = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
  text-align: right;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 1rem;
  justify-self: end;
`;

export const Main = styled.main`
  display: grid;
  place-items: center;
  overflow: hidden;
  background: white;
  padding: 1rem;
  width: 100%;
  height: 100%;
`;

export const Footer = styled.footer`
  display: grid;
  align-items: center;
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  overflow: hidden;
  padding: 0.5rem 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
`;

export const MarqueeFooter = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  
  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 2rem;
    z-index: 1;
    pointer-events: none;
  }
  
  &::before {
    left: 0;
    background: linear-gradient(90deg, #2563eb, transparent);
  }
  
  &::after {
    right: 0;
    background: linear-gradient(90deg, transparent, #2563eb);
  }
`;

export const MarqueeText = styled.span`
  display: inline-block;
  font-size: clamp(0.9rem, 2.2vw, 1.1rem);
  color: white;
  font-weight: 500;
  padding: 0.5rem 0;
  padding-left: 100%;
  animation: marquee 20s linear infinite;
  
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }

  span {
    display: inline-flex;
    align-items: center;
    margin: 0 0.5rem;
    color: white;
    font-weight: 600;
  }

  .step {
    background: white;
    color: #2563eb;
    border-radius: 50%;
    width: 1.8rem;
    height: 1.8rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    font-size: 0.9rem;
    font-weight: 700;
  }

  .arrow {
    color: rgba(255, 255, 255, 0.7);
    margin: 0 0.8rem;
  }
`;