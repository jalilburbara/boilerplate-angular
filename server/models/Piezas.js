'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*var Carros = mongoose.model('Carros');
var Ubicaciones = mongoose.model('Ubicaciones');
*/

mongoose.Promise = global.Promise;

const PiezaSchema = mongoose.model('Pieza', {
    _id:       { type: Number, required: true },
    nombre:    { type: String, required: true },
    ubicacion: { type: Schema.ObjectId, ref: "Carros" } ,
    carro:     { type: Schema.ObjectId, ref: "Ubicaciones" } 
});

module.exports = PiezaSchema; 