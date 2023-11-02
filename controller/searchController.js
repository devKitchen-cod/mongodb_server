
module.exports.searchAirport = async function (req, res) {
  const {
    body: data,
    params: { id },
  } = req;
  try {
   

    const { rows } = "";

    if (rows.length === 0) {
      res.status(404).json({ message: "Аэропорт не найден" });
    } else {
      res.status(200).json(rows);
    }
  } catch (error) {
    console.error("Ошибка при выполнении запроса:", error);
    res.status(500).json({ message: "Внутренняя ошибка сервера" });
  }
};

module.exports.searchCountry = async function (req, res) {
  const { body: data} = req;
  try {
  
    const { rows } ="";
    if (rows.length === 0) {
      res.status(404).json({ message: "Country not found" });
    } else {
      res.status(200).json(rows);
    }
  } catch (error) {
    res.status(500).json(JSON.stringify({ error }));
  }
};

module.exports.searchCity = async function (req, res) {
  const { body: data, } = req;
 
  const { rows } = "";
  if (rows.length === 0) {
    res.status(404).json({ message: "City not found" });
  } else {
    res.status(200).json(rows);
  }
};

module.exports.searchTicket = async function (req, res) {
  const { body: data } = req;
  try {
   
    const { rows } = "";
    if (rows.length === 0) {
      res.status(404).json({ message: "Ticket not found" });
    } else {
      res.status(200).json(rows);
    }
  } catch (error) {
    console.log(error)
    res.status(500).json(JSON.stringify({ error }));
  }
};
