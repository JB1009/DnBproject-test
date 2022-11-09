const connetion = require("../dbconfig");
const movieCtrl = {
  getMovies: async (req, res) => {
    connetion.query("select * from users" , (error, rows) => {
      if (error) throw error;
      console.log(rows);
      res.send(rows);
    });
  },
};

module.exports = movieCtrl;