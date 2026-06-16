// index.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ====== CONEXIÓN A MONGODB ATLAS ======
// Opción A: conexión SRV (más simple)
// mongoose.connect("mongodb+srv://rojas:ulises@cluster0.bjltpxf.mongodb.net/encuesta?retryWrites=true&w=majority")

// Opción B: conexión directa con nodos (si SRV falla)
mongoose.connect("mongodb://rojas:ulises@ac-1ekf2nz-shard-00-00.bjltpxf.mongodb.net:27017,ac-1ekf2nz-shard-00-01.bjltpxf.mongodb.net:27017,ac-1ekf2nz-shard-00-02.bjltpxf.mongodb.net:27017/encuesta?ssl=true&replicaSet=atlas-g97p6w-shard-0&authSource=admin&retryWrites=true&w=majority")
  .then(() => console.log("✅ Conectado a MongoDB Atlas"))
  .catch(err => console.error("❌ Error de conexión:", err));

// ====== MODELOS SEGÚN EL DIAGRAMA ER ======
const Formulario = mongoose.model("Formulario", new mongoose.Schema({
  formulario_id: String,
  nombre: String,
  tema_principal: String,
  audiencia: String,
  disponible: Boolean
}, { collection: "formularios" }));

const Item = mongoose.model("Item", new mongoose.Schema({
  item_id: String,
  pregunta_texto: String,
  formato: String,
  requerido: Boolean,
  formulario_id: String
}, { collection: "items" }));

const Alternativa = mongoose.model("Alternativa", new mongoose.Schema({
  alternativa_id: String,
  descripcion: String,
  item_id: String
}, { collection: "alternativas" }));

const Participacion = mongoose.model("Participacion", new mongoose.Schema({
  participacion_id: String,
  usuario: String,
  fecha_envio: Date,
  formulario_id: String
}, { collection: "participaciones" }));

const Seleccion = mongoose.model("Seleccion", new mongoose.Schema({
  seleccion_id: String,
  respuesta_marcada: String,
  item_id: String,
  participacion_id: String
}, { collection: "selecciones" }));

// ====== ENDPOINTS ======

// Guardar participación y selecciones
app.post("/api/save", async (req, res) => {
  try {
    const { participation_id, user, submit_date, form_id, answers } = req.body;

    const nuevaParticipacion = new Participacion({
      participacion_id: participation_id,
      usuario: user,
      fecha_envio: submit_date,
      formulario_id: form_id
    });
    await nuevaParticipacion.save();

    for (const ans of answers) {
      const nuevaSeleccion = new Seleccion({
        seleccion_id: "S" + Math.floor(Math.random() * 1000000),
        respuesta_marcada: ans.alternative_id,
        item_id: ans.item_id,
        participacion_id: participation_id
      });
      await nuevaSeleccion.save();
    }

    res.json({ message: "✅ Participación y respuestas guardadas correctamente" });
  } catch (error) {
    console.error("❌ Error al guardar:", error);
    res.status(500).json({ error: "Error al guardar en la base de datos" });
  }
});

// Consultar participaciones
app.get("/api/participaciones", async (req, res) => {
  try {
    const participaciones = await Participacion.find();
    res.json(participaciones);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener participaciones" });
  }
});

// Consultar selecciones
app.get("/api/selecciones", async (req, res) => {
  try {
    const selecciones = await Seleccion.find();
    res.json(selecciones);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener selecciones" });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
