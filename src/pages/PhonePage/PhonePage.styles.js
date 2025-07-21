import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const StyledTerminal = styled.div`
  --primary-color: #2563eb; /* Оптимальный синий по исследованиям */
  --secondary-color: #3b82f6;
  --bg-color: #f8fafc;
  --text-color: #1e293b;
  --border-color: #e2e8f0;
  --disabled-color: #94a3b8;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  min-height: 0;
  box-sizing: border-box;
  background: white;
  animation: ${fadeIn} 0.3s ease-out;
  font-family: 'Inter', -apple-system, sans-serif;
  gap: 2rem;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  color: var(--text-color);
  font-size: clamp(1.6rem, 4vw, 2rem);
  font-weight: 600;
  margin-bottom: 0.4rem;
`;

export const Subtitle = styled.p`
  color: var(--disabled-color);
  font-size: clamp(1.1rem, 3.5vw, 1.6rem);
  margin: 0;
`;

export const PhoneDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  gap: 1.5rem;
  width: 50%;
`;

export const PhoneInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  flex-wrap: nowrap;
`;

export const DigitsGrid = styled.div`
  display: flex;
  gap: clamp(0.2rem, 0.8vw, 0.5rem);
  align-items: center;
  justify-content: center;
`;

export const Digit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(1rem, 2.5vw, 2.1rem);
  font-weight: 600;
  color: ${props => props.$disabled ? 'var(--disabled-color)' : 'var(--text-color)'};
  background: white;
  border: 2px solid ${props => props.$disabled ? 'var(--border-color)' : 'var(--border-color)'};
  border-radius: clamp(6px, 1vw, 16px);
  min-width: 3.2rem;
  max-width: 3.2rem;
  min-height: 3.2rem;
  max-height: 3.2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease;
  
  ${props => props.$active && !props.$disabled && `
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  `}
`;

export const ProgressDots = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  gap: 0.8rem;
  margin: 0;
`;

export const Dot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: ${props => props.$filled ? 'var(--primary-color)' : 'var(--border-color)'};
  transition: all 0.3s ease;
`;

export const Keyboard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(0.3rem, 1.5vw, 0.5rem);
  width: 30%;
  aspect-ratio: 1;
`;

export const Key = styled.button`
  aspect-ratio: 0;
  border: 2px solid #b6c3d1;
  border-radius: clamp(6px, 1vw, 0.8rem);
  font-size: clamp(1rem, 2.5vw, 2rem);
  font-weight: 500;
  cursor: pointer;
  background: #f3f6fa;
  color: var(--text-color);
  box-shadow: 0 4px 16px 0 rgba(37, 99, 235, 0.10), 0 1.5px 4px 0 rgba(0,0,0,0.07);
  transition: all 0.18s cubic-bezier(.4,0,.2,1);
  display: grid;
  place-items: center;
  
  &:active {
    transform: scale(0.95);
    background: #e0e7ef;
    box-shadow: 0 2px 8px 0 rgba(37, 99, 235, 0.18);
    border-color: var(--primary-color);
  }
  
  ${props => props.$isAction && `
    font-size: clamp(0.9rem, 2vw, 1.8rem);
    color: #64748b;
    background: #e9eef5;
    border-color: #cbd5e1;
  `}
`;

export const SubmitButton = styled.button`
  padding: clamp(0.5rem, 1.5vw, 1rem) clamp(0.8rem, 2vw, 1.5rem);
  margin-top: 0;
  border: none;
  border-radius: clamp(8px, 2vw, 12px);
  font-size: clamp(1.2rem, 3.5vw, 1.7rem);
  font-weight: 600;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  background: ${props => props.disabled ? 'var(--border-color)' : 'var(--primary-color)'};
  color: ${props => props.disabled ? 'var(--disabled-color)' : 'white'};
  transition: all 0.3s ease;
  width: 30%;
  height: clamp(2.5rem, 6.5vw, 4rem);
  
  &:active {
    transform: ${props => props.disabled ? 'none' : 'scale(0.98)'};
    background: ${props => props.disabled ? 'var(--border-color)' : 'var(--secondary-color)'};
  }
`; 