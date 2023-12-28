var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var novedadesModel = require('../models/novedadesModel');
var cloudinary = require('cloudinary').v2;

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

router.get('/', async function (req, res, next) {
  novedades = await novedadesModel.getNovedades();
  novedades = novedades.splice(0, 5);
  novedades = novedades.map(novedad => {
    if (novedad.imagen) {
      const imagen1 = cloudinary.url(novedad.imagen, {
        width: 460,
        crop: 'fill'
      });
      return {
      ...novedad,
      imagen1
    }
     } else {
      return {
        ...novedad,
        imagen1: '/images/noimage.jpg'
      }
    }
  });
  res.render('index', {
    novedades
  });
});

router.post('/', async (req, res, next) => {

  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var telefono = req.body.telefono;
  var mensaje = req.body.mensaje;

  var obj = {
    to: 'sofiapombo.t@gmail.com',
    subject: 'Contacto desde la web',
    html: nombre + " " + apellido + ' quiere contactarse, nos dejó su email: ' + email + ' y su teléfono: ' + telefono + '. También nos dejó un mensaje: ' + mensaje
  }

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })

  var info = await transporter.sendMail(obj);

  res.render('index', {
    message: 'Mensaje enviado correctamente',
  });

})

module.exports = router;
