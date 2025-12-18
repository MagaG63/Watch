import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

function AdminPage() {
  const [thema, setThema] = useState([]);
  const [order, setOrder] = useState([]);

  const deleteHandler = async (id) => {
    await axios.delete(`api/content/content/${id}`);
    setThema(thema.filter((card) => card.id !== id));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const response = await axios.post('/api/content/content', data);
    setThema([...thema, response.data]);
  };

  useEffect(() => {
    fetch('api/content/content')
      .then((res) => res.json())
      .then((data) => setThema(data));
  }, []);

  useEffect(() => {
    fetch('api/order')
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  return (
    <div style={styles.adminContainer}>
      {/* Форма */}
      <div style={styles.formContainer}>
        <h3 style={styles.sectionTitle}>Добавить новый контент</h3>
        <Form onSubmit={submitHandler} style={styles.form}>
          <Form.Group style={styles.formGroup}>
            <Form.Label style={styles.label}>Изображение URL</Form.Label>
            <Form.Control
              type="text"
              name="img"
              placeholder="Введите URL изображения"
              style={styles.input}
            />
          </Form.Group>

          <Form.Group style={styles.formGroup}>
            <Form.Label style={styles.label}>Информация</Form.Label>
            <Form.Control
              type="text"
              name="info"
              placeholder="Введите описание"
              style={styles.input}
            />
          </Form.Group>

          <Button type="submit" style={styles.submitBtn}>
            Создать
          </Button>
        </Form>
      </div>

      {/* Карточки контента */}
      <h3 style={styles.sectionTitle}>Управление контентом</h3>
      <div style={styles.cardsGrid}>
        {thema.map((e) => (
          <div key={e.id} style={styles.card}>
            <img
              style={styles.cardImage}
              src={e.img}
              alt={e.info}
              onError={(e) =>
                (e.target.src = 'https://via.placeholder.com/240x180?text=No+Image')
              }
            />
            <p style={styles.cardInfo}>{e.info}</p>
            <button onClick={() => deleteHandler(e.id)} style={styles.deleteBtn}>
              Удалить
            </button>
            <button onClick={() => console.log(e)} style={styles.updateBtn}>
              Изменить
            </button>
          </div>
        ))}
      </div>

      {/* Заказы */}
      <h3 style={styles.sectionTitle}>Заявки от клиентов</h3>
      <div style={styles.ordersGrid}>
        {order.map((e) => (
          <div key={e.id} style={styles.orderCard}>
            <div style={styles.orderField}>
              <span style={styles.orderLabel}>Имя:</span>
              <h3 style={styles.orderValue}>{e.name}</h3>
            </div>
            <div style={styles.orderField}>
              <span style={styles.orderLabel}>Телефон:</span>
              <h2 style={styles.orderValue}>{e.phone}</h2>
            </div>
            <div style={styles.orderField}>
              <span style={styles.orderLabel}>Email:</span>
              <h3 style={styles.orderValue}>{e.email}</h3>
            </div>
            <div>
              <span style={styles.orderLabel}>Сообщение:</span>
              <p style={styles.orderMessage}>{e.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  adminContainer: {
    padding: '30px',
    maxWidth: '1400px',
    margin: '0 auto',
    backgroundColor: '#737373ff',
    minHeight: '100vh',
  },
  formContainer: {
    backgroundColor: 'white',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    marginBottom: '30px',
    maxWidth: '500px',
    margin: '0 auto 40px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600',
    color: '#333',
    fontSize: '14px',
  },
  input: {
    width: '100%',
    padding: '12px 15px',
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '14px',
    transition: 'border-color 0.3s ease',
  },
  submitBtn: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    border: 'none',
    padding: '12px 25px',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    width: '100%',
  },
  sectionTitle: {
    color: '#333',
    fontSize: '24px',
    margin: '30px 0 20px',
    paddingBottom: '10px',
    borderBottom: '2px solid #667eea',
    display: 'inline-block',
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
    gap: '25px',
    marginTop: '20px',
  },
  card: {
    background: 'white',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    transition: 'all 0.3s ease',
    position: 'relative',
    minHeight: '280px',
  },
  cardImage: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '15px',
  },
  cardInfo: {
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.5',
    marginBottom: '50px',
  },
  deleteBtn: {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    background: '#ff4757',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  updateBtn: {
    background: '#0022ffff',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  ordersGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '30px',
  },
  orderCard: {
    background: 'white',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    borderLeft: '4px solid #4a90e2',
  },
  orderField: {
    marginBottom: '15px',
    paddingBottom: '15px',
    borderBottom: '1px solid #eee',
  },
  orderLabel: {
    fontWeight: '600',
    color: '#667eea',
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    display: 'block',
    marginBottom: '5px',
  },
  orderValue: {
    color: '#333',
    fontSize: '16px',
    margin: 0,
  },
  orderMessage: {
    backgroundColor: '#f8f9fa',
    padding: '15px',
    borderRadius: '6px',
    marginTop: '15px',
    fontSize: '14px',
    color: '#666',
    lineHeight: '1.5',
  },
};

export default AdminPage;
