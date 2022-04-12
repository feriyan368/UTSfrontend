import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";
const daftarAnggota = [
  { gambar: "../img/kue1.jpeg", title: "Kue Tart", content: "Ukuran Medium" },
  { gambar: "../img/kue2.jpeg", title: "Kue Tart", content: "Ukuran Big" },
  { gambar: "../img/kue3.jpeg", title: "Kue Tart", content: "Ukuran Medium" },
  { gambar: "../img/kue4.jpeg", title: "Kue Brownis", content: "Ukuran Medium" },
  { gambar: "../img/kue5.jpeg", title: "Kue Brownis", content: "Ukuran Big" },
  { gambar: "../img/kue6.jpeg", title: "Kue Tart", content: "Ukuran Small" },
  { gambar: "../img/kue7.jpeg", title: "Kue Brownis", content: "Ukuran Medium" },
  { gambar: "../img/kue8.jpeg", title: "Kue Brownis", content: "Ukuran Big" },
];

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <div className="container">
        <div className="row">
          {daftarAnggota.map((agt, indeks) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-6">
              <Card gambar={agt.gambar} title={agt.title} content={agt.content} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
