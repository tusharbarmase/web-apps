const notesSchema = require("../models/notesModel");

// get all notes

const getNotes = async (req, res) => {
  const notes = await notesSchema.find({}).sort({ createdAt: -1 });
  res.status(200).json(notes);
};

// get a single note

const getNote = async (req, res) => {
  const { id } = req.params;

  try {
    const note = await notesSchema.findById(id);
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// create new note

const createNote = async (req, res) => {
  const { title, message } = req.body;
  try {
    const note = await notesSchema.create({ title, message });
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a note

const deleteNote = async (req, res) => {
  const { id } = req.params;

  try {
    const note = await notesSchema.findOneAndDelete({ _id: id });
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a note

const updateNote = async (req, res) => {
  const { id } = req.params;

  try {
    const note = await notesSchema.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    );
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createNote,
  getNote,
  getNotes,
  deleteNote,
  updateNote,
};
