
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
            .json({ message: `No se encontro un usuario con id ${req.param.id}` });
    }
};

export const create = async (req, res) => {

    try {
        if (req.body.name !== undefined) {
            const usuario = await Usuario.create({ name: req.body.name });
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
        if (req, body, name !== undefined) {
            const usuario = await usuario.findByPk(req.params.id);
            usuario.name = req.body.name;
            await rol.save();
            req.status(200).send({ id: usuario.id });
        }
        else {
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