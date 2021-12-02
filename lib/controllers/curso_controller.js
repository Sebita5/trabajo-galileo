import Curso from "../models/curso";

export const index = async (req, res) => {
    const cursos = await Curso.findAll({});
    res.json({ data: cursos.map((curso) => curso.toJSON()) });
};

export const show = async (req, res) => {
    const curso = await Curso.findByPk(req.params.id);
    if (curso) {
        res.json({ data: curso.toJSON() });
    } else {
        res
            .status(404)
            .json({ message: `No se encontro un curso con id ${req.params.id}` });
    }
};



export const create = async (req, res) => {

    try {
        if (req.body.horario !== undefined) {
            const curso = await Curso.create({ name: req.body.horario, idMateria: req.body.idMateria, idProfesor: req.body.idProfesor });
            req.status(200).send({ id: curso.id });
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
        if (req.body.horario !== undefined) {
            const curso = await Curso.findByPk(req.params.id);
            curso.horario = req.body.horario;
            curso.idMateria = req.body.idMateria;
            curso.horario = req.body.idProfesor;
            await curso.save();
            req.status(200).send({ id: curso.id });
        }
        else {
            res.status(400).json('name no recibido');
        }
    } catch (err) {
        return res.status(500).send(err);
    }
};