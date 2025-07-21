import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
  font-size: clamp(1.4rem, 3.5vw, 2rem); // уменьшенный размер
  font-weight: 600;
`;

export const Subtitle = styled.p`
  color: var(--disabled-color);
  font-size: clamp(1.1rem, 3.5vw, 1.6rem);
  margin: 0;
`;

export const SpecialtiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 2 колонки
  gap: clamp(0.8rem, 2vw, 1.5rem);
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  align-items: stretch; // чтобы карточки были одинаковой высоты
`;

export const SpecialtyCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: clamp(1rem, 3vw, 1.5rem);
  background: ${props => props.$disabled ? '#f5f5f5' : 'white'};
  border: 2px solid ${props => props.$disabled ? '#ddd' : 'var(--border-color)'};
  border-radius: clamp(12px, 3vw, 16px);
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  box-shadow: ${props => props.$disabled ? 'none' : '0 2px 8px rgba(0, 0, 0, 0.06)'};
  height: clamp(140px, 18vw, 180px); // одинаковая высота
  width: 100%; // ширина по колонке
  min-width: 0;
  max-width: 100%;
  opacity: ${props => props.$disabled ? 0.6 : 1};
  text-align: center;
  word-break: break-word;
  
  &:hover {
    transform: ${props => props.$disabled ? 'none' : 'translateY(-2px)'};
    box-shadow: ${props => props.$disabled ? 'none' : '0 4px 16px rgba(0, 0, 0, 0.1)'};
    border-color: ${props => props.$disabled ? '#ddd' : 'var(--secondary-color)'};
  }
  
  &:active {
    transform: ${props => props.$disabled ? 'none' : 'translateY(0)'};
    box-shadow: ${props => props.$disabled ? 'none' : '0 2px 8px rgba(0, 0, 0, 0.08)'};
  }
`;

export const SpecialtyIcon = styled.img`
  width: clamp(2.5rem, 6vw, 3.5rem);
  height: clamp(2.5rem, 6vw, 3.5rem);
  margin-bottom: clamp(0.5rem, 1.5vw, 1rem);
  transition: all 0.2s ease;
  filter: ${props => props.$disabled ? 'grayscale(100%)' : 'none'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
`;

export const SpecialtyName = styled.span`
  font-size: clamp(1.2rem, 3vw, 1.7rem);
  font-weight: 600;
  text-align: center;
  color: ${props => props.$disabled ? 'var(--disabled-color)' : 'var(--text-color)'};
  line-height: 1.3;
  transition: all 0.2s ease;
  word-break: break-word;
  white-space: normal;
  max-width: 100%;
  padding: 0 0.5em;
`;

export const SubmitButton = styled.button`
  padding: clamp(0.8rem, 2vw, 1.2rem) clamp(2rem, 4vw, 3rem);
  border: none;
  border-radius: clamp(8px, 2vw, 12px);
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  font-weight: 600;
  cursor: pointer;
  background: var(--primary-color);
  color: white;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:active {
    transform: scale(0.98);
    background: var(--secondary-color);
  }
`; 