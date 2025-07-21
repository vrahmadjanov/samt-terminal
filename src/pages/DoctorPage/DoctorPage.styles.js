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

export const DoctorsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(0.8rem, 2vw, 1.5rem);
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const DoctorCard = styled.div`
  display: flex;
  align-items: center;
  padding: clamp(1rem, 3vw, 1.5rem);
  background: white;
  border: 2px solid var(--border-color);
  border-radius: clamp(12px, 3vw, 16px);
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  min-height: clamp(80px, 12vw, 120px);
  width: 100%;
  opacity: 1;
  text-align: left;
  gap: clamp(1rem, 2.5vw, 1.5rem);
  
  &:active {
    transform: scale(0.98);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  }
`;

export const DoctorAvatar = styled.div`
  width: clamp(3rem, 8vw, 4.5rem);
  height: clamp(3rem, 8vw, 4.5rem);
  border-radius: 50%;
  background: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  transition: all 0.2s ease;
  flex-shrink: 0;
`;

export const DoctorInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.3rem;
`;

export const DoctorName = styled.div`
  font-size: clamp(1.2rem, 3vw, 1.7rem);
  font-weight: 600;
  color: var(--text-color);
  text-align: left;
  transition: all 0.2s ease;
  word-break: break-word;
  white-space: normal;
`;

export const DoctorSpecialty = styled.div`
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  font-weight: 500;
  color: var(--disabled-color);
  text-align: left;
  transition: all 0.2s ease;
  word-break: break-word;
  white-space: normal;
`;

export const DoctorRoom = styled.div`
  font-size: clamp(0.9rem, 2vw, 1rem);
  color: var(--disabled-color);
  text-align: left;
  transition: all 0.2s ease;
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