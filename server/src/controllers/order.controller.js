class OrderController {
  static async createOrder(req, res) {
    try {
      console.log('📝 Текст:', req.body);        
      console.log('📁 Файлы:', req.files);      

      const filePaths = req.files?.map(file => file.path) || [];
      
      res.json({ 
        success: true, 
        message: 'Заявка с файлами OK!',
        files: filePaths 
      });
    } catch (error) {
      console.error('💥', error);
      res.status(500).json({ error: 'Ошибка сервера' });
    }
  }
}


  

module.exports = OrderController;
