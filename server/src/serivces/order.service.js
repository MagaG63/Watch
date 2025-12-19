class OrderService {
  static async submitOrder(formData) {
    const response = await fetch('http://localhost:3000/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error('Ошибка отправки');
    }

    return response.json();
  }
}

module.exports = OrderService   