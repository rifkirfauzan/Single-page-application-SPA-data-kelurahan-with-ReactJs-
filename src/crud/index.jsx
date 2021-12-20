import React, { Component } from 'react'
import Tabel from './Tabel'
import NavbarComponent from './NavbarComponent'
import Formulir from './Formulir'

export default class Crud extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             warga: [],
             nama: "",
             alamat: "",
             notelp: "",
             id: "",
        }
    }
    
    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) =>   {
        event.preventDefault();

        if(this.state.id === ""){
            this.setState({
                warga:[
                    ...this.state.warga,
                    {
                        id: this.state.warga.length+1,
                        nama: this.state.nama,
                        alamat: this.state.alamat,
                        notelp: this.state.notelp
                    }
                ]
            })
        }else{
            const getNotWarga = this.state.warga
            .filter((warga) => warga.id !== this.state.id)
            .map((filterWarga)  => {
                return filterWarga
            });

            this.setState({
                warga:[
                    ...getNotWarga,
                    {
                        id: this.state.warga.length+1,
                        nama: this.state.nama,
                        alamat: this.state.alamat,
                        notelp: this.state.notelp
                    }
                ]
            })
        }


        this.setState({
            nama: "",
            alamat: "",
            notelp: "",
            id: "",
        })
    }

    editData = (id) => {
       const getWarga = this.state.warga
       .filter((warga) => warga.id === id)
       .map((filterWarga)  => {
           return filterWarga
       })
       this.setState({
        nama: getWarga[0].nama,
        alamat: getWarga[0].alamat,
        notelp: getWarga[0].notelp,
        id: getWarga[0].id,
    })
    }

    hapusData = (id) => {
        const getDeleteWarga = this.state.warga
            .filter((warga) => warga.id !== id)
            .map((filterWarga)  => {
                return filterWarga
            });

            this.setState({
                warga: getDeleteWarga
            })

    }

    render() {
        console.log(this.state.warga);
        return (
            <div>
                <NavbarComponent />
                <div className="container mt-4">
                        <h2>Daftar data warga</h2>
                    <Tabel warga={this.state.warga} editData={this.editData} hapusData={this.hapusData} />
                    <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}
