"use strict";

// 'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('question', [{
      form_id: 1,
      question_text: 'Tecnico/a de referencia',
      question_type: 'abierta',
      question_options: '',
      question_width: 3,
      question_group: 'Equipo',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Correo Tecnico/a de referencia',
      question_type: 'abierta',
      question_options: '',
      question_width: 3,
      question_group: 'Equipo',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Teléfono Tecnico/a de referencia',
      question_type: 'abierta',
      question_options: '',
      question_width: 3,
      question_group: 'Equipo',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Responsable Equipo/Coordinación',
      question_type: 'abierta',
      question_options: '',
      question_width: 3,
      question_group: 'Equipo',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Correo Responsable Equipo/Coordinación',
      question_type: 'abierta',
      question_options: '',
      question_width: 3,
      question_group: 'Equipo',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Teléfono Responsable Equipo/Coordinación',
      question_type: 'abierta',
      question_options: '',
      question_width: 3,
      question_group: 'Equipo',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Grado de colectividad de la vivienda',
      question_type: 'multiple',
      question_options: '["Vivienda (2-6 habitaciones) con habitación individual","Vivienda (2-6 habitaciones) compartiendo habitación","Residencial (más de 6 habitaciones) con habitación individual","Residencial (más de 6 habitaciones) compartiendo habitación"]',
      question_width: 2,
      question_group: 'Vivienda',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Grado de intermitencia de apoyos',
      question_type: 'multiple',
      question_options: '["Presencia permanente/diaria","Presencia semanal/quincenal pautada (informada)", "Presencia semanal/quincenal no pautada","Presencia solamente a solicitud de participantes"]',
      question_width: 2,
      question_group: 'Vivienda',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Grado de autonomía en la economía doméstica',
      question_type: 'multiple',
      question_options: '["Gestión de la alimentación organizada desde la entidad","Gestión de la alimentación autónoma"]',
      question_width: 2,
      question_group: 'Vivienda',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Copago',
      question_type: 'multiple',
      question_options: '["Sí","No, no ha cumplido criterios para pago","No"]',
      question_width: 2,
      question_group: 'Vivienda',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Identidad jurídica',
      question_type: 'multiple',
      question_options: '["Persona en situación irregular","Persona bajo alguna condición de protección de duración menor a un año","Persona bajo alguna condición de protección de duración superior a un año","Persona en situación regular “permanente”"]',
      question_width: 1,
      question_group: 'Acompañamiento Social',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Apoyos - Atención Psicológica',
      question_type: 'multiple',
      question_options: '["Si","No"]',
      question_width: 3,
      question_group: 'Acompañamiento Social',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Apoyos - Asesoramiento Jurídico',
      question_type: 'multiple',
      question_options: '["Si","No"]',
      question_width: 3,
      question_group: 'Acompañamiento Social',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Apoyos - Itinerario Formativo Laboral',
      question_type: 'multiple',
      question_options: '["Si","No"]',
      question_width: 3,
      question_group: 'Acompañamiento Social',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Plan de mentoría',
      question_type: 'multiple',
      question_options: '["Si, completado según compromiso","Si, con cierre anticipado","No"]',
      question_width: 2,
      question_group: 'Productos Innovadores',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Participación - Asambleas convivenciales',
      question_type: 'multiple',
      question_options: '["Siempre o casi siempre","Ocasionalmente","Nunca o casi nunca"]',
      question_width: 2,
      question_group: 'Productos Innovadores',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Participación - Ocio Individual',
      question_type: 'multiple',
      question_options: '["Si, habitualmente","Ocasionalmente","Nunca o casi nunca"]',
      question_width: 2,
      question_group: 'Productos Innovadores',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Participación - Ocio Grupal',
      question_type: 'multiple',
      question_options: '["Si, habitualmente","Ocasionalmente","Nunca o casi nunca"]',
      question_width: 2,
      question_group: 'Productos Innovadores',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Participación - Grupo de jóvenes',
      question_type: 'multiple',
      question_options: '["Si","No"]',
      question_width: 3,
      question_group: 'Productos Innovadores',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Autonarrativas - Incipit - Mapeo',
      question_type: 'multiple',
      question_options: '["Si","No"]',
      question_width: 3,
      question_group: 'Productos Innovadores',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Autonarrativas - Incipit - Collage',
      question_type: 'multiple',
      question_options: '["Si","No"]',
      question_width: 3,
      question_group: 'Productos Innovadores',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Autonarrativas - Incipit - Bueno para pensar',
      question_type: 'multiple',
      question_options: '["Si","No"]',
      question_width: 3,
      question_group: 'Productos Innovadores',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Autonarrativas - Ruit - Disco Forum',
      question_type: 'multiple',
      question_options: '["Si","No"]',
      question_width: 3,
      question_group: 'Productos Innovadores',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Autonarrativas - Ruit - Carpe Diem',
      question_type: 'multiple',
      question_options: '["Si","No"]',
      question_width: 3,
      question_group: 'Productos Innovadores',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Autonarrativas - Ruit - Ecomapa',
      question_type: 'multiple',
      question_options: '["Si","No"]',
      question_width: 3,
      question_group: 'Productos Innovadores',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Autonarrativas - Exit - Línea de futuro',
      question_type: 'multiple',
      question_options: '["Si","No"]',
      question_width: 3,
      question_group: 'Productos Innovadores',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Autonarrativas - Exit - Podcast',
      question_type: 'multiple',
      question_options: '["Si","No"]',
      question_width: 3,
      question_group: 'Productos Innovadores',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Autonarrativas - Exit -Contextualización de cierre',
      question_type: 'multiple',
      question_options: '["Si","No"]',
      question_width: 3,
      question_group: 'Productos Innovadores',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Voluntariado',
      question_type: 'multiple',
      question_options: '["Si, de manera estable","Si, en acciones puntuales","No"]',
      question_width: 3,
      question_group: 'Productos Innovadores',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Salud - Pactos de cuidados',
      question_type: 'multiple',
      question_options: '["Si","No"]',
      question_width: 3,
      question_group: 'Productos Innovadores',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Salud - Mapas del Alma',
      question_type: 'multiple',
      question_options: '["Si","No"]',
      question_width: 3,
      question_group: 'Productos Innovadores',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Salud - Taller de cuidados',
      question_type: 'multiple',
      question_options: '["Si","No"]',
      question_width: 3,
      question_group: 'Productos Innovadores',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 1,
      question_text: 'Salud - Mapas corporales',
      question_type: 'multiple',
      question_options: '["Si","No"]',
      question_width: 3,
      question_group: 'Productos Innovadores',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //MATRIZ MEDDI QUESTIONS
    //QUESTIONS TAB 1
    {
      form_id: 2,
      question_text: '1. Siento que soy una persona digna de aprecio, al menos en igual medida que los demás.',
      question_type: 'multiple',
      question_options: '["Muy en desacuerdo","En desacuerdo","De acuerdo","Muy de acuerdo"]',
      question_width: 12,
      question_group: 'AUTOCONCEPTO - AUTOVALORACIÓN',
      question_subtitle: '',
      question_instruccions: '',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '2. Estoy convencido/a de que tengo cualidades buenas.',
      question_type: 'multiple',
      question_options: '["Muy en desacuerdo","En desacuerdo","De acuerdo","Muy de acuerdo"]',
      question_width: 12,
      question_group: 'AUTOCONCEPTO - AUTOVALORACIÓN',
      question_subtitle: '',
      question_instruccions: '',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '3.Soy capaz de hacer las cosas tan bien como la mayoría de la gente.',
      question_type: 'multiple',
      question_options: '["Muy en desacuerdo","En desacuerdo","De acuerdo","Muy de acuerdo"]',
      question_width: 12,
      question_group: 'AUTOCONCEPTO - AUTOVALORACIÓN',
      question_subtitle: '',
      question_instruccions: '',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '4.Tengo una actitud positiva hacia mí mismo/a.',
      question_type: 'multiple',
      question_options: '["Muy en desacuerdo","En desacuerdo","De acuerdo","Muy de acuerdo"]',
      question_width: 12,
      question_group: 'AUTOCONCEPTO - AUTOVALORACIÓN',
      question_subtitle: '',
      question_instruccions: '',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '5.En general, estoy satisfecho/a de mí mismo/a.',
      question_type: 'multiple',
      question_options: '["Muy en desacuerdo","En desacuerdo","De acuerdo","Muy de acuerdo"]',
      question_width: 12,
      question_group: 'AUTOCONCEPTO - AUTOVALORACIÓN',
      question_subtitle: '',
      question_instruccions: '',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '6. Siento que no tengo mucho de lo que estar orgulloso/a.',
      question_type: 'multiple',
      question_options: '["Muy en desacuerdo","En desacuerdo","De acuerdo","Muy de acuerdo"]',
      question_width: 12,
      question_group: 'AUTOCONCEPTO - AUTOVALORACIÓN',
      question_subtitle: '<p className="small hint-text text-danger"> Atención a las preguntas 6 a 10. En planteamiento, están invertidas a las demás</p>',
      question_instruccions: '',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '7. En general, me inclino a pensar que soy un fracasado/a.',
      question_type: 'multiple',
      question_options: '["Muy en desacuerdo","En desacuerdo","De acuerdo","Muy de acuerdo"]',
      question_width: 12,
      question_group: 'AUTOCONCEPTO - AUTOVALORACIÓN',
      question_subtitle: '<p className="small hint-text text-danger"> Atención a las preguntas 6 a 10. En planteamiento, están invertidas a las demás</p>',
      question_instruccions: '',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '8. Me gustaría poder sentir más respeto por mí mismo/a.',
      question_type: 'multiple',
      question_options: '["Muy en desacuerdo","En desacuerdo","De acuerdo","Muy de acuerdo"]',
      question_width: 12,
      question_group: 'AUTOCONCEPTO - AUTOVALORACIÓN',
      question_subtitle: '<p className="small hint-text text-danger"> Atención a las preguntas 6 a 10. En planteamiento, están invertidas a las demás</p>',
      question_instruccions: '',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '9. Hay veces que realmente pienso que soy un/a inútil',
      question_type: 'multiple',
      question_options: '["Muy en desacuerdo","En desacuerdo","De acuerdo","Muy de acuerdo"]',
      question_width: 12,
      question_group: 'AUTOCONCEPTO - AUTOVALORACIÓN',
      question_subtitle: '<p className="small hint-text text-danger"> Atención a las preguntas 6 a 10. En planteamiento, están invertidas a las demás</p>',
      question_instruccions: '',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '10. A veces creo que no soy buena persona.',
      question_type: 'multiple',
      question_options: '["Muy en desacuerdo","En desacuerdo","De acuerdo","Muy de acuerdo"]',
      question_width: 12,
      question_group: 'AUTOCONCEPTO - AUTOVALORACIÓN',
      question_subtitle: '<p className="small hint-text text-danger"> Atención a las preguntas 6 a 10. En planteamiento, están invertidas a las demás</p>',
      question_instruccions: '',
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 2
    {
      form_id: 2,
      question_text: 'Seleccione la opcion según el resultado:',
      question_type: 'multiple',
      question_options: '["Expectativas desajustadas","Expectativas poco ajustadas","Expectativas moderadamente ajustadas","Expectativas ajustadas"]',
      question_width: 12,
      question_group: 'EXPECTATIVAS - VALORACIÓN PROFESIONAL',
      question_subtitle: '',
      question_instruccions: "[\"<p><button class='btn btn-success' type='button' data-toggle='collapse' data-target='#expectatovasAcordeon' aria-expanded='false' aria-controls='expectatovasAcordeon'>Instrucciones</button></p>\",\n                              \"<div class='collapse' id='expectatovasAcordeon'>\",\n                              \"<div class='card card-body'>\",\n                              \"<div class='customGreen p-3 rounded'>\",\n                              \"<h5><b>Valoraci\xF3n profesional</b></h5>\",\n                              \"<h5>En base a los siguientes \xEDtems escoge una de las dimensiones que mejor se ajusta a la valoraci\xF3n sobre el/la participante</h5>\",\n                              \"</div>\",\n                              \"<ul class='list-group'>\",\n                              \"<li class='list-group-item'><b>Define metas y logros realistas para el futuro</b></li>\",\n                              \"<li class='list-group-item'><b>Identifica con qu\xE9 recursos actuales cuenta para alcanzar las metas</b></li>\",\n                              \"<li class='list-group-item'><b>Tiene disposici\xF3n para ajustar sus expectativas a los cambios/sucesos en su vida</b></li>\",\n                              \"<li class='list-group-item'><b>Elabora expectativas que redunden en su bienestar y felicidad</b></li>\",\n                              \"<li class='list-group-item'><b>Expresa en t\xE9rminos de oportunidad la indefinici\xF3n del futuro</b></li>\",\n                              \"</ul>\",\n                              \"<b/><h6><u>Apuntar el valor num\xE9rico</u></h6><b/>\",\n                              \"<b>0.Expectativas desajustadas</b>\",\n                              \"<p>El/la joven tiene una visi\xF3n limitada de su futuro, formulando metas irracionales,basadas en la realizaci\xF3n de deseos, mas que en la propia experiencia,capacidades y recursos</p><br/>\",\n                              \"<b>1.Expectativas poco ajustadas</b>\",\n                              \"<p>El/la joven tiene una visi\xF3n limitada de su futuro, definiendo metas dificilmente alcanzables con sus capacidades y recursos</p><br/>\",\n                              \"<b>2.Expectativas moderadamente ajustadas</b>\",\n                              \"<p>El/la joven tiene una actitud positiva hacia su futuro, estableciendo metas cuya realizaci\xF3n depende tanto en sus capacidades y recursos como deaspectos fuera de su control</p><br/>\",\n                              \"<b>3.Expectativas ajustadas</b>\",\n                              \"<p>El/la joven tiene una actitud positiva hacia su futuro, definiendo metas realizables en base al reconocimiento de sus propias capacidades y recursos para alcanzar tales metas</p>\",\n                              \"</div></div>\"]",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 3
    {
      form_id: 2,
      question_text: 'Seleccione la opcion según el resultado:',
      question_type: 'multiple',
      question_options: '["Indefensión","Indefensión Moderada","Indefensión Baja","Capacidad de Agencia"]',
      question_width: 12,
      question_group: 'ATRIBUCIÓN DE CAUSALIDAD - VALORACIÓN PROFESIONAL',
      question_subtitle: '',
      question_instruccions: "[\"<p><button class='btn btn-success' type='button' data-toggle='collapse' data-target='#causalidadAcordeon' aria-expanded='false' aria-controls='causalidadAcordeon'>Instrucciones</button></p>\",\n                                \"<div class='collapse' id='causalidadAcordeon'>\",\n                                \"<div class='card card-body'>\",\n                                \"<div class='customGreen p-3 rounded'>\",\n                                \"<h5><b>Valoraci\xF3n profesional</b></h5>\",\n                                \"<h5>En base a los siguientes \xEDtems escoge una de las dimensiones que mejor se ajusta a la valoraci\xF3n sobre el/la participante</h5>\",\n                                \"</div>\",\n                                \"<ul class='list-group'>\",\n                                \"<li class='list-group-item'><b>Experimenta que sus acciones tienen un efecto sobre su entorno (por ejemplo, que su comportamiento influye en los otros)</b></li>\",\n                                \"<li class='list-group-item'><b> Tiene la sensaci\xF3n de que las decisiones que toma influyen en su futuro</b></li>\",\n                                \"<li class='list-group-item'><b> Experimenta que determinadas decisiones (en el \xE1mbito de la formaci\xF3n, del empleo, por ejemplo), mejoran sus condiciones de vida</b></li>\",\n                                \"<li class='list-group-item'><b>Siente que su esfuerzo se refleja en resultados concretos: mejorar su vida, mejorar la vida de los dem\xE1s, etc </b></li>\",\n                                \"</ul>\",\n                                \"<b/><h6><u>Apuntar el valor num\xE9rico</u></h6><b/>\",\n                                \"<b>0.Indefensi\xF3n</b>\",\n                                \"<p>El/la joven est\xE1 convencido de que no importa lo que haga o las decisiones que toma porque estas decisiones no tienen ning\xFAn efecto en su vida</p><br/>\",\n                                \"<b>1.Indefensi\xF3n Moderada</b>\",\n                                \"<p>En general, el/la joven siente que sus acciones y decisiones tienen poca influencia en su vida y en el contexto</p><br/>\",\n                                \"<b>2.Indefensi\xF3n Baja </b>\",\n                                \"<p>En general, el/la joven siente que sus acciones y decisiones tienen efecto en su vida y en el contexto, pero en ocasiones tiene dudas al respecto</p><br/>\",\n                                \"<b>3.Capacidad de Agencia</b>\",\n                                \"<p>En general, el/la joven siente que sus acciones y sus decisiones tienen efecto en su vida y en el contexto que le rodea. </p>\",\n                                \"</div></div>\"]",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 4
    {
      form_id: 2,
      question_text: '1. He sentido que no tengo la misma motivación para hacer las cosas como anteriormente hacía',
      question_type: 'multiple',
      question_options: '["Nunca lo pienso, hago o siento","","","Todo el tiempo lo pienso, hago o siento"]',
      question_width: 12,
      question_group: 'ATRIBUCIÓN DE CAUSALIDAD - AUTOVALORACIÓN',
      question_subtitle: '<b>Escoge la frase que más se adapta a tu motivacion donde: </b><p>0 = Nunca lo pienso, hago o siento</p><p>3 = Todo el tiempo lo pienso, hago o siento</p>',
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '2. Tiendo a posponer o envitar compromisos y responsabilidades',
      question_type: 'multiple',
      question_options: '["Nunca lo pienso, hago o siento","","","Todo el tiempo lo pienso, hago o siento"]',
      question_width: 12,
      question_group: 'ATRIBUCIÓN DE CAUSALIDAD - AUTOVALORACIÓN',
      question_subtitle: '<b>Escoge la frase que más se adapta a tu motivacion donde: </b><p>0 = Nunca lo pienso, hago o siento</p><p>3 = Todo el tiempo lo pienso, hago o siento</p>',
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '3. Me he sentido incapaz de cumplir o hacer las tareas más simples en mi vida',
      question_type: 'multiple',
      question_options: '["Nunca lo pienso, hago o siento","","","Todo el tiempo lo pienso, hago o siento"]',
      question_width: 12,
      question_group: 'ATRIBUCIÓN DE CAUSALIDAD - AUTOVALORACIÓN',
      question_subtitle: '<b>Escoge la frase que más se adapta a tu motivacion donde: </b><p>0 = Nunca lo pienso, hago o siento</p><p>3 = Todo el tiempo lo pienso, hago o siento</p>',
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '4.He dejado dehacer cosas porque pienso que no valen la pena o no son placenteras',
      question_type: 'multiple',
      question_options: '["Nunca lo pienso, hago o siento","","","Todo el tiempo lo pienso, hago o siento"]',
      question_width: 12,
      question_group: 'ATRIBUCIÓN DE CAUSALIDAD - AUTOVALORACIÓN',
      question_subtitle: '<b>Escoge la frase que más se adapta a tu motivacion donde: </b><p>0 = Nunca lo pienso, hago o siento</p><p>3 = Todo el tiempo lo pienso, hago o siento</p>',
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 5
    {
      form_id: 2,
      question_text: 'Seleccione la opcion según el resultado:',
      question_type: 'multiple',
      question_options: '["Mal manejo de la incertidumbre","Baja tolerancia a la incertidumbre","Tolerancia media a la incertidumbre","Alta tolerancia a la incertidumbre"]',
      question_width: 12,
      question_group: "MANEJO DE LA INCERTIDUMBRE - VALORACIÓN PROFESIONAL",
      question_subtitle: '',
      question_instruccions: "[\"<p><button class='btn btn-success' type='button' data-toggle='collapse' data-target='#incertidumbreAcordeon' aria-expanded='false' aria-controls='incertidumbreAcordeon'>Instrucciones</button></p>\",\n                              \"<div class='collapse' id='incertidumbreAcordeon'>\",\n                              \"<div class='card card-body'>\",\n                              \"<div class='customGreen p-3 rounded'>\",\n                              \"<h5><b>Valoraci\xF3n profesional</b></h5>\",\n                              \"<h5>En base a los siguientes \xEDtems escoge una de las dimensiones que mejor se ajusta a la valoraci\xF3n sobre el/la participante</h5>\",\n                              \"</div>\",\n                              \"<ul class='list-group'>\",\n                              \"<li class='list-group-item'><b> Puede desarrollar su proceso personal sin temores o miedos irracionales que impidan u obstaculicen su trascurso</b></li>\",\n                              \"<li class='list-group-item'><b> Tiene informaci\xF3n y conocimientos realistas acerca de los plazos y tiempos que llevan determinadas gestiones o procesos</b></li>\",\n                              \"<li class='list-group-item'><b> Se muestra dispuesto/a a llevar a cabo distintas tareas y rutinas independientemente de los plazos en los que se vayan completando, siendo aut\xF3nomo/a</b></li>\",\n                              \"<li class='list-group-item'><b> Acepta y tiene confianza o certeza en que todo proceso tiene un comienzo y un fin y se muestra seguro/a.</b></li>\",\n                              \"</ul>\",\n                              \"<b/><h6><u>Apuntar el valor num\xE9rico</u></h6><b/>\",\n                              \"<b>0.Mal manejo de la incertidumbre</b>\",\n                              \"<p>Muestra signos de angustia que le impiden un desarrollo funcional de tareas rutinarias y cotidianas.Dichos s\xEDntomas pueden tener repercusiones fisiol\xF3gicas (falta de sue\xF1o, hiperactividad etc.)</p><br/>\",\n                              \"<b>1.Baja tolerancia a la incertidumbre</b>\",\n                              \"<p>Tiene claros s\xEDntomas de ansiedad, se muestra demandante y con necesidad de una respuesta inmediata.Presenta rumiaciones relativas a los procesos que est\xE9n en marcha.</p><br/>\",\n                              \"<b>2.Tolerancia media a la incertidumbre</b>\",\n                              \"<p>Se muestra algo inquieto/a de manera puntual, con alg\xFAn pensamiento o preocupaci\xF3n recurrente.Ocasionalmente deja de confiar en una resoluci\xF3n de los procesos que est\xE9n en marcha.</p><br/>\",\n                              \"<b>3.Alta tolerancia a la incertidumbre</b>\",\n                              \"<p>Acepta con confianza y seguridad que cualquier proceso o tr\xE1mite tendr\xE1 una resoluci\xF3n.Asume que determinadas circunstancias son variables y se muestra paciente y sosegado/a</p>\",\n                              \"</div></div>\"]",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 6
    {
      form_id: 2,
      question_text: 'Seleccione la opcion según el resultado:',
      question_type: 'multiple',
      question_options: '["Conductas no saludables","Numerosa frecuencia de conductas no saludables","Conductas saludables en general","Conductas saludables"]',
      question_width: 12,
      question_group: "CONDUCTAS DE SALUD/BIENESTAR - VALORACIÓN PROFESIONAL",
      question_subtitle: '',
      question_instruccions: "[\"<p><button class='btn btn-success' type='button' data-toggle='collapse' data-target='#saludAcordeon' aria-expanded='false' aria-controls='saludAcordeon'>Instrucciones</button></p>\",\n                              \"<div class='collapse' id='saludAcordeon'>\",\n                              \"<div class='card card-body'>\",\n                              \"<div class='customGreen p-3 rounded'>\",\n                              \"<h5><b>Valoraci\xF3n profesional</b></h5>\",\n                              \"<h5>En base a los siguientes \xEDtems escoge una de las dimensiones que mejor se ajusta a la valoraci\xF3n sobre el/la participante</h5>\",\n                              \"</div>\",\n                              \"<ul class='list-group'>\",\n                              \"<li class='list-group-item'><b>Tiene conciencia de las consecuencias positivas o negativas de su propia conducta en su propia salud. Ejemplo: entiende que hacer deporte es bueno, que consumir drogas es negativo, etc. </b></li>\",\n                              \"<li class='list-group-item'><b>Tiene una percepci\xF3n del riesgo adecuada a la realidad (riesgo de consumo de alcohol y otras drogas, de la falta de sue\xF1o, etc.). </b></li>\",\n                              \"<li class='list-group-item'><b>Muestra clara y expl\xEDcitamente conductas saludables: se cuida cuando est\xE1 enfermo/a, no fuma/bebe en exceso, etc.</b></li>\",\n                              \"<li class='list-group-item'><b> Hace uso de los recursos sanitarios y muestra adherencia a los tratamientos, en su caso</b></li>\",\n                              \"</ul>\",\n                              \"<b/><h6><u>Apuntar el valor num\xE9rico</u></h6><b/>\",\n                              \"<b>0.Conductas no saludables</b>\",\n                              \"<p>Mantiene conductas no saludables de manera consciente. Muestra poca o ninguna motivaci\xF3n para el cambio. Estas conductas afectan a su bienestar de manera evidente y le generan problemas m\xE9dicos y/o psicosociales.</p><br/>\",\n                              \"<b>1.Numerosa frecuencia de conductas no saludables</b>\",\n                              \"<p>El/la joven muestra numerosas conductas no saludables, que forman parte de su estilo de vida. No obstante, comprende los riesgos y muestra otivaci\xF3n para el cambio.</p><br/>\",\n                              \"<b>2.Conductas saludables en general</b>\",\n                              \"<p>En general mantiene conductas saludables y de autocuidado. Esto se da tambi\xE9n con conductas no saludables que son puntuales O afectan a \xE1mbitos concretos (por ejemplo, fuma, consume drogas ocasionalmente).</p><br/>\",\n                              \"<b>3.Conductas saludables</b>\",\n                              \"<p>Mantiene conductas saludables de manera consciente. El/la joven se cuida y es consciente de que ese autocuidado es positivo para su salud.</p>\",\n                              \"</div></div>\"]",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 7
    {
      form_id: 2,
      question_text: '1.Busco formas creativas de enfrentarme a las situaciones difíciles',
      question_type: 'multiple',
      question_options: '["No refleja en absoluto una reacción tipica en mi (nunca)","","""Refleja mi forma habitual de responder (siempre)"]',
      question_width: 12,
      question_group: "RESILENCIA - AUTOVALORACIÓN",
      question_subtitle: "<b>¿Hasta qué punto las siguientes afirmaciones describen tu manera de reaccionar ante las dificultades? </b><p>0 = No refleja en absoluto una reacción tipica en mi (nunca)</p><p>3 = Refleja mi forma habitual de responder (siempre)</p>",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '2.No importa lo que me ocurra, confío en que puedo controlar mi reacción.',
      question_type: 'multiple',
      question_options: '["No refleja en absoluto una reacción tipica en mi (nunca)","","""Refleja mi forma habitual de responder (siempre)"]',
      question_width: 12,
      question_group: "RESILENCIA - AUTOVALORACIÓN",
      question_subtitle: "<b>¿Hasta qué punto las siguientes afirmaciones describen tu manera de reaccionar ante las dificultades? </b><p>0 = No refleja en absoluto una reacción tipica en mi (nunca)</p><p>3 = Refleja mi forma habitual de responder (siempre)</p>",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '3.Creo que puedo aprender cosas positivas cuando afronto situaciones difíciles.',
      question_type: 'multiple',
      question_options: '["No refleja en absoluto una reacción tipica en mi (nunca)","","""Refleja mi forma habitual de responder (siempre)"]',
      question_width: 12,
      question_group: "RESILENCIA - AUTOVALORACIÓN",
      question_subtitle: "<b>¿Hasta qué punto las siguientes afirmaciones describen tu manera de reaccionar ante las dificultades? </b><p>0 = No refleja en absoluto una reacción tipica en mi (nunca)</p><p>3 = Refleja mi forma habitual de responder (siempre)</p>",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '4.Busco de forma activa la forma de reemplazar las pérdidas que encuentro en la vida.',
      question_type: 'multiple',
      question_options: '["No refleja en absoluto una reacción tipica en mi (nunca)","","""Refleja mi forma habitual de responder (siempre)"]',
      question_width: 12,
      question_group: "RESILENCIA - AUTOVALORACIÓN",
      question_subtitle: "<b>¿Hasta qué punto las siguientes afirmaciones describen tu manera de reaccionar ante las dificultades? </b><p>0 = No refleja en absoluto una reacción tipica en mi (nunca)</p><p>3 = Refleja mi forma habitual de responder (siempre)</p>",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 8
    {
      form_id: 2,
      question_text: '1.Encuentro fortaleza en mi religión o espiritualidad',
      question_type: 'multiple',
      question_options: '["Nunca o casi Nunca","De vez en cuando","Bastantes veces","Siempre o casi siempre"]',
      question_width: 12,
      question_group: "ESPIRITUALIDAD - AUTOVALORACIÓN",
      question_subtitle: "",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '2.Siento profunda paz o armonía interior',
      question_type: 'multiple',
      question_options: '["Nunca o casi Nunca","De vez en cuando","Bastantes veces","Siempre o casi siempre"]',
      question_width: 12,
      question_group: "ESPIRITUALIDAD - AUTOVALORACIÓN",
      question_subtitle: "",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '3.Acepto a los/las demás incluso cuando hacen cosas que pienso que están mal',
      question_type: 'multiple',
      question_options: '["Nunca o casi Nunca","De vez en cuando","Bastantes veces","Siempre o casi siempre"]',
      question_width: 12,
      question_group: "ESPIRITUALIDAD - AUTOVALORACIÓN",
      question_subtitle: "",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 9
    {
      form_id: 2,
      question_text: '1.¿Tienes firma o certificado electrónico?',
      question_type: 'multiple',
      question_options: '["No, no lo conozco, no lo veo útil","No, porque no puedo por mi situación administrativa","Sí o en trámite","Sí, y lo utilizo habitualmente de manera autónoma"]',
      question_width: 12,
      question_group: "IDENTIDAD DIGITAL - AUTOVALORACIÓN",
      question_subtitle: "",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '2.¿Has utilizado o utilizas medios digitales para hacer algún trámite con las administraciones públicas?',
      question_type: 'multiple',
      question_options: '["No, ni sabía que se podía o nunca lo he necesitado","Lo necesité pero no pude","Sí, pero hicieron el trámite por mí","Sí"]',
      question_width: 12,
      question_group: "IDENTIDAD DIGITAL - AUTOVALORACIÓN",
      question_subtitle: "",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 10
    {
      form_id: 2,
      question_text: 'Seleccione la opcion según el resultado:',
      question_type: 'multiple',
      question_options: '["Nula conciencia de ciudadanía","Baja conciencia de ciudadanía","Moderada conciencia de ciudadanía","Alta conciencia de ciudadanía"]',
      question_width: 12,
      question_group: "CONCIENCIA DE CIUDADANÍA - VALORACIÓN PROFESIONAL",
      question_subtitle: "",
      question_instruccions: "[\"<p><button class='btn btn-success' type='button' data-toggle='collapse' data-target='#concienciaCiudadaniaAcordeon' aria-expanded='false' aria-controls='concienciaCiudadaniaAcordeon'>Instrucciones</button></p>\",\n                              \"<div class='collapse' id='concienciaCiudadaniaAcordeon'>\",\n                              \"<div class='card card-body'>\",\n                              \"<div class='customGreen p-3 rounded'>\",\n                              \"<h5><b>Valoraci\xF3n profesional</b></h5>\",\n                              \"<h5>En base a los siguientes \xEDtems escoge una de las dimensiones que mejor se ajusta a la valoraci\xF3n sobre el/la participante</h5>\",\n                              \"</div>\",\n                              \"<ul class='list-group'>\",\n                              \"<li class='list-group-item'><b>Conoce sus derechos y deberes como ciudadano/a adecuando su participaci\xF3n en diferentes \xE1mbitos seg\xFAn su rol y personalidad.</b></li>\",\n                              \"<li class='list-group-item'><b>Es consciente de que, como individuo, tiene derechos que no pueden ser vulnerados.</b></li>\",\n                              \"<li class='list-group-item'><b>Participa adecuada y responsablemente de los recursos p\xFAblicos y /o comunitarios.</b></li>\",\n                              \"<li class='list-group-item'><b>Tiene conciencia de su capacidad como individuo para disfrutar de los derechos de ciudadan\xEDa y es capaz de participar en acciones relacionadas con sus derechos.</b></li>\",\n                              \"</ul>\",\n                              \"<b/><h6><u>Apuntar el valor num\xE9rico</u></h6><b/>\",\n                              \"<b>0.Nula conciencia de ciudadan\xEDa</b>\",\n                              \"<p>El/la joven no se reconoce como miembro de la comunidad, ni tampoco tiene conciencia los derechos y obligaciones que implica su condici\xF3n de ciudadano.</p><br/>\",\n                              \"<b>1.Baja conciencia de ciudadan\xEDa</b>\",\n                              \"<p>El/la joven se reconoce como miembro de la comunidad y tiene conciencia los derechos y obligaciones que implica su condici\xF3n de ciudadano, pero experiencias negativas/de rechazo le impiden la participaci\xF3n.</p><br/>\",\n                              \"<b>2.Moderada conciencia de ciudadan\xEDa</b>\",\n                              \"<p>El/la joven se reconoce como miembro de la comunidad y los derechos y obligaciones que implica su condici\xF3n de ciudadano, pero encuentra barreras personales para participar en ella de manera ajustada.</p><br/>\",\n                              \"<b>3.Alta conciencia de ciudadan\xEDa</b>\",\n                              \"<p>El/la joven se siente miembro de la comunidad y es consciente de los derechos que tiene como individuo. Tiene conciencia de su condici\xF3n de ciudadano/a sujeto a derechos y obligaciones.</p>\",\n                              \"</div></div>\"]",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 11
    {
      form_id: 2,
      question_text: 'Seleccione la opcion según el resultado:',
      question_type: 'multiple',
      question_options: '["Irrelevancia de la pertenencia a grupos en la identidad","Baja relevancia de la pertenencia a grupos en la identidad","Moderada relevancia de la pertenencia a grupos en la identidad","Alta relevancia de la pertenencia a grupos en la identidad"]',
      question_width: 12,
      question_group: "PERTENENCIA A GRUPOS - VALORACIÓN PROFESIONAL",
      question_subtitle: "",
      question_instruccions: "[\"<p><button class='btn btn-success' type='button' data-toggle='collapse' data-target='#pgruposAcordeon' aria-expanded='false' aria-controls='pgruposAcordeon'>Instrucciones</button></p>\",\n                              \"<div class='collapse' id='pgruposAcordeon'>\",\n                              \"<div class='card card-body'>\",\n                              \"<div class='customGreen p-3 rounded'>\",\n                              \"<h5><b>Valoraci\xF3n profesional</b></h5>\",\n                              \"<h5>En base a los siguientes \xEDtems escoge una de las dimensiones que mejor se ajusta a la valoraci\xF3n sobre el/la participante</h5>\",\n                              \"</div>\",\n                              \"<ul class='list-group'>\",\n                              \"<li class='list-group-item'><b>Pertenece a grupos</b></li>\",\n                              \"<li class='list-group-item'><b>Valora positivamente la pertenencia a grupos en base a experiencias previas positivas</b></li>\",\n                              \"<li class='list-group-item'><b>Se identifica con los valores/intereses de los grupos en los que participa</b></li>\",\n                              \"<li class='list-group-item'><b>Le satisface la realizaci\xF3n de actividades en grupo</b></li>\",\n                              \"<li class='list-group-item'><b>Comprende y acepta las reglas y limitaciones de los grupos en los que se implica</b></li>\",\n                              \"<li class='list-group-item'><b>Establece relaciones interpersonales significativas con miembros de los grupos en los que se implica</b></li>\",\n                              \"</ul>\",\n                              \"<b/><h6><u>Apuntar el valor num\xE9rico</u></h6><b/>\",\n                              \"<b>0.Irrelevancia de la pertenencia a grupos en la identidad</b>\",\n                              \"<p>El/la joven no muestra inter\xE9s por la participaci\xF3n en grupos ni participa en ellos.</p><br/>\",\n                              \"<b>1.Baja relevancia de la pertenencia a grupos en la identidad</b>\",\n                              \"<p>El/la joven participa en grupos, pero guiado o motivado por la instituci\xF3n.</p><br/>\",\n                              \"<b>2.Moderada relevancia de la pertenencia a grupos en la identidad</b>\",\n                              \"<p>El/la joven participa en grupos, pero lo hace de manera instrumental y sin desarrollar relaciones interpersonales significativas.</p><br/>\",\n                              \"<b>3.Alta relevancia de la pertenencia a grupos en la identidad</b>\",\n                              \"<p>El/la joven participa en grupos, valora satisfactoriamente su pertenencia y mantiene relaciones significativas dentro de ellos.</p>\",\n                              \"</div></div>\"]",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 12
    {
      form_id: 2,
      question_text: 'Seleccione la opcion según el resultado:',
      question_type: 'multiple',
      question_options: '["Incapacidad para manejar las normas","Problemas significativos en el manejo de las normas","Problemas menores en el manejo de las normas","Adecuado manejo de las normas"]',
      question_width: 12,
      question_group: "SOCIALIZACIÓN, MANEJO DE LAS NORMAS - VALORACIÓN PROFESIONAL",
      question_subtitle: "",
      question_instruccions: "[\"<p><button class='btn btn-success' type='button' data-toggle='collapse' data-target='#socializaci\xF3nAcordeon' aria-expanded='false' aria-controls='socializaci\xF3nAcordeon'>Instrucciones</button></p>\",\n                              \"<div class='collapse' id='socializaci\xF3nAcordeon'>\",\n                              \"<div class='card card-body'>\",\n                              \"<div class='customGreen p-3 rounded'>\",\n                              \"<h5><b>Valoraci\xF3n profesional</b></h5>\",\n                              \"<h5>En base a los siguientes \xEDtems escoge una de las dimensiones que mejor se ajusta a la valoraci\xF3n sobre el/la participante</h5>\",\n                              \"</div>\",\n                              \"<ul class='list-group'>\",\n                              \"<li class='list-group-item'><b>Es capaz de asumir las normas grupales sin experimentar conflicto de alta intensidad.</b></li>\",\n                              \"<li class='list-group-item'><b>Entiende que las normas (de convivencia, sociales, formales) tienen una funci\xF3n para la vida en sociedad.</b></li>\",\n                              \"<li class='list-group-item'><b>Es capaz de realizar una cr\xEDtica del funcionamiento de las normas, basada en argumentos y en sus propias experiencias.</b></li>\",\n                              \"<li class='list-group-item'><b>Comprender que la transgresi\xF3n de las normas puede tener consecuencias negativas para s\xED mismo y para los dem\xE1s</b></li>\",\n                              \"<li class='list-group-item'><b></b>Comprende que en ocasiones la transgresi\xF3n de las normas puede estar justificada.</li>\",\n                              \"</ul>\",\n                              \"<b/><h6><u>Apuntar el valor num\xE9rico</u></h6><b/>\",\n                              \"<b>0.Incapacidad para manejar las normas</b>\",\n                              \"<p>El/la joven no comprende el contenido ni las funciones de las normas sociales y esta situaci\xF3n genera problemas propios y en el contexto y grupos de los que participa.</p><br/>\",\n                              \"<b>1.Problemas significativos en el manejo de las normas</b>\",\n                              \"<p>En general, el/la joven tiene dificultades para asumir las normas y para comprender los contextos y circunstancias que permiten realizar una cr\xEDtica constructiva de las mismas.</p><br/>\",\n                              \"<b>2.Problemas menores en el manejo de las normas</b>\",\n                              \"<p>En general, el/la joven entiende tanto el contenido como la funci\xF3n de las principales normas, pero en ocasiones le cuesta comprender c\xF3mo se aplican las normas.</p><br/>\",\n                              \"<b>3.Adecuado manejo de las normas</b>\",\n                              \"<p>En general, el/la joven entiende tanto el contenido como la funci\xF3n de las principales normas (convivencia, vida en comunidad, laborales, etc.)</p>\",\n                              \"</div></div>\"]",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 13
    {
      form_id: 2,
      question_text: 'Seleccione la opcion según el resultado:',
      question_type: 'multiple',
      question_options: '["Espacio no seguro","Espacio poco seguro","Espacio seguro","Espacio propio"]',
      question_width: 12,
      question_group: "SEGURIDAD ONTOLÓGICA - VALORACIÓN PROFESIONAL",
      question_subtitle: "",
      question_instruccions: "[\"<p><button class='btn btn-success' type='button' data-toggle='collapse' data-target='#socializaci\xF3nAcordeon' aria-expanded='false' aria-controls='socializaci\xF3nAcordeon'>Instrucciones</button></p>\",\n                              \"<div class='collapse' id='socializaci\xF3nAcordeon'>\",\n                              \"<div class='card card-body'>\",\n                              \"<div class='customGreen p-3 rounded'>\",\n                              \"<h5><b>Valoraci\xF3n profesional</b></h5>\",\n                              \"<h5>En base a los siguientes \xEDtems escoge una de las dimensiones que mejor se ajusta a la valoraci\xF3n sobre el/la participante</h5>\",\n                              \"</div>\",\n                              \"<ul class='list-group'>\",\n                              \"<li class='list-group-item'><b>Percibe que es un lugar en el que pueda tener control y hacerlo propio, no un lugar de prestado.</b></li>\",\n                              \"<li class='list-group-item'><b>Percibe que es un lugar donde estar protegido f\xEDsicamente y poder tener sus posesiones.</b></li>\",\n                              \"<li class='list-group-item'><b>Percibe que es un lugar donde realizar actividades \xEDntimas, sin ser criticado o juzgado.</b></li>\",\n                              \"</ul>\",\n                              \"<b/><h6><u>Apuntar el valor num\xE9rico</u></h6><b/>\",\n                              \"<b>0.Espacio no seguro</b>\",\n                              \"<p>El joven siente el espacio como ajeno, cree que no puede realizar actividades dentro de la habitaci\xF3n sin ser juzgado por otros compa\xF1eros y piensa que puede recibir agresiones de cualquier tipo hacia \xE9l o sus pertenencias.</p><br/>\",\n                              \"<b>1.Espacio poco seguro</b>\",\n                              \"<p>Reconoce la vivienda como un entorno cedido, no tiene control sobre la habitaci\xF3n. Se siente seguro estando dentro de la habitaci\xF3n, pero no siente que sus pertenencias est\xE9n seguras.</p><br/>\",\n                              \"<b>2.Espacio seguro</b>\",\n                              \"<p>Reconoce la vivienda y la habitaci\xF3n como un espacio donde no ser juzgado ni atacado. Tiene una percepci\xF3n de seguridad tanto cuando est\xE1 en la vivienda, como cuando est\xE1 fuera de ella. Reconoce que puede decidir sobre la vivienda</p><br/>\",\n                              \"<b>3.Espacio propio</b>\",\n                              \"<p>Ha hecho de la habitaci\xF3n y la vivienda un espacio propio, lo ha personalizado de alguna manera. Se siente seguro al abandonarla y al volver tiene un espacio que considera \xEDntimo.</p>\",\n                              \"</div></div>\"]",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 14
    {
      form_id: 2,
      question_text: 'Seleccione la opcion según el resultado:',
      question_type: 'multiple',
      question_options: '["Sin sentido de pertenencia","Bajo sentido de pertenencia","Moderado sentido de pertenencia","Alto sentido de pertenencia"]',
      question_width: 12,
      question_group: "SENTIDO DE PERTENENCIA - VALORACIÓN PROFESIONAL",
      question_subtitle: "",
      question_instruccions: "[\"<p><button class='btn btn-success' type='button' data-toggle='collapse' data-target='#socializaci\xF3nAcordeon' aria-expanded='false' aria-controls='socializaci\xF3nAcordeon'>Instrucciones</button></p>\",\n                              \"<div class='collapse' id='socializaci\xF3nAcordeon'>\",\n                              \"<div class='card card-body'>\",\n                              \"<div class='customGreen p-3 rounded'>\",\n                              \"<h5><b>Valoraci\xF3n profesional</b></h5>\",\n                              \"<h5>En base a los siguientes \xEDtems escoge una de las dimensiones que mejor se ajusta a la valoraci\xF3n sobre el/la participante</h5>\",\n                              \"</div>\",\n                              \"<ul class='list-group'>\",\n                              \"<li class='list-group-item'><b>Reconoce recursos en su entorno, barrio, distrito y accede a ellos habitualmente (tiendas de alimentaci\xF3n, puntos de conexi\xF3n, etc.)</b></li>\",\n                              \"<li class='list-group-item'><b>Dispone de referencias vecinales, personas reconocibles en su entorno con las que interact\xFAa en su d\xEDa a d\xEDa aunque solamente sea en situaciones cotidianas</b></li>\",\n                              \"<li class='list-group-item'><b>Se refiere en t\xE9rminos netos positivos a su estancia en el lugar en el que vive reconociendo esa casa como un lugar que ha hecho suyo, y con signos f\xEDsicos reales (decora la habitaci\xF3n, introduce normas propias en la convivencia\u2026)</b></li>\",\n                              \"<li class='list-group-item'><b>No muestra grandes conflictos de convivencia o si lo hace muestra herramientas de gesti\xF3n de dichos conflictos y los ubica en t\xE9rminos de normalidad dom\xE9stica</b></li>\",\n                              \"</ul>\",\n                              \"<b/><h6><u>Apuntar el valor num\xE9rico</u></h6><b/>\",\n                              \"<b>0.Sin sentido de pertenencia</b>\",\n                              \"<p>El/la joven asume su alojamiento en t\xE9rminos de colectividad y temporalidad reconociendo que es solamente una herramienta ante la falta de alternativa.</p><br/>\",\n                              \"<b>1.Bajo sentido de pertenencia</b>\",\n                              \"<p>El/la joven requiere de apoyos externos e institucionales para participar en el contexto territorial de su vivienda.</p><br/>\",\n                              \"<b>2.Moderado sentido de pertenencia</b>\",\n                              \"<p>El/la joven siente su vivienda como lugar de referencia, pero participa escasamente en su entorno.</p><br/>\",\n                              \"<b>3.Alto sentido de pertenencia</b>\",\n                              \"<p>En general, el/la joven siente el lugar en el que vive inserto en un contexto del que se siente parte.</p>\",\n                              \"</div></div>\"]",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 15
    {
      form_id: 2,
      question_text: 'Seleccione la opcion según el resultado:',
      question_type: 'multiple',
      question_options: '["Sin garantía de ingresos","Garantía de ingresos baja","Garantía de ingresos moderada","Garantía de ingresos alta"]',
      question_width: 12,
      question_group: "GARANTIA DE INGRESOS - VALORACIÓN PROFESIONAL",
      question_subtitle: "",
      question_instruccions: "[\"<p><button class='btn btn-success' type='button' data-toggle='collapse' data-target='#socializaci\xF3nAcordeon' aria-expanded='false' aria-controls='socializaci\xF3nAcordeon'>Instrucciones</button></p>\",\n                              \"<div class='collapse' id='socializaci\xF3nAcordeon'>\",\n                              \"<div class='card card-body'>\",\n                              \"<div class='customGreen p-3 rounded'>\",\n                              \"<h5><b>Valoraci\xF3n profesional</b></h5>\",\n                              \"<h5>En base a los siguientes \xEDtems escoge una de las dimensiones que mejor se ajusta a la valoraci\xF3n sobre el/la participante</h5>\",\n                              \"</div>\",\n                              \"<ul class='list-group'>\",\n                              \"<li class='list-group-item'><b>Tiene acceso a ingresos provenientes de prestaciones sociales o an\xE1logas.</b></li>\",\n                              \"</ul>\",\n                              \"<b/><h6><u>Apuntar el valor num\xE9rico</u></h6><b/>\",\n                              \"<b>0.Sin garant\xEDa de ingresos</b>\",\n                              \"<p>Situaci\xF3n irregular y/o que no da derecho a prestaciones.</p><br/>\",\n                              \"<b>1.Garant\xEDa de ingresos baja</b>\",\n                              \"<p>El/la joven tiene derecho para solicitar ayudas de emergencia puntuales.</p><br/>\",\n                              \"<b>2.Garant\xEDa de ingresos moderada</b>\",\n                              \"<p>El joven tiene derecho o percibe ayudas de inserci\xF3n de forma regular.</p><br/>\",\n                              \"<b>3.Garant\xEDa de ingresos alta</b>\",\n                              \"<p>El joven tiene derecho a ayudas de car\xE1cter contributivo.</p>\",\n                              \"</div></div>\"]",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 16
    {
      form_id: 2,
      question_text: '1.Me siento identificado/a con mi comunidad/barrio.',
      question_type: 'multiple',
      question_options: '["Muy en desacuerdo","En desacuerdo","De acuerdo","Muy de acuerdo"]',
      question_width: 12,
      question_group: "ACCESO A SERVICIOS EN LA COMUNIDAD Y APOYO COMUNITARIO - AUTOVALORACIÓN",
      question_subtitle: "Preguntas en relación al barrio",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '2.Mis opiniones son bien recibidas en mi barrio o mi comunidad',
      question_type: 'multiple',
      question_options: '["Muy en desacuerdo","En desacuerdo","De acuerdo","Muy de acuerdo"]',
      question_width: 12,
      question_group: "ACCESO A SERVICIOS EN LA COMUNIDAD Y APOYO COMUNITARIO - AUTOVALORACIÓN",
      question_subtitle: "Preguntas en relación al barrio",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '3.Siento el barrio como algo mío.',
      question_type: 'multiple',
      question_options: '["Muy en desacuerdo","En desacuerdo","De acuerdo","Muy de acuerdo"]',
      question_width: 12,
      question_group: "ACCESO A SERVICIOS EN LA COMUNIDAD Y APOYO COMUNITARIO - AUTOVALORACIÓN",
      question_subtitle: "Preguntas en relación al barrio",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '4.Colaboro en las organizaciones y asociaciones de mi comunidad.',
      question_type: 'multiple',
      question_options: '["Muy en desacuerdo","En desacuerdo","De acuerdo","Muy de acuerdo"]',
      question_width: 12,
      question_group: "ACCESO A SERVICIOS EN LA COMUNIDAD Y APOYO COMUNITARIO - AUTOVALORACIÓN",
      question_subtitle: "Preguntas en relación al barrio",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '5.Participo en actividades sociales de mi barrio.',
      question_type: 'multiple',
      question_options: '["Muy en desacuerdo","En desacuerdo","De acuerdo","Muy de acuerdo"]',
      question_width: 12,
      question_group: "ACCESO A SERVICIOS EN LA COMUNIDAD Y APOYO COMUNITARIO - AUTOVALORACIÓN",
      question_subtitle: "Preguntas en relación al barrio",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '6.Participo en algún grupo social o cívico.',
      question_type: 'multiple',
      question_options: '["Muy en desacuerdo","En desacuerdo","De acuerdo","Muy de acuerdo"]',
      question_width: 12,
      question_group: "ACCESO A SERVICIOS EN LA COMUNIDAD Y APOYO COMUNITARIO - AUTOVALORACIÓN",
      question_subtitle: "Preguntas en relación al barrio",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '7.Acudo a las llamadas de apoyo que se hacen dentro de mi comunidad.',
      question_type: 'multiple',
      question_options: '["Muy en desacuerdo","En desacuerdo","De acuerdo","Muy de acuerdo"]',
      question_width: 12,
      question_group: "ACCESO A SERVICIOS EN LA COMUNIDAD Y APOYO COMUNITARIO - AUTOVALORACIÓN",
      question_subtitle: "Preguntas en relación al barrio",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '8.Si tuviera problemas (personales, familiares, etc.) podría encontrar personas en estas organizaciones que me ayudarían a resolverlos.',
      question_type: 'multiple',
      question_options: '["Muy en desacuerdo","En desacuerdo","De acuerdo","Muy de acuerdo"]',
      question_width: 12,
      question_group: "ACCESO A SERVICIOS EN LA COMUNIDAD Y APOYO COMUNITARIO - AUTOVALORACIÓN",
      question_subtitle: "Preguntas en relación a los recursos de la zona",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '9.Estas organizaciones y servicios son una importante fuente de apoyo.',
      question_type: 'multiple',
      question_options: '["Muy en desacuerdo","En desacuerdo","De acuerdo","Muy de acuerdo"]',
      question_width: 12,
      question_group: "ACCESO A SERVICIOS EN LA COMUNIDAD Y APOYO COMUNITARIO - AUTOVALORACIÓN",
      question_subtitle: "Preguntas en relación a los recursos de la zona",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '10.En caso de necesidad acudiría a estas organizaciones',
      question_type: 'multiple',
      question_options: '["Muy en desacuerdo","En desacuerdo","De acuerdo","Muy de acuerdo"]',
      question_width: 12,
      question_group: "ACCESO A SERVICIOS EN LA COMUNIDAD Y APOYO COMUNITARIO - AUTOVALORACIÓN",
      question_subtitle: "Preguntas en relación a los recursos de la zona",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 17
    {
      form_id: 2,
      question_text: 'Seleccione la opcion según el resultado:',
      question_type: 'multiple',
      question_options: '["Sin uso de redes sociales","Uso pasivo de redes sociales para entretenimiento","Uso activo de las redes, pero en el plano del entretenimiento","Uso activo y vinculado a un proceso de emancipación"]',
      question_width: 12,
      question_group: "PARTICIPACIÓN EN REDES SOCIALES DIGITALES - VALORACIÓN PROFESIONAL",
      question_subtitle: "",
      question_instruccions: "[\"<p><button class='btn btn-success' type='button' data-toggle='collapse' data-target='#socializaci\xF3nAcordeon' aria-expanded='false' aria-controls='socializaci\xF3nAcordeon'>Instrucciones</button></p>\",\n                              \"<div class='collapse' id='socializaci\xF3nAcordeon'>\",\n                              \"<div class='card card-body'>\",\n                              \"<div class='customGreen p-3 rounded'>\",\n                              \"<h5><b>Valoraci\xF3n profesional</b></h5>\",\n                              \"<h5>En base a los siguientes \xEDtems escoge una de las dimensiones que mejor se ajusta a la valoraci\xF3n sobre el/la participante</h5>\",\n                              \"</div>\",\n                              \"<ul class='list-group'>\",\n                              \"<li class='list-group-item'><b> Realiza un uso activo y diverso de las redes sociales, tiene perfil activo en varias,interact\xFAa habitualmente.</b></li>\",\n                              \"<li class='list-group-item'><b>El uso que realiza de las redes sociales no consume todo su tiempo e impide la generaci\xF3n de relaciones, sino que acompa\xF1a su proceso de emancipaci\xF3n</b></li>\",\n                              \"<li class='list-group-item'><b>Utiliza con varios fines las redes sociales: b\xFAsqueda de trabajo, recursos de ocio comunitario.</b></li>\",\n                              \"</ul>\",\n                              \"<b/><h6><u>Apuntar el valor num\xE9rico</u></h6><b/>\",\n                              \"<b>0.Sin uso de redes sociales</b>\",\n                              \"<p>El/la joven no tiene redes sociales y habitualmente no usa internet</p><br/>\",\n                              \"<b>1.Uso pasivo de redes sociales para entretenimiento</b>\",\n                              \"<p>El/la joven tiene redes sociales, pero las usa sobretodo para pasar el tiempo sin interactuar o de manera pasiva (escuchar m\xFAsica, ver videos...)</p><br/>\",\n                              \"<b>2.Uso activo de las redes, pero en el plano del entretenimiento</b>\",\n                              \"<p>Tiene redes sociales, las utiliza de forma activa generando contenido e interactuando con terceros, pero en el plano del mero entretenimiento</p><br/>\",\n                              \"<b>3.Uso activo y vinculado a un proceso de emancipaci\xF3n</b>\",\n                              \"<p>El/la joven utiliza activamente las redes sociales para mostrar mi opini\xF3n, relacionarme y encontrar personas de referencia, encontrar trabajo, buscar recursos</p>\",\n                              \"</div></div>\"]",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 18
    {
      form_id: 2,
      question_text: 'Seleccione la opcion según el resultado:',
      question_type: 'multiple',
      question_options: '["Poca gestión del ocio","Limitada gestión del ocio","Moderada Gestión del ocio","Buena gestión del ocio"]',
      question_width: 12,
      question_group: "OCIO - VALORACIÓN PROFESIONAL",
      question_subtitle: "",
      question_instruccions: "[\"<p><button class='btn btn-success' type='button' data-toggle='collapse' data-target='#socializaci\xF3nAcordeon' aria-expanded='false' aria-controls='socializaci\xF3nAcordeon'>Instrucciones</button></p>\",\n                              \"<div class='collapse' id='socializaci\xF3nAcordeon'>\",\n                              \"<div class='card card-body'>\",\n                              \"<div class='customGreen p-3 rounded'>\",\n                              \"<h5><b>Valoraci\xF3n profesional</b></h5>\",\n                              \"<h5>En base a los siguientes \xEDtems escoge una de las dimensiones que mejor se ajusta a la valoraci\xF3n sobre el/la participante</h5>\",\n                              \"</div>\",\n                              \"<ul class='list-group'>\",\n                              \"<li class='list-group-item'><b>Realiza alguna actividad de ocio/ cultural, tanto de forma individual como colectiva.</b></li>\",\n                              \"<li class='list-group-item'><b> Sabe c\xF3mo y d\xF3nde buscar diferentes opciones de ocio.</b></li>\",\n                              \"<li class='list-group-item'><b>Siente satisfacci\xF3n al realizar actividades de ocio, tanto grupal como colectivo.</b></li>\",\n                              \"</ul>\",\n                              \"<b/><h6><u>Apuntar el valor num\xE9rico</u></h6><b/>\",\n                              \"<b>0.Poca gesti\xF3n del ocio</b>\",\n                              \"<p>El/la joven no realiza ninguna actividad, ni muestra ning\xFAn inter\xE9s ni satisfacci\xF3n en realizarlas.</p><br/>\",\n                              \"<b>1.Limitada gesti\xF3n del ocio</b>\",\n                              \"<p>El/la joven tiene dificultades para la realizaci\xF3n de actividades de forma aut\xF3noma, y se limita a las actividades dirigidas</p><br/>\",\n                              \"<b>2.Moderada Gesti\xF3n del ocio</b>\",\n                              \"<p>El/la joven muestra inter\xE9s y satisfacci\xF3n por las actividades de ocio, pero necesita apoyos externos puntuales para su b\xFAsqueda.\u202F\u202F</p><br/>\",\n                              \"<b>3.Buena gesti\xF3n del ocio</b>\",\n                              \"<p>El/ la joven realiza actividades de ocio de manera aut\xF3noma, gener\xE1ndole bienestar</p>\",\n                              \"</div></div>\"]",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 19
    {
      form_id: 2,
      question_text: '1.¿Cuántas personas son tan cercanas a ti que podrías contar con ellas si tuvieras problemas serios?',
      question_type: 'multiple',
      question_options: '["Ninguna","Una o dos personas","De tres a cinco personas","Seis personas o más"]',
      question_width: 12,
      question_group: "APOYO SOCIAL (REDES NATURALES) - AUTOVALORACIÓN",
      question_subtitle: "",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '2.¿Cuánto interés muestra la gente de tu entorno por aquello que te pasa o haces?',
      question_type: 'multiple',
      question_options: '["Ningún interés","Poco interés","Bastante interés","Mucho interés"]',
      question_width: 12,
      question_group: "APOYO SOCIAL (REDES NATURALES) - AUTOVALORACIÓN",
      question_subtitle: "",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '3.¿Cómo de fácil te resultaría obtener ayuda de las personas de tu entorno si llegaras a necesitarla?',
      question_type: 'multiple',
      question_options: '["Muy difícil","Difícil","Fácil","Muy fácil"]',
      question_width: 12,
      question_group: "APOYO SOCIAL (REDES NATURALES) - AUTOVALORACIÓN",
      question_subtitle: "",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '4.¿A quién acudes cuando tienes un problema personal?',
      question_type: 'multiple',
      question_options: '["Familia","Amistades""Profesionales de este recurso o entidad","Profesionales de otras entidades o recursos","Profesionales de servicios sociales públicos","Referente espiritual (Cura, monja, Imán, etc.)","Profesionales sanitarios","Pareja","A nadie. No cuento con personas que me puedan ayudar"]',
      question_width: 12,
      question_group: "APOYO SOCIAL (REDES NATURALES) - AUTOVALORACIÓN",
      question_subtitle: "Entrevistador/a: no se refiere a un problema material, económico o de subsistencias.",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 20
    {
      form_id: 2,
      question_text: 'Seleccione la opcion según el resultado:',
      question_type: 'multiple',
      question_options: '["Nula capacidad de acceso a una vivienda / habitación","Baja capacidad de acceso a una vivienda / habitación","Capacidad moderada de acceso a una vivienda / habitación","Alta capacidad de acceso a una vivienda / habitación"]',
      question_width: 12,
      question_group: "POSIBILIDAD DE ACCESO A LA VIVIENDA - VALORACIÓN PROFESIONAL",
      question_subtitle: "",
      question_instruccions: "[\n        \"<p><button class='btn btn-success' type='button' data-toggle='collapse' data-target='#socializaci\xF3nAcordeon' aria-expanded='false' aria-controls='socializaci\xF3nAcordeon'>Instrucciones</button></p>\",\n        \"<div class='collapse' id='socializaci\xF3nAcordeon'>\",\n        \"<div class='card card-body'>\",\n        \"<div class='customGreen p-3 rounded'>\",\n        \"<h5><b>Valoraci\xF3n profesional</b></h5>\",\n        \"<h5>En base a los siguientes \xEDtems escoge una de las dimensiones que mejor se ajusta a la valoraci\xF3n sobre el/la participante</h5>\",\n        \"</div>\",\n        \"<ul class='list-group'>\",\n        \"<li class='list-group-item'><b>Conoce el sistema de mercado de alquiler/compra en Espa\xF1a (que es una fianza, un aval, un contrato de alquiler, hipotecas, agencias inmobiliarias, financieras\u2026)</b></li>\",\n        \"<li class='list-group-item'><b> Posee ingresos suficientes para acceder a una vivienda / habitaci\xF3n.</b></li>\",\n        \"<li class='list-group-item'><b>Es consciente y sabe gestionar la existencia de discriminaci\xF3n habitacional que puede sufrir. (Ej. Edad, Raza, Religi\xF3n, Nacionalidad, Orientaci\xF3n Sexual, Manejo del idioma,\u2026)</b></li>\",\n        \"</ul>\",\n        \"<b/><h6><u>Apuntar el valor num\xE9rico</u></h6><b/>\",\n        \"<b>0.Nula capacidad de acceso a una vivienda / habitaci\xF3n.</b>\",\n        \"<p>El joven no conoce el sistema de acceso a una vivienda / habitaci\xF3n en Espa\xF1a, as\xED como tampoco dispone de ingresos suficientes para ello. Los ejes de discriminaci\xF3n le bloquean ante el acceso a una vivienda</p><br/>\",\n        \"<b>1.Baja capacidad de acceso a una vivienda / habitaci\xF3n.</b>\",\n        \"<p>El joven no conoce bien el sistema de acceso a una vivienda y necesita apoyos para acceder al mismo a pesar de que cuenta con ingresos econ\xF3micos suficientes. Los ejes de discriminaci\xF3n le exigen una participaci\xF3n activa de apoyos institucionales</p><br/>\",\n        \"<b>2.Capacidad moderada de acceso a una vivienda / habitaci\xF3n.</b>\",\n        \"<p>El joven posee los conocimientos necesarios para acceder al sistema de vivienda, pero no dispone de ingresos suficientes para llevarlo a cabo y muestra bloqueos ante alguna de las situaciones de discriminaci\xF3n</p><br/>\",\n        \"<b>3.Alta capacidad de acceso a una vivienda / habitaci\xF3n.</b>\",\n        \"<p>El joven dispone de ingresos suficientes, ha adquirido el conocimiento para gestionar el acceso por s\xED mismo a una vivienda y tiene herramientas para gestionar sus situaciones de discriminaci\xF3n</p>\",\n        \"</div></div>\"\n      ]",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 21
    {
      form_id: 2,
      question_text: 'Seleccione la opcion según el resultado:',
      question_type: 'multiple',
      question_options: '["Mala convivencia vecinal","Problemas significativos por los cuales la convivencia no es la deseable","Problemas menores por los cuales la convivencia no es la deseable","Adecuada convivencia vecinal"]',
      question_width: 12,
      question_group: "CONVIVENCIA VECINAL - VALORACIÓN PROFESIONAL",
      question_subtitle: "",
      question_instruccions: "[\n        \"<p><button class='btn btn-success' type='button' data-toggle='collapse' data-target='#socializaci\xF3nAcordeon' aria-expanded='false' aria-controls='socializaci\xF3nAcordeon'>Instrucciones</button></p>\",\n        \"<div class='collapse' id='socializaci\xF3nAcordeon'>\",\n        \"<div class='card card-body'>\",\n        \"<div class='customGreen p-3 rounded'>\",\n        \"<h5><b>Valoraci\xF3n profesional</b></h5>\",\n        \"<h5>En base a los siguientes \xEDtems escoge una de las dimensiones que mejor se ajusta a la valoraci\xF3n sobre el/la participante</h5>\",\n        \"</div>\",\n        \"<ul class='list-group'>\",\n        \"<li class='list-group-item'><b>Tiene conocimiento de los deberes y derechos.</b></li>\",\n        \"<li class='list-group-item'><b>Tiene conocimiento y acceso a las normas de la comunidad.</b></li>\",\n        \"<li class='list-group-item'><b>Tiene conocimiento de la importancia de respetar las normas de convivencia establecidas, a trav\xE9s de estatutos, normas de r\xE9gimen interno.</b></li>\",\n        \"<li class='list-group-item'><b>Es capaz de asumir las normas para la buena convivencia.</b></li>\",\n        \"<li class='list-group-item'><b>Comprende que una mala convivencia vecinal, puede tener consecuencias negativas para s\xED mismo y para los dem\xE1s</b></li>\",\n        \"<li class='list-group-item'><b Es capaz de mostrar su disconformidad en algo que considere injusto, y sabe d\xF3nde ir y qu\xE9 hacer para expresarlo.</b></li>\",\n        \"<li class='list-group-item'><b>Participa de las actividades de la vecindad.</b></li>\",\n        \"</ul>\",\n        \"<b/><h6><u>Apuntar el valor num\xE9rico</u></h6><b/>\",\n        \"<b>0.Mala convivencia vecinal</b>\",\n        \"<p>El/la joven no acepta las normas ni las lleva a cabo. Generan conflictos. Mala convivencia con los vecinos que no genera malestar en el/la joven</p><br/>\",\n        \"<b>1.Problemas significativos por los cuales la convivencia no es la deseable</b>\",\n        \"<p>En general, el/la joven tiene dificultades para cumplir las normas. Se generan conflictos. No participa de las actividades que se proponen en la vecindad.</p><br/>\",\n        \"<b>2.Problemas menores por los cuales la convivencia no es la deseable</b>\",\n        \"<p>En general, el/la joven entiende las normas, pero en ocasiones le cuesta llevarlas a cabo.Participa de las actividades y asuntos de la vecindad.</p><br/>\",\n        \"<b>3.Adecuada convivencia vecinal</b>\",\n        \"<p>El/la joven entiende y respeta las normas de convivencia. Sus derechos y deberes. Buena relaci\xF3n con sus vecinos. Participa y propone actividades en la vecindad</p>\",\n        \"</div></div>\"\n      ]",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 22
    {
      form_id: 2,
      question_text: '1.Habitualmente, ¿dispones de acceso a internet a través de cualquier dispositivo (¿ordenador, Tablet, etc.)?',
      question_type: 'multiple',
      question_options: '["No, pero creo que eso no me complica el día a día","No, y es algo que me complica el día a día (para estar en contacto con mi familia, para buscar trabajo, hacer trámites, etc.)","Sí, pero no siempre","Sí, habitualmente"]',
      question_width: 12,
      question_group: "BRECHA DIGITAL,ACCESO Y EVALUCIÓN DE LA INFORMACIÓN  - AUTOVALORACIÓN",
      question_subtitle: "Entrevistador/a: no se refiere a un problema material, económico o de subsistencias.",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '2.¿Dispones conexión en tu teléfono móvil?',
      question_type: 'multiple',
      question_options: '["No, pero creo que no lo necesito","No, y siento que la necesito para el día a día","Sí, pero solo mediante wifi (solo cuando se engancha a una red)","Sí, con datos"]',
      question_width: 12,
      question_group: "BRECHA DIGITAL,ACCESO Y EVALUCIÓN DE LA INFORMACIÓN  - AUTOVALORACIÓN",
      question_subtitle: "",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 23
    {
      form_id: 2,
      question_text: 'Seleccione la opcion según el resultado:',
      question_type: 'multiple',
      question_options: '["Nivel A1","Nivel A2","Nivel B1","Nivel B2 o superior o lengua nativa"]',
      question_width: 12,
      question_group: "IDIOMA  - AUTOVALORACIÓN",
      question_subtitle: "",
      question_instruccions: "[\n        \"<p><button class='btn btn-success' type='button' data-toggle='collapse' data-target='#socializaci\xF3nAcordeon' aria-expanded='false' aria-controls='socializaci\xF3nAcordeon'>Instrucciones</button></p>\",\n        \"<div class='collapse' id='socializaci\xF3nAcordeon'>\",\n        \"<div class='card card-body'>\",\n        \"<div class='customGreen p-3 rounded'>\",\n        \"<h5><b>Valoraci\xF3n profesional</b></h5>\",\n        \"<h5>En base a los siguientes \xEDtems escoge una de las dimensiones que mejor se ajusta a la valoraci\xF3n sobre el/la participante</h5>\",\n        \"</div>\",\n        \"<p>Por favor, accede al siguiente enlace y realiza una prueba de nivel en base al cuestionario facilitado. El/la profesional deber\xE1 decidir el nivel de idioma a a verificar. Sugerimos que como referencia para poblaci\xF3n migrante con manifiestas barreras idiom\xE1ticas se tome como referencia en primer lugar el nivel A2.</p><br/>\",\n        \"<a href='https://www.tiatula.com/tests_nivel/' target='_blank'><button class='btn btn-success' type='button'>TiaTula - Prueba de Nivel</button></a>\",\n        \"</div></div>\"\n      ]",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 24
    {
      form_id: 2,
      question_text: '1.¿Qué situación administrativa tienes?',
      question_type: 'multiple',
      question_options: '["Permiso de trabajo","No tengo permiso de trabajo"]',
      question_width: 12,
      question_group: "INGRESOS  - PREGUNTA FILTRO",
      question_subtitle: "",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 25
    {
      form_id: 2,
      question_text: 'Seleccione la opcion según el resultado:',
      question_type: 'multiple',
      question_options: '["Sin garantía de ingresos y con empleabilidad muy baja","Garantía de ingresos y  empleabilidad baja","Garantía de ingresos y empleabilidad moderada","Garantía de ingresos y empleabilidad alta",]',
      question_width: 12,
      question_group: "EMPLEABILIDAD  - VALORACIÓN PROFESIONAL",
      question_subtitle: "",
      question_instruccions: "[\n        \"<p><button class='btn btn-success' type='button' data-toggle='collapse' data-target='#empleabilidadAcordeon' aria-expanded='false' aria-controls='empleabilidadAcordeon'>Instrucciones</button></p>\",\n        \"<div class='collapse' id='empleabilidadAcordeon'>\",\n        \"<div class='card card-body'>\",\n        \"<div class='customGreen p-3 rounded'>\",\n        \"<h5><b>Valoraci\xF3n profesional</b></h5>\",\n        \"<h5>En base a los siguientes \xEDtems escoge una de las dimensiones que mejor se ajusta a la valoraci\xF3n sobre el/la participante</h5>\",\n        \"</div>\",\n        \"<ul class='list-group'>\",\n        \"<li class='list-group-item'><b>Tiene adquiridas las competencias laborales suficientes que le permiten buscar y encontrar empleo.</b></li>\",\n        \"<li class='list-group-item'><b>Tiene experiencia laboral suficiente para demostrar su competencia laboral en uno o m\xE1s \xE1mbitos.</b></li>\",\n        \"</ul>\",\n        \"<b/><h6><u>Apuntar el valor num\xE9rico</u></h6><b/>\",\n        \"<b>0.Sin garant\xEDa de ingresos y con empleabilidad muy baja</b>\",\n        \"<p>El/la joven no tiene competencias para la b\xFAsqueda de empleo</p><br/>\",\n        \"<b>1.Garant\xEDa de ingresos y  empleabilidad baja</b>\",\n        \"<p>El/la joven tiene pocas competencias para la b\xFAsqueda de empleo y necesita apoyos externos constantes</p><br/>\",\n        \"<b>2.Garant\xEDa de ingresos y empleabilidad moderada</b>\",\n        \"<p>E/la joven tiene competencias para la b\xFAsqueda de empleo, pero necesita apoyos externos puntuales</p><br/>\",\n        \"<b>3.Garant\xEDa de ingresos y empleabilidad alta</b>\",\n        \"<p>El/la joven tiene experiencia en contextos de trabajo y ha desarrollado las competencias necesarias para la b\xFAsqueda y mantenimiento de empleos futuros de manera aut\xF3noma</p>\",\n        \"</div></div>\"\n      ]",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: 'Seleccione la opcion según el resultado:',
      question_type: 'multiple',
      question_options: '["Sin garantía de ingresos y con empleabilidad muy baja","Garantía de ingresos y  empleabilidad baja","Garantía de ingresos y empleabilidad moderada","Garantía de ingresos y empleabilidad alta"]',
      question_width: 12,
      question_group: "EMPLEABILIDAD  - VALORACIÓN PROFESIONAL",
      question_subtitle: "",
      question_instruccions: "[\n        \"<b/><h6><u>Eje 0, personas en situaci\xF3n irregular</u></h6><b/>\",\n        \"<b>0.Sin garant\xEDa de ingresos y con empleabilidad muy baja</b>\",\n        \"<p>El/la joven no tiene competencias para la b\xFAsqueda de empleo y el acceso al mercado irregular.</p><br/>\",\n        \"<b>1.Garant\xEDa de ingresos y empleabilidad baja</b>\",\n        \"<p>El/la joven tiene pocas competencias para la b\xFAsqueda de empleo y necesita apoyos externos constantes para tener acceso al mercado irregular</p><br/>\",\n        \"<b>2.Garant\xEDa de ingresos y empleabilidad moderada</b>\",\n        \"<p>El/la joven tiene competencias para la b\xFAsqueda de empleo y acceso al mercado irregular, pero necesita apoyos externos puntuales</p><br/>\",\n        \"<b>3.Garant\xEDa de ingresos y empleabilidad alta</b>\",\n        \"<p>El/la joven tiene experiencia en contextos de trabajo y ha desarrollado las competencias y contactos necesarios para la b\xFAsqueda y mantenimiento de empleos en el mercado irregular.</p>\"\n      ]",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 26
    {
      form_id: 2,
      question_text: 'Seleccione la opcion según el resultado:',
      question_type: 'multiple',
      question_options: '["Aprendizaje sin interés","Aprendizaje que requiere apoyos","Aprendizaje autónomo desorganizado","Aprendizaje eficaz y autónomo desorganizado"]',
      question_width: 12,
      question_group: "DESTREZAS FORMATIVAS  - VALORACIÓN PROFESIONAL",
      question_subtitle: "",
      question_instruccions: "[\n        \"<p><button class='btn btn-success' type='button' data-toggle='collapse' data-target='#socializaci\xF3nAcordeon' aria-expanded='false' aria-controls='socializaci\xF3nAcordeon'>Instrucciones</button></p>\",\n        \"<div class='collapse' id='socializaci\xF3nAcordeon'>\",\n        \"<div class='card card-body'>\",\n        \"<div class='customGreen p-3 rounded'>\",\n        \"<h5><b>Valoraci\xF3n profesional</b></h5>\",\n        \"<h5>En base a los siguientes \xEDtems escoge una de las dimensiones que mejor se ajusta a la valoraci\xF3n sobre el/la participante</h5>\",\n        \"</div>\",\n        \"<ul class='list-group'>\",\n        \"<li class='list-group-item'><b>Tiene consciencia de sus conocimientos y de c\xF3mo es su proceso de aprendizaje</b></li>\",\n        \"<li class='list-group-item'><b>Organiza y planifica sus actividades y tareas que le llevan al aprendizaje</b></li>\",\n        \"<li class='list-group-item'><b>Acepta sus errores y mantiene el esfuerzo y persiste en el aprendizaje</b></li>\",\n        \"<li class='list-group-item'><b>Se apoya en experiencias vitales y de aprendizaje previas para aplicar los nuevos conocimientos y capacidades en otros contextos</b></li>\",\n        \"<li class='list-group-item'><b>Experimenta placer al resolver o descubrir algo que antes no comprend\xEDa</b></li>\",\n        \"</ul>\",\n        \"<b/><h6><u>Apuntar el valor num\xE9rico</u></h6><b/>\",\n        \"<b>0.Aprendizaje sin inter\xE9s</b>\",\n        \"<p>El/la joven desconoce qu\xE9 procesos entran en juego en su propio aprendizaje y tiene dificultad para organizar las tareas y los tiempos necesarios para aprender. Siente frustraci\xF3n ante sus errores y escaso inter\xE9s por descubrir cosas nuevas.</p><br/>\",\n        \"<b>1.Aprendizaje que requiere apoyos</b>\",\n        \"<p>El/la joven desconoce qu\xE9 procesos entran en juego en su propio aprendizaje, aunque tiene inter\xE9s por descubrir y comprender cosas nuevas. Necesita apoyos para organizar las tareas y los tiempos necesarios para aprender y/o persistir ante los errores.</p><br/>\",\n        \"<b>2.Aprendizaje aut\xF3nomo desorganizado</b>\",\n        \"<p>El/la joven tiene consciencia de su forma de aprender y se apoya en experiencias y aprendizajes previos para seguir aprendiendo. Disfruta resolviendo problemas, pero se frustra ante los errores y no organiza su aprendizaje</p><br/>\",\n        \"<b>3.Aprendizaje eficaz y aut\xF3nomo</b>\",\n        \"<p>El/la joven tiene conciencia de c\xF3mo aprende y organiza tiempos y tareas para alcanzar sus metas de aprendizaje, aprovechando sus aprendizajes y experiencias previas. Persevera ante los errores y tiene motivaci\xF3n por descubrir cosas nuevas</p>\",\n        \"</div></div>\"\n      ]",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 27
    {
      form_id: 2,
      question_text: 'Seleccione la opcion según el resultado:',
      question_type: 'multiple',
      question_options: '["Nulo conocimiento y manejo del entono","Bajo conocimiento y manejo del entorno","Moderada conocimiento y manejo del entorno","Alta conocimiento y manejo del entorno"]',
      question_width: 12,
      question_group: "MOVILIDAD  - VALORACIÓN PROFESIONAL",
      question_subtitle: "",
      question_instruccions: "[\n        \"<p><button class='btn btn-success' type='button' data-toggle='collapse' data-target='#socializaci\xF3nAcordeon' aria-expanded='false' aria-controls='socializaci\xF3nAcordeon'>Instrucciones</button></p>\",\n        \"<div class='collapse' id='socializaci\xF3nAcordeon'>\",\n        \"<div class='card card-body'>\",\n        \"<div class='customGreen p-3 rounded'>\",\n        \"<h5><b>Valoraci\xF3n profesional</b></h5>\",\n        \"<h5>En base a los siguientes \xEDtems escoge una de las dimensiones que mejor se ajusta a la valoraci\xF3n sobre el/la participante</h5>\",\n        \"</div>\",\n        \"<ul class='list-group'>\",\n        \"<li class='list-group-item'><b>Conoce los distintos medios de transporte y sabe c\xF3mo usarlos.</b></li>\",\n        \"<li class='list-group-item'><b>Es capaz de planificar un itinerario valorando las diferentes alternativas.</b></li>\",\n        \"<li class='list-group-item'><b>Es capaz de informarse y estimar el tiempo que le conlleva un itinerario y los posibles contratiempos que le puedan surgir.</b></li>\",\n        \"<li class='list-group-item'><b>Conoce las diferentes herramientas y aplicaciones que le permiten planificar un itinerario.</b></li>\",\n        \"<li class='list-group-item'><b>Es capaz de solventar los diferentes contratiempos que le pudieran surgir en el viaje.</b></li>\",\n        \"</ul>\",\n        \"<b/><h6><u>Apuntar el valor num\xE9rico</u></h6><b/>\",\n        \"<b>0.Nulo conocimiento y manejo del entono.</b>\",\n        \"<p>No conoce las maneras de planificar un itinerario y no es capaz de estimar el tiempo de trayecto, ni siquiera con apoyos. No es capaz de solventar por s\xED s\xF3lo las dificultades que le pudieran surgir en el trayecto.</p><br/>\",\n        \"<b>1.Bajo conocimiento y manejo del entorno.</b>\",\n        \"<p>Necesita apoyo para planificar itinerarios, as\xED como para solventar las dificultades que le pudieran surgir en el trayecto.</p><br/>\",\n        \"<b>2.Moderada conocimiento y manejo del entorno.</b>\",\n        \"<p>Conoce las maneras de planificar un itinerario y estimar el tiempo, pero le cuesta solventar las dificultades que le pudieran surgir en el trayecto.</p><br/>\",\n        \"<b>3.Alta conocimiento y manejo del entorno.</b>\",\n        \"<p>Conoce las maneras de planificar un itinerario y estimar el tiempo y es capaz de solventar las dificultades que le pudieran surgir en el trayecto.</p>\",\n        \"</div></div>\"\n      ]",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 28
    {
      form_id: 2,
      question_text: 'Seleccione la opcion según el resultado:',
      question_type: 'multiple',
      question_options: '["Nula capacidad de gestión económica personal","Baja capacidad de gestión económica personal","Moderada capacidad de gestión económica personal","Alta capacidad de gestión económica personal"]',
      question_width: 12,
      question_group: "GESTIÓN ENCONÓMICA PERSONAL  - VALORACIÓN PROFESIONAL",
      question_subtitle: "",
      question_instruccions: "[\n        \"<p><button class='btn btn-success' type='button' data-toggle='collapse' data-target='#socializaci\xF3nAcordeon' aria-expanded='false' aria-controls='socializaci\xF3nAcordeon'>Instrucciones</button></p>\",\n        \"<div class='collapse' id='socializaci\xF3nAcordeon'>\",\n        \"<div class='card card-body'>\",\n        \"<div class='customGreen p-3 rounded'>\",\n        \"<h5><b>Valoraci\xF3n profesional</b></h5>\",\n        \"<h5>En base a los siguientes \xEDtems escoge una de las dimensiones que mejor se ajusta a la valoraci\xF3n sobre el/la participante</h5>\",\n        \"</div>\",\n        \"<ul class='list-group'>\",\n        \"<li class='list-group-item'><b>Es capaz de realizar una correcta gesti\xF3n de su dinero. (presupuesto mensual, ahorro, equilibrio financiero, econom\xEDa dom\xE9stica, \u2026)</b></li>\",\n        \"<li class='list-group-item'><b>Es capaz de prever los imprevistos econ\xF3micos que pudieran surgir. (Capacidad de planificar gastos futuros: econom\xEDa dom\xE9stica, ahorro energ\xE9tico)</b></li>\",\n        \"<li class='list-group-item'><b>Conoce las diferentes posibilidades que le permiten sufragar un imprevisto o una compra que conlleve financiaci\xF3n de manera adecuada sin hacer uso de productos financieros abusivos.</b></li>\",\n        \"</ul>\",\n        \"<b/><h6><u>Apuntar el valor num\xE9rico</u></h6><b/>\",\n        \"<b>0.Nula capacidad de gesti\xF3n econ\xF3mica personal.</b>\",\n        \"<p>No es capaz de realizar una correcta gesti\xF3n del dinero, as\xED como de planificar gastos futuros, adem\xE1s de no plantear alternativas para la mejora de su situaci\xF3n</p><br/>\",\n        \"<b>1.Baja capacidad de gesti\xF3n econ\xF3mica personal.</b>\",\n        \"<p>Requiere de alg\xFAn apoyo para la correcta gesti\xF3n de sus ingresos, y no planifica ni prev\xE9 gastos futuros e imprevistos</p><br/>\",\n        \"<b>2.Moderada capacidad de gesti\xF3n econ\xF3mica personal.</b>\",\n        \"<p>Es capaz de hacer una correcta gesti\xF3n de su dinero y planificar su presupuesto, pero no es capaza de prever gastos futuros y realizar una \xF3ptima econom\xEDa dom\xE9stica.</p><br/>\",\n        \"<b>3.Alta capacidad de gesti\xF3n econ\xF3mica personal.</b>\",\n        \"<p>Es capaz de hacer una correcta gesti\xF3n de su dinero y planificar su presupuesto, as\xED como prever gastos futuros y realizar una \xF3ptima econom\xEDa dom\xE9stica.</p>\",\n        \"</div></div>\"\n      ]",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 29
    {
      form_id: 2,
      question_text: 'Seleccione la opcion según el resultado:',
      question_type: 'multiple',
      question_options: '["Dependencia en la interacción con las administraciones","Baja autonomía","Moderada autonomía","Alta autonomía"]',
      question_width: 12,
      question_group: "AUTONOMÍA EN LA INTERACCIÓN CON LAS ADMINISTRACIONES  - VALORACIÓN PROFESIONAL",
      question_subtitle: "",
      question_instruccions: "[\n        \"<p><button class='btn btn-success' type='button' data-toggle='collapse' data-target='#socializaci\xF3nAcordeon' aria-expanded='false' aria-controls='socializaci\xF3nAcordeon'>Instrucciones</button></p>\",\n        \"<div class='collapse' id='socializaci\xF3nAcordeon'>\",\n        \"<div class='card card-body'>\",\n        \"<div class='customGreen p-3 rounded'>\",\n        \"<h5><b>Valoraci\xF3n profesional</b></h5>\",\n        \"<h5>En base a los siguientes \xEDtems escoge una de las dimensiones que mejor se ajusta a la valoraci\xF3n sobre el/la participante</h5>\",\n        \"</div>\",\n        \"<ul class='list-group'>\",\n        \"<li class='list-group-item'><b>Sabe cumplimentar documentos relativos a sus necesidades administrativas</b></li>\",\n        \"<li class='list-group-item'><b>El joven conoce los organismos administrativos a los que dirigirse ante sus necesidades</b></li>\",\n        \"<li class='list-group-item'><b>Es capaz de planificar sus necesidades administrativas (renovaci\xF3n padr\xF3n, PRT, declaraci\xF3n de la renta, renovaci\xF3n REMI, alta/baja y modificaci\xF3n de expedientes formativas, lectura y planificaci\xF3n de citaciones y requerimientos con procedimientos de protecci\xF3n internacional, entrevistas de trabajo, alta seguridad social, solicitud de certificados, servicios destinados a mujeres\u2026)</b></li>\",\n        \"<li class='list-group-item'><b>Se comunica y relaciona adecuadamente con las administraciones y en el desarrollo de sus gestiones</b></li>\",\n        \"<li class='list-group-item'><b>Conoce a qu\xE9 recursos especializados acudir y acude a ellos cuando siente que ha sido/est\xE1 siendo v\xEDctima de violencia de g\xE9nero</b></li>\",\n        \"</ul>\",\n        \"<b/><h6><u>Apuntar el valor num\xE9rico</u></h6><b/>\",\n        \"<b>0.Dependencia en la interacci\xF3n con las administraciones.</b>\",\n        \"<p>El/la joven no identifica sus necesidades y desconoce la competencia de cada administraci\xF3n y maneras de relacionarse con ellas</p><br/>\",\n        \"<b>1.Baja autonom\xEDa.</b>\",\n        \"<p>El/la joven reconoce sus necesidades, pero no reconoce a lasadministraciones y no puede realizar interacci\xF3n con ellas</p><br/>\",\n        \"<b>2.Moderada autonom\xEDa.</b>\",\n        \"<p>El/la joven reconoce sus necesidades y a las administraciones competentes, pero necesita apoyos para relacionarse</p><br/>\",\n        \"<b>3.Alta autonom\xEDa.</b>\",\n        \"<p>El/la joven tiene las competencias necesarias para relacionarse con las administraciones y gestionar sus necesidades y lo hace de manera aut\xF3noma</p>\",\n        \"</div></div>\"\n      ]",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: 'Rec. Formativos,educativos',
      question_type: 'multiple',
      question_options: '["Alta Dependencia","Baja Autonomia","Autonomá Moderada","Alta Autonomía"]',
      question_width: 12,
      question_group: "AUTONOMÍA EN LA INTERACCIÓN CON LAS ADMINISTRACIONES  - VALORACIÓN PROFESIONAL",
      question_subtitle: "Especifica la situación del/la participante en la escala superior de cuatro variables en cuanto a las siguientes tipologías de recursos",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: 'Rec. sanitarios',
      question_type: 'multiple',
      question_options: '["Alta Dependencia","Baja Autonomia","Autonomá Moderada","Alta Autonomía"]',
      question_width: 12,
      question_group: "AUTONOMÍA EN LA INTERACCIÓN CON LAS ADMINISTRACIONES  - VALORACIÓN PROFESIONAL",
      question_subtitle: "Especifica la situación del/la participante en la escala superior de cuatro variables en cuanto a las siguientes tipologías de recursos",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: 'Rec. Atención social',
      question_type: 'multiple',
      question_options: '["Alta Dependencia","Baja Autonomia","Autonomá Moderada","Alta Autonomía"]',
      question_width: 12,
      question_group: "AUTONOMÍA EN LA INTERACCIÓN CON LAS ADMINISTRACIONES  - VALORACIÓN PROFESIONAL",
      question_subtitle: "Especifica la situación del/la participante en la escala superior de cuatro variables en cuanto a las siguientes tipologías de recursos",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: 'Rec. jurídicos',
      question_type: 'multiple',
      question_options: '["Alta Dependencia","Baja Autonomia","Autonomá Moderada","Alta Autonomía"]',
      question_width: 12,
      question_group: "AUTONOMÍA EN LA INTERACCIÓN CON LAS ADMINISTRACIONES  - VALORACIÓN PROFESIONAL",
      question_subtitle: "Especifica la situación del/la participante en la escala superior de cuatro variables en cuanto a las siguientes tipologías de recursos",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: 'Rec. laborales',
      question_type: 'multiple',
      question_options: '["Alta Dependencia","Baja Autonomia","Autonomá Moderada","Alta Autonomía"]',
      question_width: 12,
      question_group: "AUTONOMÍA EN LA INTERACCIÓN CON LAS ADMINISTRACIONES  - VALORACIÓN PROFESIONAL",
      question_subtitle: "Especifica la situación del/la participante en la escala superior de cuatro variables en cuanto a las siguientes tipologías de recursos",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 30
    {
      form_id: 2,
      question_text: 'Seleccione la opcion según el resultado:',
      question_type: 'multiple',
      question_options: '["Conciencia de ciudadanía dependiente de una institución","Baja conciencia de desinstitucionalización","Moderada conciencia de desinstitucionalización","Conciencia de ciudadanía vinculada a la comunidad"]',
      question_width: 12,
      question_group: "DESARROLLO DE CONCIENCIA DE DESINSTITUCIONALIZACIÓN  - VALORACIÓN PROFESIONAL",
      question_subtitle: "",
      question_instruccions: "[\n        \"<p><button class='btn btn-success' type='button' data-toggle='collapse' data-target='#socializaci\xF3nAcordeon' aria-expanded='false' aria-controls='socializaci\xF3nAcordeon'>Instrucciones</button></p>\",\n        \"<div class='collapse' id='socializaci\xF3nAcordeon'>\",\n        \"<div class='card card-body'>\",\n        \"<div class='customGreen p-3 rounded'>\",\n        \"<h5><b>Valoraci\xF3n profesional</b></h5>\",\n        \"<h5>En base a los siguientes \xEDtems escoge una de las dimensiones que mejor se ajusta a la valoraci\xF3n sobre el/la participante</h5>\",\n        \"</div>\",\n        \"<ul class='list-group'>\",\n        \"<li class='list-group-item'><b> Reconoce cauces y espacios para ejercer sus derechos, hacer propuestas sobre ellos a distintos niveles (piso, proyecto, barrio, colectivo...)</b></li>\",\n        \"<li class='list-group-item'><b>Reconoce herramientas personales que le dotan de capacidad de moverse en la comunidad (en el empleo, en la generaci\xF3n de relaciones sociales, en el desarrollo de formaciones\u2026) sin hacer referencia a la necesidad de que otros/as gu\xEDen ese proceso.</b></li>\",\n        \"<li class='list-group-item'><b> Dispone de apoyos normalizados (fuera de la red del proyecto) (grupo de iguales por elecci\xF3n propia, vivienda normalizada\u2026)</b></li>\",\n        \"<li class='list-group-item'><b> Reconoce sus limitaciones jur\xEDdicas sabiendo las consecuencias reales que eso tiene para \xE9l/ella (en el caso de tenerlas)</b></li>\",\n        \"</ul>\",\n        \"<b/><h6><u>Apuntar el valor num\xE9rico</u></h6><b/>\",\n        \"<b>0.Conciencia de ciudadan\xEDa dependiente de una instituci\xF3n.</b>\",\n        \"<p>El/la joven es dependiente de una instituci\xF3n para la participaci\xF3n comunitaria y/o para la toma de decisiones diaria</p><br/>\",\n        \"<b>1.Baja conciencia de desinstitucionalizaci\xF3n.</b>\",\n        \"<p>En general, el/la joven no ha reflexionado sobre sus herramientas personales para la participaci\xF3n en la comunidad.</p><br/>\",\n        \"<b>2.Moderada conciencia de desinstitucionalizaci\xF3n.</b>\",\n        \"<p>En general, el/la joven reconoce tener herramientas para la participaci\xF3n comunitaria, pero depende de apoyos puntuales para ejercer sus derechos</p><br/>\",\n        \"<b>3.Conciencia de ciudadan\xEDa vinculada a la comunidad.</b>\",\n        \"<p>En general, el/la joven se siente parte de una comunidad amplia y con herramientas personales que le dotan de control, participaci\xF3n y elecci\xF3n en dicha comunidad</p>\",\n        \"</div></div>\"\n      ]",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 31
    {
      form_id: 2,
      question_text: 'Seleccione la opcion según el resultado:',
      question_type: 'multiple',
      question_options: '["Me sucede MUY POCAS veces","Me sucede ALGUNAS veces","Me sucede BASTANTES veces","Me sucede MUCHAS veces"]',
      question_width: 12,
      question_group: "HABILIDADES SOCIALES  - VALORACIÓN PROFESIONAL",
      question_subtitle: "",
      question_instruccions: "[\n        \"<p><button class='btn btn-success' type='button' data-toggle='collapse' data-target='#socializaci\xF3nAcordeon' aria-expanded='false' aria-controls='socializaci\xF3nAcordeon'>Instrucciones</button></p>\",\n        \"<div class='collapse' id='socializaci\xF3nAcordeon'>\",\n        \"<div class='card card-body'>\",\n        \"<div class='customGreen p-3 rounded'>\",\n        \"<h5><b>Valoraci\xF3n profesional</b></h5>\",\n        \"<h5>(ENTREGAR TARJETA 4). Por favor, contesta las siguientes frases con la respuesta que consideres m\xE1s apropiada. </h5>\",\n        \"</div>\",\n        \"<ul class='list-group'>\",\n        \"<li class='list-group-item'><b> Prestas atenci\xF3n a la persona que te est\xE1 hablando y haces un esfuerzo para comprender lo que te est\xE1 diciendo (Escuchar)</b></li>\",\n        \"<li class='list-group-item'><b>Pides que te ayuden cuando tienes alguna dificultad (Pedir ayuda)</b></li>\",\n        \"<li class='list-group-item'><b>Eliges la mejor forma para integrarte en un grupo o para participar en una determinada actividad (Participar)</b></li>\",\n        \"<li class='list-group-item'><b>Prestas atenci\xF3n a las instrucciones, pides explicaciones y llevas adelante las instrucciones correctamente (Seguir instrucciones)</b></li>\",\n        \"<li class='list-group-item'><b>Pides disculpas a los dem\xE1s por haber hecho algo mal (Disculparse)</b></li>\",\n        \"<li class='list-group-item'><b>Intentas persuadir a los dem\xE1s de que tus ideas son mejores y que ser\xE1n de mayor utilidad que las de la otra persona (Convencer a los dem\xE1s)</b></li>\",\n        \"<li class='list-group-item'><b>Te ofreces para compartir algo que es apreciado por los dem\xE1s (Compartir algo)</b></li>\",\n        \"<li class='list-group-item'><b>Defiendes tus derechos dando a conocer a los dem\xE1s cu\xE1l es tu postura (Defender los propios derechos)</b></li>\",\n        \"<li class='list-group-item'><b>Encuentras otras formas para resolver situaciones dif\xEDciles sin tener que pelearte(Evitar peleas)</b></li>\",\n        \"</ul>\",\n        \"<b>0.Me sucede MUY POCAS veces.</b>\",\n        \"<b>1.Me sucede ALGUNAS veces.</b>\",\n        \"<b>2.Me sucede BASTANTES veces.</b>\",\n        \"<b>3.Me sucede MUCHAS veces.</b>\",\n        \"</div></div>\"\n      ]",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 32
    {
      form_id: 2,
      question_text: 'Seleccione la opcion según el resultado:',
      question_type: 'multiple',
      question_options: '["Relaciones fuertemente marcadas por la desigualdad de género","Relaciones marcadas por la desigualdad de género","Relaciones moderadamente marcadas por la desigualdad de género","Relaciones igualitarias"]',
      question_width: 12,
      question_group: "RELACIONES IGUALITARIAS  - VALORACIÓN PROFESIONAL",
      question_subtitle: "",
      question_instruccions: "[\n        \"<p><button class='btn btn-success' type='button' data-toggle='collapse' data-target='#socializaci\xF3nAcordeon' aria-expanded='false' aria-controls='socializaci\xF3nAcordeon'>Instrucciones</button></p>\",\n        \"<div class='collapse' id='socializaci\xF3nAcordeon'>\",\n        \"<div class='card card-body'>\",\n        \"<div class='customGreen p-3 rounded'>\",\n        \"<h5><b>Valoraci\xF3n profesional</b></h5>\",\n        \"<h5>En base a los siguientes \xEDtems escoge una de las dimensiones que mejor se ajusta a la valoraci\xF3n sobre el/la participante</h5>\",\n        \"</div>\",\n        \"<ul class='list-group'>\",\n        \"<li class='list-group-item'><b>Identifica prejuicios y estereotipos de g\xE9nero que condicionan como nos percibimos y nos perciben las dem\xE1s personas, los se\xF1ala y act\xFAa en la protecci\xF3n del derecho deigualdad y no discriminaci\xF3n. </b></li>\",\n        \"<li class='list-group-item'><b> Identifica los comportamientos de control como violencia de g\xE9nero y no los considera aceptables</b></li>\",\n        \"<li class='list-group-item'><b>Identifica situaciones de riesgo de violencia en las relaciones personales y act\xFAa para su evitaci\xF3n y protecci\xF3n</b></li>\",\n        \"<li class='list-group-item'><b>Espec\xEDficamente para hombres: Acepta y respeta la autoridad en la misma medida cuando procede de una mujer como cuando procede de un hombre</b></li>\",\n        \"<li class='list-group-item'><b>Espec\xEDficamente para mujeres: Sabe protegerse ante situaciones de abuso o violencia de g\xE9nero, ya sea f\xEDsica o psicol\xF3gica</b></li>\",\n        \"<li class='list-group-item'><b>Espec\xEDficamente para mujeres: Asume el protagonismo de su proyecto de vida aut\xF3noma y no lo supedita al de una pareja</b></li>\",\n        \"</ul>\",\n        \"<b/><h6><u>Apuntar el valor num\xE9rico</u></h6><b/>\",\n        \"<b>0.Relaciones fuertemente marcadas por la desigualdad de g\xE9nero</b>\",\n        \"<p>Asume que mujeres y hombres son diferentes y esa diferencia determina diferentes posiciones de poder en la sociedad de unas y otros.Mantiene relaciones con un marcado desequilibrio de poder con las personas del otro sexo, con frecuente presencia de conductas de control y/o violencia de g\xE9nero.</p><br/>\",\n        \"<b>1.Relaciones marcadas por la desigualdad de g\xE9nero.</b>\",\n        \"<p>Es consciente de que existen desigualdades de g\xE9nero en la sociedad que, en su mayor\xEDa, atribuye a diferencias en base al sexo de las personas. Es capaz de mantener relaciones respetuosas con las personas del otro sexo, aunque necesita apoyo para reconocer y actuar ante situaciones de control y desigualdad en sus relaciones personales.</p><br/>\",\n        \"<b>2.Relaciones moderadamente marcadas por la desigualdad de g\xE9nero</b>\",\n        \"<p>En general, es consciente de la existencia de desigualdades de g\xE9nero en la sociedad, y cuenta con algunos recursos para contrarrestar su influencia en sus relaciones.Mantiene relaciones respetuosas con las personas del otro sexo, aunque no siempre asume que se den en un plano de igualdad</p><br/>\",\n        \"<b>3.Relaciones igualitarias</b>\",\n        \"<p>En general, es consciente de la existencia de las desigualdades de g\xE9nero en la sociedad y dispone de recursos para contrarrestar su influencia en sus relaciones.Mantiene relaciones en plano de igualdad y respeto con las personas del otro sexo en el \xE1mbito personal, laboral y social</p>\",\n        \"</div></div>\"\n      ]",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 33
    {
      form_id: 2,
      question_text: 'Seleccione la opcion según el resultado:',
      question_type: 'multiple',
      question_options: '["Muy deficientes habilidades domésticas","Deficiencias en las habilidades domésticas","Pocas deficiencias en las habilidades domésticas","Adecuadas habilidades domésticas"]',
      question_width: 12,
      question_group: "HABILIDADES DOMÉSTICAS  - VALORACIÓN PROFESIONAL",
      question_subtitle: "",
      question_instruccions: "[\n        \"<p><button class='btn btn-success' type='button' data-toggle='collapse' data-target='#socializaci\xF3nAcordeon' aria-expanded='false' aria-controls='socializaci\xF3nAcordeon'>Instrucciones</button></p>\",\n        \"<div class='collapse' id='socializaci\xF3nAcordeon'>\",\n        \"<div class='card card-body'>\",\n        \"<div class='customGreen p-3 rounded'>\",\n        \"<h5><b>Valoraci\xF3n profesional</b></h5>\",\n        \"<h5>En base a los siguientes \xEDtems escoge una de las dimensiones que mejor se ajusta a la valoraci\xF3n sobre el/la participante</h5>\",\n        \"</div>\",\n        \"<ul class='list-group'>\",\n        \"<li class='list-group-item'><b>Sabe manejarse en la cocina y elaborar men\xFAs diversos</b></li>\",\n        \"<li class='list-group-item'><b>Sabe planificar compras de alimento e higiene</b></li>\",\n        \"<li class='list-group-item'><b>Es capaz de resolver peque\xF1os arreglos de la vivienda</b></li>\",\n        \"<li class='list-group-item'><b>Es capaz de buscar proveedores para los suministros necesarios en la vivienda</b></li>\",\n        \"<li class='list-group-item'><b>Es capaz de realizar la contrataci\xF3n de los suministros y/o servicios que necesita (luz, gas, wifi, tv, seguro vivienda\u2026)</b></li>\",\n        \"<li class='list-group-item'><b>Es capaz de mantener el orden y la limpieza adecuada en la vivienda</b></li>\",\n        \"<li class='list-group-item'><b>Cumple con una planificaci\xF3n econ\xF3mica ajustada a sus posibilidades</b></li>\",\n        \"<li class='list-group-item'><b>Sabe realizar operaciones bancarias (abrir cuenta, comprender el funcionamiento b\xE1sico de la relaci\xF3n bancaria, hacer transferencias)</b></li>\",\n        \"</ul>\",\n        \"<b/><h6><u>Apuntar el valor num\xE9rico</u></h6><b/>\",\n        \"<b>0.Muy deficientes habilidades dom\xE9sticas</b>\",\n        \"<p>El/la joven no es capaz de manejarse ni muestra experiencias previas significativas en las habilidades dom\xE9sticas. Requiere de supervisi\xF3n y apoyo permanente.</p><br/>\",\n        \"<b>1.Deficiencias en las habilidades dom\xE9sticas</b>\",\n        \"<p>El/la joven muestra inter\xE9s en el desarrollo de una autonom\xEDa dom\xE9stica, pero requiere de apoyos permanentes para el manejo ordinario.</p><br/>\",\n        \"<b>2.Pocas deficiencias en las habilidades dom\xE9sticas</b>\",\n        \"<p>El/la joven se maneja de manera aut\xF3noma y competente en la mayor parte de las dimensiones, pero requiere apoyos puntuales para alguna de las tareas dom\xE9sticas </p><br/>\",\n        \"<b>3.Adecuadas habilidades dom\xE9sticas</b>\",\n        \"<p>El/la joven se maneja de manera aut\xF3noma y competente dentro de la vivienda </p>\",\n        \"</div></div>\"\n      ]",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 34
    {
      form_id: 2,
      question_text: '1.¿En qué medida te sientes capaz de colaborar en la elaboración de las normas de convivencia de tu piso/residencia?',
      question_type: 'multiple',
      question_options: '["Nada","Poco","Bastante","Mucho"]',
      question_width: 12,
      question_group: "HABILIDADES CONVIVENCIALES  - AUTOVALORACIÓN",
      question_subtitle: "",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: '2.¿En qué grado te sientes capaz de tomar decisiones y gestionar tu día a día en tu casa/piso/residencia?',
      question_type: 'multiple',
      question_options: '["Nada","Poco","Bastante","Mucho"]',
      question_width: 12,
      question_group: "HABILIDADES CONVIVENCIALES  - AUTOVALORACIÓN",
      question_subtitle: "",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: 'He participado en la elaboración de las normas de convivencia en el piso/residencia',
      question_type: 'multiple',
      question_options: '["0. Muy insatisfecho","1. Insatisfecho","2. Satisfecho","3. Muy Satisfecho"]',
      question_width: 12,
      question_group: "HABILIDADES CONVIVENCIALES  - AUTOVALORACIÓN",
      question_subtitle: "A continuación, te voy a hacer unas de preguntas en relación con tu percepción de las normas de convivencia y el procedimiento para establecerlas. ENTREVISTADOR/A, debe puntuar de 1 (muy insatisfecho/a) a 4 (muy satisfecho/a)",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }, {
      form_id: 2,
      question_text: 'Estoy satisfecho con la forma en la que se toman de decisiones en mi piso/residencias',
      question_type: 'multiple',
      question_options: '["0. Muy insatisfecho","1. Insatisfecho","2. Satisfecho","3. Muy Satisfecho"]',
      question_width: 12,
      question_group: "HABILIDADES CONVIVENCIALES  - AUTOVALORACIÓN",
      question_subtitle: "A continuación, te voy a hacer unas de preguntas en relación con tu percepción de las normas de convivencia y el procedimiento para establecerlas. ENTREVISTADOR/A, debe puntuar de 1 (muy insatisfecho/a) a 4 (muy satisfecho/a)",
      question_instruccions: "",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    },
    //QUESTIONS TAB 35
    {
      form_id: 2,
      question_text: 'Seleccione la opcion según el resultado:',
      question_type: 'multiple',
      question_options: '["No expresa proyecto de vivienda de salida","Dependencia para formular la salida","Autonomía limitada para la gestión de vivienda de salida","Autonomía en la gestión de su vivienda de salida"]',
      question_width: 12,
      question_group: "AUTONOMÍA EN LA GESTIÓN DE LA SALIDA  - VALORACIÓN PROFESIONAL",
      question_subtitle: "",
      question_instruccions: "[\n        \"<p><button class='btn btn-success' type='button' data-toggle='collapse' data-target='#socializaci\xF3nAcordeon' aria-expanded='false' aria-controls='socializaci\xF3nAcordeon'>Instrucciones</button></p>\",\n        \"<div class='collapse' id='socializaci\xF3nAcordeon'>\",\n        \"<div class='card card-body'>\",\n        \"<div class='customGreen p-3 rounded'>\",\n        \"<h5><b>Valoraci\xF3n profesional</b></h5>\",\n        \"<h5>En base a los siguientes \xEDtems escoge una de las dimensiones que mejor se ajusta a la valoraci\xF3n sobre el/la participante</h5>\",\n        \"</div>\",\n        \"<ul class='list-group'>\",\n        \"<li class='list-group-item'><b>Conoce herramientas cotidianas para la b\xFAsqueda de vivienda normalizada y se sabr\xEDa mover con autonom\xEDa por ellas (idealista, anuncios en lugares espec\xEDficos en el barrio, vivienda p\xFAblica\u2026)</b></li>\",\n        \"<li class='list-group-item'><b>Reconoce de manera realista las opciones de vivienda de salida que tiene en base a su proceso de inclusi\xF3n y su capacidad de ingresos y sus ejes de discriminaci\xF3n</b></li>\",\n        \"<li class='list-group-item'><b> Conoce sus derechos y deberes en el proceso de alquiler, compra, etc. de vivienda</b></li>\",\n        \"<li class='list-group-item'><b>Espec\xEDfica para mujeres: Busca su independencia econ\xF3mica, sin supeditar su manutenci\xF3n a una pareja</b></li>\",\n        \"</ul>\",\n        \"<b/><h6><u>Apuntar el valor num\xE9rico</u></h6><b/>\",\n        \"<b>0.No expresa proyecto de vivienda de salida</b>\",\n        \"<p>El/la joven no identifica su proyecto de vivienda de salida.</p><br/>\",\n        \"<b>1.Dependencia para formular la salida</b>\",\n        \"<p>En general, el/la joven manifiesta necesitar apoyos externos para formular su proyecto de vivienda de salida.</p><br/>\",\n        \"<b>2.Autonom\xEDa limitada para la gesti\xF3n de vivienda de salida</b>\",\n        \"<p>En general, el/la joven conoce herramientas para la b\xFAsqueda de vivienda, pero requiere de apoyos en el proceso de alquiler, compra, etc.</p><br/>\",\n        \"<b>3.Autonom\xEDa en la gesti\xF3n de su vivienda de salida</b>\",\n        \"<p>En general, el/la joven reconoce los recursos normalizados disponibles y se desempe\xF1a de forma aut\xF3noma para buscar apoyos en su vivienda de salida.</p>\",\n        \"</div></div>\"\n      ]",
      question_createdAt: new Date(),
      question_updatedAt: new Date()
    }], {});
  },
  async down(queryInterface, _Sequelize) {
    // await queryInterface.bulkDelete('question', null, {});
  }
};