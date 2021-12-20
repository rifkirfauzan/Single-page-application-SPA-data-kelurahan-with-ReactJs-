import React from 'react'
import { Table } from 'react-bootstrap'
const Tabel = ({warga, editData, hapusData }) => {
    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Nama Warga</th>
            <th>Alamat</th>
            <th>No telpon</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
        {warga.map((warga, index) => {
          return (
            <tr key={index} >
              <td>{index+1}</td>
              <td>{warga.nama}</td>
              <td>{warga.alamat}</td>
              <td>{warga.notelp}</td>
              <td>
                <button className="btn btn-warning mr-2" onClick={() => editData(warga.id) }>Edit</button>
                <button className='btn btn-danger' onClick={() => hapusData(warga.id) }>Hapus</button>
              </td>
            </tr>
          );
        })}
        </tbody>
      </Table>
    );
};

export default Tabel;
