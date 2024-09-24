const express = require("express");
const app = express();
const port = 3000;
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Mongo Veritabanı Bağlantısını oluştur
const client = new MongoClient(
  "mongodb+srv://sametdev:Qweqwe123@reservation.g5sie.mongodb.net/?retryWrites=true&w=majority&appName=Reservation",
  {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  }
);

// Mongoya Bağlan
async function run() {
  try {
    await client.connect();
  } catch (err) {
    console.log("Something went wrong", err);
  }
}

run();

// Mongo Veri Tabanını Seç
const db = client.db("Reservations");
const coll = db.collection("Reservation");

// Anasayfa ekranından belirtilen filtrelere göre uçuşları getir
app.post("/getflights", async (req, res) => {
  //Filtreler
  let { flightDirection, fromDateTime, toDateTime } = req.body;
  let flightDirectionQuery = `flightDirection=${flightDirection}&`;
  let fromDateTimeQuery = `fromDateTime=${fromDateTime}&`;
  let toDateTimeQuery = `toDateTime=${toDateTime}&`;
  let baselink = "https://api.schiphol.nl/public-flights/flights?";

  //İstek ayarları
  const requestOptions = {
    method: "GET",
    headers: {
      Accept: "application/json",
      app_id: "7bd70379",
      app_key: "bf4b1652579cdf94cc434018c5e24e9f",
      ResourceVersion: "v4",
    },
  };

  let data = await fetch(
    `${baselink}${
      flightDirection ? flightDirectionQuery : ""
    }includedelays=false&page=0&${fromDateTime ? fromDateTimeQuery : ""}${
      toDateTime ? toDateTimeQuery : ""
    }`,
    requestOptions
  );
  let dataJSON = await data.json();
  res.send(dataJSON);
});

// Mongo Veritabanına Veri Ekle
app.post("/add", async (req, res) => {
  const { f } = req.body;
  const result = await coll.insertOne(f);

  res.send(result);
});

// Mongo Veritabanından Veri Sil
app.post("/delete", async (req, res) => {
  let result = await coll.deleteOne(req.body);
  res.send(result).status(200);
});

// Mongo Veritabanından Verileri Getir
app.get("/get", async (req, res) => {
  let results = await coll.find({}).toArray();
  res.send(results).status(200);
});

// Serveri Başlat
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
