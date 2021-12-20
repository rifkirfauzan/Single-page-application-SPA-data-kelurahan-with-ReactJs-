import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const Formulir = ({nama,alamat,notelp,handleChange,handleSubmit,id}) => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h4>{id ? 'Edit data' : 'Tambah data'}</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nama">
              <Form.Label>Nama Warga</Form.Label>
              <Form.Control
                type="text"
                name="nama"
                value={nama}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="alamat">
              <Form.Label>Alamat</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="alamat"
                value={alamat}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="notelp">
              <Form.Label>No telepon</Form.Label>
              <Form.Control
                type="number"
                name="notelp"
                value={notelp}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Tambah data
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Formulir;
