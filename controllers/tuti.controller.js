import tuti from '../models/tuti.model.js';
import mongoose from 'mongoose';
import express from 'express';


export const getAlltuti = async (req, res) => {
  console.log('🎬 Obtener todas las producciones de tuti');
  try {
    const producciones = await tuti.find({}, { __v: 0 });
    if (producciones.length === 0) {
      return res.status(404).json({
        msg: 'No se encontraron producciones en TUTI'
      });
    }

    return res.status(200).json({
      producciones
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al obtener las producciones de TUTI'
    });
  }
};

export const getTUTIxById = async (req, res) => {
  console.log('📺 Obtener producción por ID');
  const id = req.params.id;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        msg: 'ID no válido'
      });
    }

    const produccion = await TUTI.findById(id);

    if (!produccion) {
      return res.status(404).json({
        msg: 'Producción no encontrada'
      });
    }

    return res.status(200).json({
      produccion
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al obtener la producción'
    });
  }
};

export const postTUTI = async (req, res) => {
  console.log('🎥 Agregar nueva producción a TUTI');

  const body = req.body;
  const nuevaProduccion = new TUTI(body);

  try {
    const validationError = nuevaProduccion.validateSync();
    if (validationError) {
      const errorMessages = Object.values(validationError.errors).map(
        (error) => error.message
      );
      return res.status(400).json({
        errores: errorMessages
      });
    }

    await nuevaProduccion.save();

    return res.status(201).json({
      msg: 'Producción agregada exitosamente',
      produccion: nuevaProduccion
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al guardar la producción'
    });
  }
};

export const putTUTI = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        msg: 'ID no válido'
      });
    }

    const produccion = await TUTI.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true
    });

    if (!produccion) {
      return res.status(404).json({
        msg: 'Producción no encontrada'
      });
    }

    return res.status(200).json({
      msg: 'Producción actualizada correctamente',
      produccion
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al actualizar la producción'
    });
  }
};

export const deleteTUTI = async (req, res) => {
  console.log('🗑️ Eliminar producción de TUTI');
  const id = req.params.id;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        msg: 'ID no válido'
      });
    }

    const produccion = await TUTI.findByIdAndDelete(id);

    if (!produccion) {
      return res.status(404).json({
        msg: 'Producción no encontrada'
      });
    }

    return res.status(200).json({
      msg: 'Producción eliminada correctamente',
      produccion
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al eliminar la producción'
    });
  }
};
