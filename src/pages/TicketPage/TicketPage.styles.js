import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const StyledTerminal = styled.div`
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
`;

export const TicketCard = styled.div`
  width: 70%;
  min-width: 260px;
  min-height: 220px;
  max-width: 800px;
  background: #f8fafc;
  border-radius: clamp(18px, 3vw, 32px);
  box-shadow: 0 4px 32px 0 rgba(37, 99, 235, 0.10), 0 1.5px 4px 0 rgba(0,0,0,0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 2.5rem);
  gap: clamp(1.2rem, 3vw, 2.2rem);
  overflow: hidden;
`;

export const TicketNumber = styled.div`
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  font-weight: 800;
  color: #2563eb;
  letter-spacing: 0.12em;
  margin-bottom: clamp(1.2rem, 2vw, 2rem);
  text-align: center;
`;

export const TicketInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-start;
  width: 100%;
  gap: 1.2rem;
  overflow: hidden;
`;

export const TicketLabel = styled.div`
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  font-weight: 500;
  color: #64748b;
  min-width: 90px;
`;

export const TicketValue = styled.div`
  font-size: clamp(1.2rem, 3vw, 1.7rem);
  font-weight: 600;
  color: #1e293b;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`;

export const TicketNotice = styled.div`
  margin-top: 0;
  padding: 15px;
  background-color: white;
  border-radius: 5px;
  font-size: 14px;
`;

export const Countdown = styled.div`
  text-align: center;
  color: #666;
  margin-top: auto;
`; 