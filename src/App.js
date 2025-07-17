import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.svg';

// Mock data
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

function App() {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [ticketNumber, setTicketNumber] = useState(null);

  useEffect(() => {
    if (step === 8) {
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
    // Generate random ticket number
    setTicketNumber(Math.floor(100000 + Math.random() * 900000));
    setStep(7);
  };

  const handleNextStep = () => {
    if (step === 1) setStep(2);
    else if (step === 2 && phone.length === 9) setStep(3);
    else if (step === 4) setStep(5);
    else if (step === 5) setStep(6);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="welcome-screen" onClick={handleNextStep}>
            <img src={logo} className="app-logo" alt="logo" />
            <h1>Добро пожаловать в центр здоровья XX города XX</h1>
            <p>Нажмите на экран для продолжения</p>
          </div>
        );
      case 2:
        return (
          <div className="phone-screen">
            <h2>Введите номер телефона</h2>
            <p>Мы отправим SMS с подтверждением записи</p>
            <div className="phone-input">
              <div className="country-code">
                <span className="flag">🇹🇯</span>
                <span>+992</span>
              </div>
              <input
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                maxLength="9"
                pattern="[0-9]*"
                inputMode="numeric"
                autoFocus
              />
            </div>
            <button 
              onClick={handleNextStep} 
              disabled={phone.length !== 9}
              className={phone.length === 9 ? 'active' : ''}
            >
              Продолжить
            </button>
          </div>
        );
      case 3:
        return (
          <div className="specialty-screen">
            <h2>Выберите специальность врача</h2>
            <div className="options-list">
              {specialties.map(spec => (
                <div 
                  key={spec.id} 
                  className="option-card"
                  onClick={() => handleSpecialtySelect(spec.id)}
                >
                  {spec.name}
                </div>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="doctors-screen">
            <h2>Выберите врача</h2>
            <div className="options-list">
              {doctors[selectedSpecialty]?.map(doctor => (
                <div 
                  key={doctor.id} 
                  className="option-card"
                  onClick={() => handleDoctorSelect(doctor)}
                >
                  <div className="doctor-name">{doctor.name}</div>
                  <div className="doctor-room">Кабинет: {doctor.room}</div>
                </div>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="appointment-type-screen">
            <h2>Выберите тип записи</h2>
            <div className="options-list">
              <div 
                className="option-card"
                onClick={() => setStep(6)}
              >
                Доступная очередь
              </div>
              <div 
                className="option-card"
                onClick={handleNextStep}
              >
                Оформить предварительную запись
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="time-slots-screen">
            <h2>Доступные время записи</h2>
            <p>Выберите удобное для вас время</p>
            <div className="time-slots-grid">
              {timeSlots.map((time, index) => (
                <div 
                  key={index} 
                  className="time-slot"
                  onClick={() => handleTimeSelect(time)}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        );
      case 7:
        return (
          <div className="ticket-screen">
            <h2>Ваш талон на прием</h2>
            <div className="ticket-card">
              <div className="ticket-number">Номер талона: {ticketNumber}</div>
              <div className="ticket-info">
                <p>Врач: {selectedDoctor.name}</p>
                <p>Кабинет: {selectedDoctor.room}</p>
                <p>Время: {selectedTime}</p>
                <p>Дата: {new Date().toLocaleDateString()}</p>
              </div>
              <div className="ticket-notice">
                Пожалуйста, сфотографируйте этот талон или запишите номер.
                На ваш номер телефона будет отправлено SMS с подтверждением.
              </div>
            </div>
            <div className="countdown">
              Экран автоматически обновится через 10 секунд...
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <div className="terminal-container">
        {renderStep()}
      </div>
    </div>
  );
}

export default App;