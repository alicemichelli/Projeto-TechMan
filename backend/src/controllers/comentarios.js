const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async(req, res) => { //OK
    let comentarios = await prisma.Comentarios.createMany({
        data: req.body
    });
    res.status(200).json(comentarios).end();
}

const read = async(req, res) => { //OK
    let comentarios = await prisma.Comentarios.findMany();
    res.status(200).json(comentarios).end();
}

module.exports = {
    create,
    read
}