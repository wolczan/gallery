import { Container, Row, Col, Stack, Image } from "react-bootstrap";

function Footer() {
  return (
    <footer className="text-center text-lg-start text-white" style={{ backgroundColor: "#1c2331" }}>
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
              <h6 className="text-uppercase fw-bold">Maciej Liberadzki Gallery</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
              <p>The family gallery is a collection of cherished photos and memories that capture the most important moments of family life.</p>
            </Col>

            {/* Column 2 */}
            <Col md={2} lg={2} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Technologies used</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
              <p>
                <a href="#!" className="text-white">CSS/Tailwind</a>
              </p>
              <p>
                <a href="#!" className="text-white">React</a>
              </p>
              <p>
                <a href="#!" className="text-white">Firebase</a>
              </p>
              <p>
                <a href="#!" className="text-white">Bootstrap</a>
              </p>
              <p>
                <a href="#!" className="text-white">Node.js</a>
              </p>
            </Col>

            {/* Column 3 */}
            <Col md={3} lg={2} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Services</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
              <p>
                <a href="#!" className="text-white">Support</a>
              </p>
              <p>
                <a href="#!" className="text-white">Website Maintenence</a>
              </p>
              <p>
                <a href="#!" className="text-white">Responsive Design</a>
              </p>
              <p>
                <a href="#!" className="text-white">Web Hosting Service</a>
              </p>
              <p>
                <a href="#!" className="text-white">Tailor-made solutions</a>
              </p>
            </Col>

            {/* Column 4 */}
            <Col md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
              <p><i className="fas fa-home mr-3"></i> Srebrzynska Park, Lodz, Poland</p>
              <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
              <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Copyright section */}
      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © 2024 Designed by me
        <a className="text-white" href=""></a>
      </div>
    </footer>
  );
}

export default Footer;
