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

export const RecordTypeGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(1rem, 3vw, 2rem);
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
`;

export const RecordTypeCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 70%;
  max-width: 70%;
  height: 40%;
  min-height: 180px;
  background: white;
  border: 2px solid var(--border-color);
  border-radius: clamp(14px, 3vw, 20px);
  cursor: pointer;
  transition: all 0.18s cubic-bezier(.4,0,.2,1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  user-select: none;
  padding: 0 clamp(2rem, 4vw, 3rem);
  
  &:active {
    transform: scale(0.97);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
    border-color: var(--primary-color);
  }
`;

export const RecordTypeIcon = styled.img`
  width: clamp(3.5rem, 8vw, 6rem);
  height: clamp(3.5rem, 8vw, 6rem);
  margin-right: clamp(2rem, 4vw, 3rem);
  user-drag: none;
  pointer-events: none;
`;

export const RecordTypeName = styled.div`
  font-size: clamp(1.3rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 0.7rem;
`;

export const RecordTypeDesc = styled.div`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: var(--disabled-color);
  font-weight: 500;
  line-height: 1.4;
`; 