const passwordValidator = require("password-validator");
const passwordSchema = new passwordValidator();

// Modèle du mot de passe à encodé au signup et au login
passwordSchema
  .is()
  .min(8) // Minimum 8 caractères dans le mot de passe
  .is()
  .max(30) // Mximum 20 caractères dans le mots de passe
  .has()
  .uppercase(1) // Doit contenir une majuscule
  .has()
  .lowercase() // contiendra des miniscules pour le reste des carcatères disponibles
  .has()
  .symbols(1) // Doit contenir un symbole
  .has()
  .digits(4) // Doit contenir 4 digit (nombre)
  .is()
  .not(/[\]()[{}<>@]/) // ne peut pas contenir ces caractères
  .has()
  .not()
  .spaces() // Ne peut pas avoir d'espace entre les caractères
  .is()
  .not()
  .oneOf(["Passw0rd", "Password123", "123456789", "iLoveYou", "Master", "azerty", "qwerty"]); 
  // liste noir des valeurs interdites

  // on exporte le Schema password
module.exports = passwordSchema;
