const { Router } = require("express");

//Controllers
const SchedulingController = require("./Controllers/SchedulingController");
const ClassController = require("./Controllers/ClassController");
const AuthController = require("./Controllers/AuthController");
const CalendarController = require("./Controllers/CalendarController");
const CheckinController = require("./Controllers/CheckinController");
const ModalityController = require("./Controllers/ModalityController");
const PaymentController = require("./Controllers/PaymentController");
const PlanController = require("./Controllers/PlanController");
const TeacherController = require("./Controllers/TeacherController");
const SessionController = require("./Controllers/SessionController");
const UserController = require("./Controllers/UserController");

//Validators
const SchedulingValidator= require("./Validators/SchedulingValidator");
const ClassValidator = require("./Validators/ClassValidator");
const AuthValidator = require("./Validators/AuthValidator");
const CalendarValidator = require("./Validators/CalendarValidator");
const CheckinValidator = require("./Validators/CheckinValidator");
const ModalityValidator = require("./Validators/ModalityValidator");
const PaymentValidator = require("./Validators/PaymentValidator");
const PlanValidator = require("./Validators/PlanValidator");
const TeacherValidator = require("./Validators/TeacherValidator");
const SessionValidator = require("./Validators/SessionValidator");
const UserValidator = require("./Validators/UserValidator");

const routes = Router();


//appointments
routes.post('/scheduling', SchedulingValidator.create, SchedulingController.create);
routes.get('/scheduling', SchedulingController.read);
routes.delete('/scheduling/:id',SchedulingValidator.destroy, SchedulingController.delete);
routes.put('/scheduling/:id',SchedulingValidator.update, SchedulingController.update);

//classes
routes.post('/classes', ClassValidator.create, ClassController.create);
routes.get('/classes', ClassController.read);
routes.delete('/classes/:id',ClassValidator.destroy, ClassController.delete);
routes.put('/classes/:id',ClassValidator.update, ClassController.update);

//calendars
routes.post('/calendars', CalendarValidator.create, CalendarController.create);
routes.get('/calendars', CalendarController.read);
routes.delete('/calendars/:id',CalendarValidator.destroy, CalendarController.delete);
routes.put('/calendars/:id',CalendarValidator.update, CalendarController.update);

//checkins
routes.post('/checkins', CheckinValidator.create, CheckinController.create);
routes.get('/checkins', CheckinController.read);
routes.delete('/checkins/:id',CheckinValidator.destroy, CheckinController.delete);
routes.put('/checkins/:id',CheckinValidator.update, CheckinController.update);

//modalities
routes.post('/modalities', ModalityValidator.create, ModalityController.create);
routes.get('/modalities', ModalityController.read);
routes.delete('/modalities/:id',ModalityValidator.destroy, ModalityController.delete);
routes.put('/modalities/:id',ModalityValidator.update, ModalityController.update);

//payments
routes.post('/payments', PaymentValidator.create, PaymentController.create);
routes.get('/payments', PaymentController.read);
routes.delete('/payments/:id',PaymentValidator.destroy, PaymentController.delete);
routes.put('/payments/:id',PaymentValidator.update, PaymentController.update);

//plans
routes.post('/plans', PlanValidator.create, PlanController.create);
routes.get('/plans', PlanController.read);
routes.delete('/plans/:id',PlanValidator.destroy, PlanController.delete);
routes.put('/plans/:id',PlanValidator.update, PlanController.update);


//teachers
routes.post('/teachers', TeacherValidator.create, TeacherController.create);
routes.get('/teachers', TeacherController.read);
routes.delete('/teachers/:id',TeacherValidator.destroy, TeacherController.delete);
routes.put('/teachers/:id',TeacherValidator.update, TeacherController.update);

//sessions
routes.post('/sessions', SessionValidator.create, SessionController.create);
routes.get('/sessions', SessionController.read);
routes.delete('/sessions/:id', SessionValidator.destroy, SessionController.delete);

//users
routes.post('/users', UserValidator.create, UserController.create);
routes.get('/users', UserController.read);
routes.delete('/users/:id',UserValidator.destroy, UserController.delete);
routes.put('/users/:id',UserValidator.update, UserController.update);




routes.post("/login", AuthValidator.login, AuthController.login);

module.exports = routes;
