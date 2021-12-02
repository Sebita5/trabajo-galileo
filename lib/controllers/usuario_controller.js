
import Usuario from "../models/usuario";

export const index = async (req, res) => {
    const usuarios = await Usuario.findAll({});
    res.json({ data: usuarios.map((usuario) => usuario.toJSON()) });
};

export const show = async (req, res) => {
    const usuario = await Usuario.findByPk(req.params.id);
    if (usuario) {
        res.json({ data: usuario.toJSON() });
    } else {
        res
            .status(404)
            .json({ message: `No se encontro un usuario con id ${req.params.id}` });
    }
};

export const create = async (req, res) => {

    try {
        if (req.body.name !== undefined) {
            const usuario = await Usuario.create({ name: req.body.name, idRol: req.body.idRol, direccion: req.body.direccion, telefono: req.body.telefono, mail: req.body.mail });
            req.status(200).send({ id: usuario.id });
        }
        else {
            res.status(400).json('name no recibido');
        }
    } catch (err) {
        return res.status(500).send(err);
    }
};

export const update = async (req, res) => {
    try {
        if (req.body.name != undefined) {
            const usuario = await Usuario.findByPk(req.params.id);
            usuario.name = req.body.name;
            usuario.idRol = req.body.idRol;
            usuario.direccion = req.body.direccion;
            usuario.telefono = req.body.telefono;
            usuario.mail = req.body.mail;
            await usuario.save();
            req.status(200).send({ id: usuario.id });
        } else {
            res.status(400).json('name no recibido');
        }
    } catch (err) {
        return res.status(500).send(err);
    }
};

export const ListByRol = async (req, res) => {
    const usuarios = await Usuario.findAll({
        where: {
            idRol: req.params.idRol,
        },
    });
    res.json({ data: usuarios.map((usuario) => usuario.toJSON()) });
};