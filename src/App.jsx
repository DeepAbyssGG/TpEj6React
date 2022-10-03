import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import FormPaletaColor from "./components/FormPaletaColor";
import "./Style.css"

function App() {
  return (
    <Container className="bgColor">
      <h1 className="text-center sz-1 my-5">PALETA DE COLORES</h1>
      <hr />
      <FormPaletaColor />
    </Container>
  );
}

export default App;
