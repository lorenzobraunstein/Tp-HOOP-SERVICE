const path = require("node:path");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.join(__dirname, "../Public/img"));
  },
  filename: (req, file, callback) => {
    const esImagen = file.mimetype.includes("image");

    if (!esImagen) {
      callback(new Error("El archivo subido no es una imagen"));
      return;
    }

    const extension = file.mimetype.split("/")[1]; //     [image, png] "image/jpg"

    const nombreFinal = `${Date.now()}-producto.${extension}`;

    callback(null, nombreFinal);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
}); // Defino que guardo las imagenes en /img

const validarImagen = (req, res, next) => {
  if (req.file) {
    req.body.imagen = `http://localhost:3000/imagenes/${req.file.filename}`;
  }
  next();
};

module.exports = { upload, validarImagen };
