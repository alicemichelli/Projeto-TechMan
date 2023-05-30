const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => { //OK
    const usuarios = await prisma.Usuarios.createMany({
        data: req.body
    })
    res.status(200).json(usuarios).end();
}

const read = async (req, res) => { //OK
    let usuarios = await prisma.Usuarios.findMany();

    res.status(200).json(usuarios).end();
}

const login = async (req, res) => { //OK
    const usuarios = await prisma.Usuarios.findMany({
        where: {
            senha: req.body.senha
        },
        select: {
            id: true,
            id_perfil: true
        }
    })

    if (usuarios.length === 0) {
        res.status(200).json(false).end()
    } else { 
        res.status(200).json(usuarios).end() 
    }
}

module.exports = {
    read,
    create,
    login
}