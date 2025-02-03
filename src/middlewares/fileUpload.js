import supabase from "../helpers/configSupabase.js";
import { v4 as uuidv4 } from "uuid";

const fileUploadMiddleware = async (req, res, next) => {
  const file = req.file;

  if (!file) {
    return next();
  }

  try {
    const sanitizedFilename = file.originalname
      .replace(/[^a-zA-Z0-9.]/g, "_")
      .toLowerCase();

    const uniqueFilename = `${uuidv4()}_${sanitizedFilename}`;

    const { data, error } = await supabase.storage
      .from("images")
      .upload(`uploads/${uniqueFilename}`, file.buffer, {
        contentType: file.mimetype,
        upsert: true,
      });

    if (error) throw error;

    const { data: publicUrlData } = supabase.storage
      .from("images")
      .getPublicUrl(`uploads/${uniqueFilename}`);
      
    req.fileUrl = publicUrlData.publicUrl;
    next();
  } catch (err) {
    console.error("Erro no upload:", err.message);
    res.status(500).send("Erro no upload");
  }
};

export default fileUploadMiddleware;
