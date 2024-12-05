import supabase from '../helpers/configSupabase.js';

const fileUploadMiddleware = async (req, res, next) => {
  const file = req.file; // O arquivo enviado (via multer, por exemplo)
  
  if (!file) {
    return res.status(400).send('Nenhum arquivo enviado');
  }

  try {
    // Upload para o Supabase
    const { data, error } = await supabase.storage
      .from('images') // Nome do bucket no Supabase
      .upload(`uploads/${file.originalname}`, file.buffer, {
        contentType: file.mimetype,
        upsert: true, // Substitui arquivos com o mesmo nome
      });

    if (error) throw error;

    // Gera URL pública (caso o bucket seja público)
    const { publicUrl } = supabase.storage
      .from('images')
      .getPublicUrl(`uploads/${file.originalname}`);

    req.fileUrl = publicUrl; // Salva a URL para usar depois
    next(); // Passa o controle para o próximo middleware ou rota
  } catch (err) {
    console.error('Erro no upload:', err.message);
    res.status(500).send('Erro no upload');
  }
};

export default fileUploadMiddleware;
