import React from 'react';
import {
  StyledTerminal,
  TicketCard,
  TicketNumber,
  TicketInfo,
  TicketLabel,
  TicketValue
} from './TicketPage.styles';
import logo from '../../logo.png';

const TicketPage = ({ ticketNumber, doctor, time, date, language, translations }) => {
  return (
    <StyledTerminal>
      <TicketCard>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', marginBottom: 'clamp(1.2rem, 2vw, 2rem)' }}>
          <img src={logo} alt="Логотип" style={{ width: '20%', height: 'auto', minWidth: 32, maxWidth: 200, marginRight: '1.2rem', objectFit: 'contain' }} />
          <TicketNumber style={{ marginBottom: 0 }}>{ticketNumber || '—'}</TicketNumber>
        </div>
        <TicketInfo>
          <TicketLabel>{translations[language].ticketDoctor}:</TicketLabel>
          <TicketValue>{doctor?.name || '—'}</TicketValue>
        </TicketInfo>
        <TicketInfo>
          <TicketLabel>{translations[language].ticketRoom}:</TicketLabel>
          <TicketValue>{doctor?.room || '—'}</TicketValue>
        </TicketInfo>
        <TicketInfo>
          <TicketLabel>{translations[language].ticketTime}:</TicketLabel>
          <TicketValue>{time || '—'}</TicketValue>
        </TicketInfo>
        <TicketInfo>
          <TicketLabel>{translations[language].ticketDate}:</TicketLabel>
          <TicketValue>{date || '—'}</TicketValue>
        </TicketInfo>
      </TicketCard>
    </StyledTerminal>
  );
};

export default TicketPage; 