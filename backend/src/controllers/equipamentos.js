const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => { //OK
    const equipamentos = await prisma.Equipamentos.createMany({
        data: req.body
    })
    res.status(200).json(equipamentos).end();
}

const read = async(req, res) => { //OK
    let equipamentos = await prisma.Equipamentos.findMany({
        include: {
            Comentarios: {
                include: {
                    perfis: true
                }
            }
        }
    });
    res.status(200).json(equipamentos).end();
}


const del = async (req, res) => { //OK
    await prisma.Equipamentos.delete({
        where: {
          id: Number(req.params.id)
        },
      });
      res.status(200).json("Equipamento excluído com sucesso!").end();
}

module.exports = {
    create,
    read,
    del
}