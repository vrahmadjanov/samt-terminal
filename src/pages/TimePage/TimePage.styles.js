import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const StyledTerminal = styled.div`
  --primary-color: #2563eb;
  --secondary-color: #3b82f6;
  --bg-color: #f8fafc;
  --text-color: #1e293b;
  --border-color: #e2e8f0;
  --disabled-color: #94a3b8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  min-height: 0;
  box-sizing: border-box;
  background: white;
  animation: ${fadeIn} 0.3s ease-out;
  font-family: 'Inter', -apple-system, sans-serif;
  gap: 2rem;
  padding: 2rem 1rem;
  overflow-y: auto;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  color: var(--text-color);
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  font-weight: 600;
  margin-bottom: 0.8rem;
`;

export const Subtitle = styled.p`
  color: var(--disabled-color);
  font-size: clamp(1.1rem, 3.5vw, 1.6rem);
  margin: 0;
`;

export const SlotsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(clamp(120px, 18vw, 200px), 1fr));
  gap: clamp(1rem, 2vw, 1.5rem);
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

export const SlotCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.$disabled ? '#f3f6fa' : 'white'};
  border: 2px solid ${props => props.$disabled ? '#e2e8f0' : 'var(--primary-color)'};
  border-radius: clamp(12px, 3vw, 16px);
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.18s cubic-bezier(.4,0,.2,1);
  box-shadow: ${props => props.$disabled ? 'none' : '0 2px 8px rgba(37,99,235,0.08)'};
  min-height: clamp(60px, 7vw, 90px);
  user-select: none;
  opacity: ${props => props.$disabled ? 0.5 : 1};
  pointer-events: ${props => props.$disabled ? 'none' : 'auto'};
  
  &:active {
    transform: ${props => props.$disabled ? 'none' : 'scale(0.97)'};
    box-shadow: ${props => props.$disabled ? 'none' : '0 1px 4px rgba(37,99,235,0.13)'};
    border-color: ${props => props.$disabled ? '#e2e8f0' : 'var(--secondary-color)'};
  }
`;

export const SlotTime = styled.div`
  font-size: clamp(1.2rem, 2.5vw, 1.7rem);
  font-weight: 600;
  color: ${props => props.$disabled ? 'var(--disabled-color)' : 'var(--primary-color)'};
  text-align: center;
  letter-spacing: 0.5px;
`; 