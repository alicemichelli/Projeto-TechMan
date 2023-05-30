const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => { //OK
    const perfis = await prisma.Perfis.createMany({
        data: req.body
    })
    res.status(200).json(perfis).end();
}

const read = async(req, res) => { //OK
    let perfis = await prisma.Perfis.findMany();
    
    res.status(200).json(perfis).end();
}

module.exports = {
    create,
    read  
}