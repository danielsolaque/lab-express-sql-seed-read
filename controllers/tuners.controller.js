const router = require("express").Router();
const db = require("../database/client");

//Get a list with all the reviews.
router.get("/", (req, res) => {
  return db
    .query(
      `
        SELECT * FROM tuners;
      `
    )
    .then((dbResponse) => {
      return res.json(dbResponse.rows);
    })
    .catch((error) => console.log(error));
});

//Get and individual review.
router.get("/:id", (req, res) => {
  const id = req.params.id;
  return db
    .query(
      `
        SELECT * FROM tuners WHERE id=${id};
      `
    )
    .then((dbResponseId) => {
      return res.json(dbResponseId.rows);
    })
    .catch((error) => console.log(error));
});

router.post("/", (req, res) => {
  const { name, artist, album, time, is_favorite } = req.body;

  return db
    .query(
      `
      INSERT INTO tuners(name, artist, album, time, is_favorite) 
      VALUES ('${name}', '${artist}', '${album}', '${time}', '${is_favorite}')
    `
    )
    .then(() => res.send("It was succesfully created"))
    .catch((err) => res.status(500).send(err));
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { name, artist, album, time, is_favorite } =
    req.body;

  return db
    .query(
      `
            UPDATE tuners
            SET 
              name = '${name}',
              artist = '${artist}', 
              album = '${album}',
              time =  '${time}',
              is_favorite = '${is_favorite}'
            WHERE id = ${id};
       `
    )
    .then(() => res.send("It was update sucesfully"))
    .catch((err) => console.log(err));
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  return db
    .query(
      `
        DELETE FROM tuners WHERE id=${id}
      `
    )
    .then(() => res.send("It was delete sucesfully"))
    .catch((error) => console.log(error));
});

module.exports = router;
