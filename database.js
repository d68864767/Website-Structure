const mongoose = require('mongoose');

// Define schemas for the various sections mentioned in the project description
const SoftwareSchema = new mongoose.Schema({
  name: String,
  category: String, // e.g., "Operating System", "Application Software"
  description: String,
  // ... other relevant fields
});

const ProgrammingLanguageSchema = new mongoose.Schema({
  name: String,
  paradigm: [String], // e.g., "Object-Oriented", "Functional"
  description: String,
  // ... other relevant fields
});

const DevelopmentToolSchema = new mongoose.Schema({
  name: String,
  type: String, // e.g., "IDE", "Code Editor"
  description: String,
  // ... other relevant fields
});

const ComputerScienceConceptSchema = new mongoose.Schema({
  name: String,
  category: String, // e.g., "Algorithms", "Data Structures"
  description: String,
  // ... other relevant fields
});

const MobileDevelopmentSchema = new mongoose.Schema({
  name: String,
  platform: String, // e.g., "iOS", "Android"
  description: String,
  // ... other relevant fields
});

const WebDevelopmentSchema = new mongoose.Schema({
  name: String,
  category: String, // e.g., "Front-End", "Back-End"
  description: String,
  // ... other relevant fields
});

const SDLCPhaseSchema = new mongoose.Schema({
  name: String,
  description: String,
  // ... other relevant fields
});

const ProgrammingParadigmSchema = new mongoose.Schema({
  name: String,
  description: String,
  // ... other relevant fields
});

const DataScienceSchema = new mongoose.Schema({
  name: String,
  category: String, // e.g., "Data Analysis", "Data Visualization"
  description: String,
  // ... other relevant fields
});

const GameDevelopmentSchema = new mongoose.Schema({
  name: String,
  category: String, // e.g., "Game Engines", "Game Art"
  description: String,
  // ... other relevant fields
});

// Compile models from the above schemas
const Software = mongoose.model('Software', SoftwareSchema);
const ProgrammingLanguage = mongoose.model('ProgrammingLanguage', ProgrammingLanguageSchema);
const DevelopmentTool = mongoose.model('DevelopmentTool', DevelopmentToolSchema);
const ComputerScienceConcept = mongoose.model('ComputerScienceConcept', ComputerScienceConceptSchema);
const MobileDevelopment = mongoose.model('MobileDevelopment', MobileDevelopmentSchema);
const WebDevelopment = mongoose.model('WebDevelopment', WebDevelopmentSchema);
const SDLCPhase = mongoose.model('SDLCPhase', SDLCPhaseSchema);
const ProgrammingParadigm = mongoose.model('ProgrammingParadigm', ProgrammingParadigmSchema);
const DataScience = mongoose.model('DataScience', DataScienceSchema);
const GameDevelopment = mongoose.model('GameDevelopment', GameDevelopmentSchema);

// Export the models
module.exports = {
  Software,
  ProgrammingLanguage,
  DevelopmentTool,
  ComputerScienceConcept,
  MobileDevelopment,
  WebDevelopment,
  SDLCPhase,
  ProgrammingParadigm,
  DataScience,
  GameDevelopment
};
