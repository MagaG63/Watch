import React, { useState } from 'react';
import axios from 'axios';

export default function ClientPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('message', formData.message);
    files.forEach(file => data.append('files', file));

    try {
      await axios.post('http://localhost:3000/api/orders', data);
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setFiles([]);
    } catch (error) {
      console.error('Ошибка:', error);
    } finally {
      setIsLoading(false);
    }
  };
if (success) {
    return (
      <section className="contactSection">
        <div className="contactInner">
          <div className="successMessage">
            <h1 className="contactTitle successTitle">Заявка отправлена!</h1>
            <p className="contactSubtitle">
              Мы свяжемся с вами в ближайшее время
            </p>
            <button 
              onClick={() => setSuccess(false)}
              className="submitButton"
            >
              Новая заявка
            </button>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="contactSection">
  <div className="contactInner">
    <h1 className="contactTitle">Начните своё путешествие</h1>
    <p className="contactSubtitle">
      Свяжитесь с нами, чтобы обсудить создание уникальных часов
    </p>

    <form onSubmit={submitHandler} className="contactFormCard">
      <div className="contactRow">
        <div>
          <label className="fieldLabel">
            Имя <span className="fieldRequired">*</span>
          </label>
          <input
            name="name"
            className="fieldInput"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label className="fieldLabel">
            Email <span className="fieldRequired">*</span>
          </label>
          <input
            name="email"
            type="email"
            className="fieldInput"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="contactRow contactRow--full">
        <div>
          <label className="fieldLabel">Телефон</label>
          <input
            name="phone"
            className="fieldInput"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="contactRow contactRow--full">
        <div>
          <label className="fieldLabel">
            Сообщение <span className="fieldRequired">*</span>
          </label>
          <textarea
            name="message"
            className="fieldTextarea"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="filesLabelHint">
        Прикрепить файлы (необязательно)
      </div>
      <div className="fileRow">
        <label className="fileButton">
          Выбрать файлы
          <input
            type="file"
            multiple
            onChange={(e) => setFiles(Array.from(e.target.files || []))}
          />
        </label>
        <span className="fileNameText">
          {files.length ? `Выбрано файлов: ${files.length}` : 'Файл не выбран'}
        </span>
      </div>

      <button
        type="submit"
        className="submitButton"
        disabled={isLoading}
      >
        {isLoading ? 'Отправляем…' : 'Отправить заявку'}
      </button>

      
    </form>
  </div>
</section>

  );
}
