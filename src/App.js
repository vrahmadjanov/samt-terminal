import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';


// Mock данные
const specialties = [
  { id: 1, name: 'Терапевт' },
  { id: 2, name: 'Хирург' },
  { id: 3, name: 'Офтальмолог' },
  { id: 4, name: 'Невролог' },
  { id: 5, name: 'Кардиолог' },
];

const doctors = {
  1: [
    { id: 101, name: 'Иванова Мария Петровна', room: '201' },
    { id: 102, name: 'Смирнов Алексей Иванович', room: '202' },
  ],
  2: [
    { id: 201, name: 'Петров Дмитрий Сергеевич', room: '301' },
    { id: 202, name: 'Сидорова Елена Викторовна', room: '302' },
  ],
  3: [
    { id: 301, name: 'Кузнецова Анна Михайловна', room: '401' },
  ],
  4: [
    { id: 401, name: 'Васильев Игорь Николаевич', room: '501' },
  ],
  5: [
    { id: 501, name: 'Николаева Татьяна Владимировна', room: '601' },
  ],
};

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', 
  '11:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30'
];

// ==================== Компоненты UI ====================
const TerminalContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  width: 768px;
  height: 1024px;
  overflow: hidden;
  position: relative;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    border-radius: 0;
  }
`;

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const WelcomeScreen = styled(Screen)`
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const AppLogo = styled.img`
  height: 150px;
  pointer-events: none;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 10px;
`;

const Text = styled.p`
  text-align: center;
  color: #666;
`;

const PhoneInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0;
`;

const CountryCode = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: #f0f0f0;
  border-radius: 5px 0 0 5px;
  font-size: 18px;
`;

const Flag = styled.span`
  margin-right: 10px;
  font-size: 24px;
`;

const PhoneInput = styled.input`
  flex: 1;
  padding: 15px;
  font-size: 18px;
  border: 1px solid #ddd;
  border-radius: 0 5px 5px 0;
  outline: none;
`;

const Button = styled.button`
  padding: 15px;
  background-color: ${props => props.disabled ? '#ccc' : '#61dafb'};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  margin-top: auto;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.disabled ? '#ccc' : '#21a1f1'};
  }
`;

const OptionsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  margin-top: 30px;
`;

const OptionCard = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid #eee;

  &:hover {
    background-color: #e3f2fd;
    transform: translateY(-2px);
  }
`;

const DoctorName = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const DoctorRoom = styled.div`
  color: #666;
`;

const TimeSlotsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-top: 30px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TimeSlot = styled(OptionCard)`
  text-align: center;
`;

const TicketCard = styled.div`
  background-color: #e3f2fd;
  border-radius: 10px;
  padding: 30px;
  margin: 30px 0;
`;

const TicketNumber = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #1976d2;
  margin-bottom: 20px;
`;

const TicketInfo = styled.div`
  p {
    margin: 10px 0;
  }
`;

const TicketNotice = styled.div`
  margin-top: 30px;
  padding: 15px;
  background-color: white;
  border-radius: 5px;
  font-size: 14px;
`;

const Countdown = styled.div`
  text-align: center;
  color: #666;
  margin-top: auto;
`;

// ==================== Основной компонент ====================
const AppointmentTerminal = () => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [ticketNumber, setTicketNumber] = useState(null);

  useEffect(() => {
    if (step === 7) {
      const timer = setTimeout(() => {
        resetApp();
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const resetApp = () => {
    setStep(1);
    setPhone('');
    setSelectedSpecialty(null);
    setSelectedDoctor(null);
    setSelectedTime(null);
    setTicketNumber(null);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 9);
    setPhone(value);
  };

  const handleSpecialtySelect = (id) => {
    setSelectedSpecialty(id);
    setStep(4);
  };

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
    setStep(5);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setTicketNumber(Math.floor(100000 + Math.random() * 900000));
    setStep(7);
  };

  const handleNextStep = () => {
    if (step === 1) setStep(2);
    else if (step === 2 && phone.length === 9) setStep(3);
    else if (step === 5) setStep(6);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <WelcomeScreen onClick={handleNextStep}>
            <AppLogo src={logo} alt="logo" />
            <Title>Добро пожаловать в центр здоровья XX города XX</Title>
            <Text>Нажмите на экран для продолжения</Text>
          </WelcomeScreen>
        );
      case 2:
        return (
          <Screen>
            <Subtitle>Введите номер телефона</Subtitle>
            <Text>Мы отправим SMS с подтверждением записи</Text>
            <PhoneInputContainer>
              <CountryCode>
                <Flag>🇹🇯</Flag>
                <span>+992</span>
              </CountryCode>
              <PhoneInput
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                maxLength={9}
                pattern="[0-9]*"
                inputMode="numeric"
                autoFocus
              />
            </PhoneInputContainer>
            <Button 
              onClick={handleNextStep} 
              disabled={phone.length !== 9}
            >
              Продолжить
            </Button>
          </Screen>
        );
      case 3:
        return (
          <Screen>
            <Subtitle>Выберите специальность врача</Subtitle>
            <OptionsList>
              {specialties.map(spec => (
                <OptionCard 
                  key={spec.id} 
                  onClick={() => handleSpecialtySelect(spec.id)}
                >
                  {spec.name}
                </OptionCard>
              ))}
            </OptionsList>
          </Screen>
        );
      case 4:
        return (
          <Screen>
            <Subtitle>Выберите врача</Subtitle>
            <OptionsList>
              {selectedSpecialty && doctors[selectedSpecialty]?.map(doctor => (
                <OptionCard 
                  key={doctor.id} 
                  onClick={() => handleDoctorSelect(doctor)}
                >
                  <DoctorName>{doctor.name}</DoctorName>
                  <DoctorRoom>Кабинет: {doctor.room}</DoctorRoom>
                </OptionCard>
              ))}
            </OptionsList>
          </Screen>
        );
      case 5:
        return (
          <Screen>
            <Subtitle>Выберите тип записи</Subtitle>
            <OptionsList>
              <OptionCard onClick={() => setStep(6)}>
                Доступная очередь
              </OptionCard>
              <OptionCard onClick={handleNextStep}>
                Оформить предварительную запись
              </OptionCard>
            </OptionsList>
          </Screen>
        );
      case 6:
        return (
          <Screen>
            <Subtitle>Доступные время записи</Subtitle>
            <Text>Выберите удобное для вас время</Text>
            <TimeSlotsGrid>
              {timeSlots.map((time, index) => (
                <TimeSlot 
                  key={index} 
                  onClick={() => handleTimeSelect(time)}
                >
                  {time}
                </TimeSlot>
              ))}
            </TimeSlotsGrid>
          </Screen>
        );
      case 7:
        return (
          <Screen>
            <Subtitle>Ваш талон на прием</Subtitle>
            <TicketCard>
              <TicketNumber>Номер талона: {ticketNumber}</TicketNumber>
              <TicketInfo>
                <p>Врач: {selectedDoctor?.name}</p>
                <p>Кабинет: {selectedDoctor?.room}</p>
                <p>Время: {selectedTime}</p>
                <p>Дата: {new Date().toLocaleDateString()}</p>
              </TicketInfo>
              <TicketNotice>
                Пожалуйста, сфотографируйте этот талон или запишите номер.
                На ваш номер телефона будет отправлено SMS с подтверждением.
              </TicketNotice>
            </TicketCard>
            <Countdown>
              Экран автоматически обновится через 10 секунд...
            </Countdown>
          </Screen>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <TerminalContainer>
        {renderStep()}
      </TerminalContainer>
    </div>
  );
};

export default AppointmentTerminal;