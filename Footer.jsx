import { Container, Row, Col, Stack, Image } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container fluid>
        <Row className="bg-primary text-white p-4">
          {/* First Column */}
          <Col className="d-flex flex-column align-items-center justify-content-center w-auto">
            <Stack gap={2} className="text-center">
              <Image
                src="https://raw.githubusercontent.com/wolczan/gallery/refs/heads/main/napis.webp"
                alt="company logo"
                rounded
                width={150}
                height={150}
              />
              <h2>Maciej Liberadzki Gallery</h2>
              <p>Company tagline here</p>
            </Stack>
          </Col>

          {/* Second Column */}
          <Col>
            <h5>Column 2</h5>
            <p>Some content for column 2.</p>
          </Col>

          {/* Third Column */}
          <Col>
            <h5>Column 3</h5>
            <p>Some content for column 3.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
