const { Router } = require("express");

//Controllers
const AgendamentoController = require("./Controllers/AgendamentoController");
const AulaController = require("./Controllers/AulaController");
const AuthController = require("./Controllers/AuthController");
const CalendarioController = require("./Controllers/CalendarioController");
const CheckinController = require("./Controllers/CheckinController");
const ModalidadeController = require("./Controllers/ModalidadeController");
const PagamentoController = require("./Controllers/PagamentoController");
const PlanoController = require("./Controllers/PlanoController");
const ProfessorController = require("./Controllers/ProfessorController");
const SessoesController = require("./Controllers/SessoesController");
const UsuarioController = require("./Controllers/UsuarioController");

//Validators
const AgendamentoValidator= require("./Validators/AgendamentoValidator");
const AulaValidator = require("./Validators/AulaValidator");
const AuthValidator = require("./Validators/AuthValidator");
const CalendarioValidator = require("./Validators/CalendarioValidator");
const CheckinValidator = require("./Validators/CheckinValidator");
const ModalidadeValidator = require("./Validators/ModalidadeValidator");
const PagamentoValidator = require("./Validators/PagamentoValidator");
const PlanoValidator = require("./Validators/PlanoValidator");
const ProfessorValidator = require("./Validators/ProfessorValidator");
const SessoesValidator = require("./Validators/SessoesValidator");
const UsuarioValidator = require("./Validators/UsuarioValidator");

const rotas = Router();


//agendamentos
rotas.post('/agendamentos', AgendamentoValidator.create, AgendamentoController.create);
rotas.get('/agendamentos', AgendamentoController.read);
rotas.delete('/agendamentos/:id',AgendamentoValidator.destroy, AgendamentoController.delete);
rotas.put('/agendamentos/:id',AgendamentoValidator.update, AgendamentoController.update);

//aulas
rotas.post('/aulas', AulaValidator.create, AulaController.create);
rotas.get('/aulas', AulaController.read);
rotas.delete('/aulas/:id',AulaValidator.destroy, AulaController.delete);
rotas.put('/aulas/:id',AulaValidator.update, AulaController.update);

//calendarios
rotas.post('/calendarios', CalendarioValidator.create, CalendarioController.create);
rotas.get('/calendarios', CalendarioController.read);
rotas.delete('/calendarios/:id',CalendarioValidator.destroy, CalendarioController.delete);
rotas.put('/calendarios/:id',CalendarioValidator.update, CalendarioController.update);

//checkins
rotas.post('/checkins', CheckinValidator.create, CheckinController.create);
rotas.get('/checkins', CheckinController.read);
rotas.delete('/checkins/:id',CheckinValidator.destroy, CheckinController.delete);
rotas.put('/checkins/:id',CheckinValidator.update, CheckinController.update);

//modalidades
rotas.post('/modalidades', ModalidadeValidator.create, ModalidadeController.create);
rotas.get('/modalidades', ModalidadeController.read);
rotas.delete('/modalidades/:id',ModalidadeValidator.destroy, ModalidadeController.delete);
rotas.put('/modalidades/:id',ModalidadeValidator.update, ModalidadeController.update);

//pagamentos
rotas.post('/pagamentos', PagamentoValidator.create, PagamentoController.create);
rotas.get('/pagamentos', PagamentoController.read);
rotas.delete('/pagamentos/:id',PagamentoValidator.destroy, PagamentoController.delete);
rotas.put('/pagamentos/:id',PagamentoValidator.update, PagamentoController.update);

//planos
rotas.post('/planos', PlanoValidator.create, PlanoController.create);
rotas.get('/planos', PlanoController.read);
rotas.delete('/planos/:id',PlanoValidator.destroy, PlanoController.delete);
rotas.put('/planos/:id',PlanoValidator.update, PlanoController.update);


//professores
rotas.post('/professores', ProfessorValidator.create, ProfessorController.create);
rotas.get('/professores', ProfessorController.read);
rotas.delete('/professores/:id',ProfessorValidator.destroy, ProfessorController.delete);
rotas.put('/professores/:id',ProfessorValidator.update, ProfessorController.update);

//SESSOES
rotas.post('/sessoes', SessoesValidator.create, SessoesController.create);
rotas.get('/sessoes', SessoesController.read);
rotas.delete('/sessoes/:id', SessoesValidator.destroy, SessoesController.delete);

//USUARIOS
rotas.post('/usuarios', UsuarioValidator.create, UsuarioController.create);
rotas.get('/usuarios', UsuarioController.read);
rotas.delete('/usuarios/:id',UsuarioValidator.destroy, UsuarioController.delete);
rotas.put('/usuarios/:id',UsuarioValidator.update, UsuarioController.update);




rotas.post("/login", AuthValidator.login, AuthController.login);

module.exports = rotas;