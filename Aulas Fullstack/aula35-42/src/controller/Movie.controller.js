const {} = require("../database/index");

Movie.init(connection);

module.exports = {
  async list(req, res) {
    try {
      const movies = await Movie.findAll();
      return res.json(movies);
    } catch (err) {
      return console.error("Erro de listagem", err);
    }
  },

  async show(req, res) {
    try {
      const movie = await Movie.findOne({
        where: {
          id: req.params.id,
        },
      });
      return res.json(movie);
    } catch (err) {
      console.log("Erro na busca", err);
      return res.status(500).json({ error: "Erro na busca" });
    }
  },

  async create(req, res) {
    try {
      const movie = await Movie.create({ title, poster, overview });
      return res.json(movie);
    } catch (err) {
      return console.error("Erro na criação", err);
    }
  },

  async update(req, res) {
    try {
      await movie.update({
        title,
        poster,
        overview,
      }),
     {where: { id: { [Op. eq]: id}}};
     return res.json({
        msg: `Filme ${title} atualizado com sucesso`,
     })
    } catch (err) {
      return res.json({
        msg: `Filme ${title} não foi atualizado`,
        err,
      });
    }
  },
  async delete(req, res) {
    try {
      await Movie.destroy({
        where: {id: req.params.id}
      }),
     {where: { id: { [Op. eq]: id}}};
     return res.json({
        msg: `Exclusão de item de ID ${req.params.id} feita com sucesso!`,
     })
    } catch (err) {
      return console.err({
        msg: `Erro na exclusão`,
        err,
      });
    }
  },
}




