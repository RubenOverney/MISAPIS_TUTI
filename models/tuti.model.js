import mongoose from "mongoose";

const tutiSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: [true, "El título de la producción es obligatorio"]
  },
  genero: {
    type: String,
    required: [true, "El género es obligatorio"]
  },
  año: {
    type: Number,
    required: [true, "El año de lanzamiento es obligatorio"]
  },
  duracion: {
    type: String,
    required: false
  },
  clasificacion: {
    type: String,
    required: false
  },
  descripcion: {
    type: String,
    required: false
  },
  idioma: {
    type: String,
    default: "Español"
  },
  fecha_registro: {
    type: Date,
    default: Date.now
  }
});

const tuti = mongoose.model("Tuti", tutiSchema);

export default tuti;
