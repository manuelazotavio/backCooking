const uploadImagem = (req, res) => {
    if (req.file) {
      console.log("Arquivo recebido:", req.file);
      return res.json({
        erro: false,
        mensagem: "Upload realizado com sucesso!",
        file: req.file, // Informação do arquivo retornada
      });
    }
  
    res.status(400).json({
      erro: true,
      mensagem: "Erro: Upload não realizado com sucesso.",
    });
  };
  
  export default uploadImagem;
  