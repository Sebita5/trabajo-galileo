import Carrera from "../models/carrera";

export const index = async (req, res) => {
    const carreras = await Carrera.findAll({});
    res.json({ data: carreras.map((carrera) => carrera.toJSON()) });
};

export const show = async (req, res) => {
    const carrera = await Carrera.findByPk(req.params.id);
    if (carrera) {
        res.json({ data: carrera.toJSON() });
    } else {
        res
            .status(404)
            .json({ message: `No se encontro una carrera con id ${req.params.id}` });
    }
};



export const create = async (req, res) => {

    try {
        if (req.body.name !== undefined) {
            const carrera = await Carrera.create({ name: req.body.name });
            req.status(200).send({ id: carrera.id });
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
            const carrera = await Carrera.findByPk(req.params.id);
            carrera.name = req.body.name;
            await carrera.save();
            req.status(200).send({ id: carrera.id });
        }
        else {
            res.status(400).json('name no recibido');
        }
    } catch (err) {
        return res.status(500).send(err);
    }
};