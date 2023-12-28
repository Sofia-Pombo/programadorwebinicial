var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;

const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

router.get('/', async function (req, res, next) {
    var novedades = await novedadesModel.getNovedades();

    novedades = novedades.map(novedad => {
        if (novedad.imagen) {
            const imagen1 = cloudinary.image(novedad.imagen, {
                width: 100,
                height: 100,
                crop: 'fill'
            });
            return {
                ...novedad,
                imagen1
            }
        } else {
            return {
                ...novedad,
                imagen1: ''
            }
        }
    });

    res.render('admin/novedades', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        novedades
        });
});

router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;

    let novedad = await novedadesModel.getNovedadById(id);
    if (novedad.imagen) {
        await (destroy(novedad.imagen));
    }
    await novedadesModel.deleteNovedadesById(id);
    res.redirect('/admin/novedades')
});

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    });
});

router.post('/agregar', async (req, res, next) => {
    try {
        var imagen = '';
        if (req.files && Object.keys(req.files).length > 0) {
            imagen1 = req.files.imagen1;
            imagen = (await uploader(imagen.tempFilePath)).public_id;
        }

        if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
            await novedadesModel.insertNovedad({
                ...req.body,
                imagen
            });
            res.redirect('/admin/novedades')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true, message: 'Todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true, message: 'No se cargó la novedad'
        });
    }
});

router.get('/editar/:id', async (req, res, next) => {
    let id = req.params.id;
    let novedad = await novedadesModel.getNovedadById(id);
    res.render('admin/editar', {
        layout: 'admin/layout',
        novedad
    });
});

router.post('/editar', async (req, res, next) => {
    try {
        let imagen = req.body.img_original;
        let borrar_img_vieja = false;
        if (req.body.img_delete === "1") {
            imagen = null;
            borrar_img_vieja = true;
        } else {
            if (req.files && Object.keys(req.files).length > 0) {
                imagen1 = req.files.imagen;
                imagen = (await
                    uploader(imagen1.tempFilePath)).public_id;
                    borrar_img_vieja = true;
            }
        }


        let obj = {
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo,
            imagen
        }
        await novedadesModel.editarNovedadById(obj, req.body.id);
        res.redirect('/admin/novedades');
    }
    catch (error) {
        console.log(error)
        res.render('admin/editar', {
            layout: 'admin/layout',
            error: true, message: 'No se modificó la novedad'
        });
    };
});


module.exports = router;