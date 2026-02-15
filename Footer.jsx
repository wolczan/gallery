import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css";

function Footer() {
  return (
    <footer className="text-center text-lg-start text-white" style={{ backgroundColor: "" }}>
      {/* Social media section */}
      <section className="d-flex justify-content-between p-4" style={{ backgroundColor: "#6351ce" }}>
        {/* Left */}
        <div className="me-5">
          <span>Get connected with me on social networks:</span>
        </div>

        {/* Right */}
        <div>
          <a href="#" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="text-white me-4">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-white me-4">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-white me-4">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      {/* Links and content section */}
      <section>
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
            {/* Column 1 */}
            <Col md={3} lg={4} xl={3} className="mx-auto mb-4">
             <h6 className="flowdoc-brand">Flowdoc Gallery</h6>

              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
            <p>Flowdoc is a modern digital lifestyle platform for families.
            We combine photography, parenting, personal finance and AI tools to help people live better, smarter and more calmly.</p>
            </Col>

            {/* Column 2 */}
            <Col md={2} lg={2} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Kategorie</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />

              <p>
                <Link to="/plakaty" className="text-white text-decoration-none">
                  Plakaty
                </Link>
              </p>
              <p>
                <Link to="/fotografia" className="text-white text-decoration-none">
                  Fotografia
                </Link>
              </p>
              <p>
                <Link to="/blog" className="text-white text-decoration-none">
                  Blog
                </Link>
              </p>
            </Col>

              {/* Column 3 */}
              <Col md={3} lg={2} xl={2} className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Pomoc</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />

                <p>
                  <Link to="/dostawa" className="text-white text-decoration-none">
                    Dostawa
                  </Link>
                </p>
            {/*}
                <p>
                  <Link to="/zwroty" className="text-white text-decoration-none">
                    Zwroty i reklamacje
                  </Link>
                </p>

                <p>
                  <Link to="/faq" className="text-white text-decoration-none">
                    FAQ
                  </Link>
                </p>
        */}
                <p>
                  <Link to="/polityka-prywatnosci" className="text-white text-decoration-none">
                    Polityka prywatności
                  </Link>
                </p>
                <p>
                  <Link to="/cookies" className="text-white text-decoration-none">
                    Polityka cookies
                  </Link>
                </p>

                <p>
                  <Link to="/regulamin" className="text-white text-decoration-none">
                    Regulamin
                  </Link>
                </p>
              </Col>

            {/* Column 4 */}
            <Col md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">Sprzedawca</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />

             <p><i className="fas fa-user me-2"></i> Maciej Liberadzki</p>
              <p><i className="fas fa-envelope me-2"></i> kontakt@twojadomena.pl</p>
              <p className="small">
                Sprzedaż prowadzona w ramach działalności nierejestrowanej
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Copyright section */}
     <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
  © 2026 Flowdoc Galeria
</div>
    </footer>
  );
}

export default Footer;
