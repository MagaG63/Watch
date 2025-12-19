const multer = require('multer');
const path = require('path');
const app = require('../app');

 function verifyMuiter() {
  const upload = multer({
  dest: path.join(__dirname, 'uploads') // папка для файлов
});

// Роут с загрузкой файлов
app.post('/api/orders', upload.array('files', 10), (req, res) => {
  console.log('Текстовые поля:', req.body);   // name, email, phone, message
  console.log('Файлы:', req.files);           // массив файлов

  return res.json({
    success: true,
    message: 'Заявка с файлами принята',
  });
});
}

module.exports = verifyMuiter