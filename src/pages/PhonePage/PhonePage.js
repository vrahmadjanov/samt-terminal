import React, { useState, useEffect } from 'react';
import {
  StyledTerminal,
  Header,
  Title,
  PhoneDisplay,
  PhoneInput,
  DigitsGrid,
  Digit,
  Keyboard,
  Key,
  SubmitButton,
} from './PhonePage.styles';

const PhonePage = ({ phone, onPhoneChange, onNext, language, translations }) => {
  const [digits, setDigits] = useState(Array(9).fill(''));
  const [activeIndex, setActiveIndex] = useState(0);

  // Только 9 ячеек для цифр
  const allCells = [...digits];

  useEffect(() => {
    if (phone) {
      const phoneDigits = phone.split('').slice(0, 9);
      const newDigits = [...Array(9).fill('')];
      phoneDigits.forEach((digit, index) => {
        if (index < 9) newDigits[index] = digit;
      });
      setDigits(newDigits);
      setActiveIndex(Math.min(phoneDigits.length, 8));
    }
  }, [phone]);

  const handleDigitInput = (digit) => {
    if (activeIndex >= 9) return;
    
    const newDigits = [...digits];
    newDigits[activeIndex] = digit;
    setDigits(newDigits);
    onPhoneChange({ target: { value: newDigits.join('') } });
    
    if (activeIndex < 8) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handleBackspace = () => {
    if (activeIndex > 0) {
      const newDigits = [...digits];
      newDigits[activeIndex - 1] = '';
      setDigits(newDigits);
      setActiveIndex(activeIndex - 1);
      onPhoneChange({ target: { value: newDigits.join('') } });
    }
  };

  const handleClear = () => {
    setDigits(Array(9).fill(''));
    setActiveIndex(0);
    onPhoneChange({ target: { value: '' } });
  };

  const filledCount = digits.filter(d => d !== '').length;

  const keyMap = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['C', '0', '⌫']
  ];

  return (
    <StyledTerminal>
      <Header>
        <Title>{translations[language].phoneTitle}</Title>
      </Header>
      
      <PhoneDisplay>
        <PhoneInput>
          <DigitsGrid>
            {allCells.map((cell, index) => (
              <Digit 
                key={index} 
                $active={index === activeIndex}
                $disabled={false}
              >
                {cell}
              </Digit>
            ))}
          </DigitsGrid>
        </PhoneInput>
      </PhoneDisplay>
      

      
      {/* Контейнер для клавиатуры и кнопки с уменьшенным gap */}
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.7rem', width: '100%'}}>
        <Keyboard>
          {keyMap.map((row, rowIndex) => (
            row.map((key, colIndex) => (
              <Key
                key={`${rowIndex}-${colIndex}`}
                onClick={() => {
                  if (key === '⌫') handleBackspace();
                  else if (key === 'C') handleClear();
                  else if (/[0-9]/.test(key)) handleDigitInput(key);
                }}
                $isAction={key === '⌫' || key === 'C'}
              >
                {key}
              </Key>
            ))
          ))}
        </Keyboard>
        <SubmitButton 
          onClick={onNext} 
          disabled={filledCount !== 9}
        >
          {translations[language].phoneButton}
        </SubmitButton>
      </div>
    </StyledTerminal>
  );
};

export default PhonePage;