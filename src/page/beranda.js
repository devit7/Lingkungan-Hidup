import Card from "../component/card"
import React,{Component} from "react";
import $ from "jquery";
class beranda extends Component{
    constructor(){
    super()
        this.state={
        buku:[{judul:"Hari Peduli Sampah Nasional",tanggal:"21 Februari",cover:"https://drive.google.com/uc?id=1pGcSkU16siPagBvuuF8E3QHL2outFMB7"},{judul:"Hari Hutan Internasional",tanggal:"21 Maret",cover:"https://drive.google.com/uc?id=15pRzWxdrXf-Tb90-Atk0jYahJplA9ZBw"},
        {judul:"Hari Air Sedunia",tanggal:"22 Maret",cover:"https://drive.google.com/uc?id=1vR3Vti9hFAcHXyRBVmQa8CRk42imTj2U"}],
        judul:"",
        tanggal:"",
        cover:"",
        selectedItem: null,
    }
    }
    Add = () => {
        // menampilkan komponen modal
        $("#modal_buku").modal("show")
        this.setState({
            judul: "",
            tanggal:"",
            cover:"",
            action: "insert"
        })
    }
    Edit = (item) => {
        // menampilkan komponen modal
        $("#modal_buku").modal("show")
        this.setState({
            judul: item.judul,
            tanggal:item.tanggal,
            cover:item.cover,
            action: "update",
            selectedItem: item
        })
    }
    Save = (event) => {
        event.preventDefault();
        // menampung data state buku
        let tempBuku = this.state.buku

        if (this.state.action === "insert") {
            // menambah data baru
            tempBuku.push({
                judul: this.state.judul,
                tanggal:this.state.tanggal,
                cover:this.state.cover
            })
        }else if(this.state.action === "update"){
            // menyimpan perubahan data
            let index = tempBuku.indexOf(this.state.selectedItem)
            tempBuku[index].judul = this.state.judul
            tempBuku[index].tanggal=this.state.tanggal
            tempBuku[index].cover=this.state.cover
        }

        this.setState({buku : tempBuku})
        
        // menutup komponen modal_buku
        $("#modal_buku").modal("hide")
 }
 Drop = (item) => {
    // beri konfirmasi untuk menghapus data
    if(window.confirm("Apakah anda yakin ingin menghapus data ini?")){
        // menghapus data
        let tempBuku = this.state.buku
        // posisi index data yg akan dihapus
        let index = tempBuku.indexOf(item)

        // hapus data
        tempBuku.splice(index, 1)

        this.setState({buku: tempBuku})
    }
}

    render(){
        return(
<div className="container">
                <div className="row">
                    { this.state.buku.map( (item, index) => (
                        <Card
                        judul={item.judul}
                        tanggal={item.tanggal}
                        cover={item.cover}
                        onEdit={ () => this.Edit(item)}
                        onDrop={ () => this.Drop(item)}
                        />
                    )) }
                </div>

                <button className="btn btn-success" onClick={() => this.Add()}>
                    Tambah Data
                </button>

                {/* component modal sbg control manipulasi data */}
                <div className="modal" id="modal_buku">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* modal header */}
                            <div className="modal-header">
                                Form Buku
                            </div>

                            {/* modal body */}
                            <div className="modal-body">
                                <form onSubmit={ev => this.Save(ev)}>
                                    Judul
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.judul}
                                    onChange={ ev => this.setState({judul: ev.target.value}) }
                                    required />
                                    
                                    Tanggal
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.tanggal}
                                    onChange={ ev => this.setState({tanggal: ev.target.value}) }
                                    required />
                                    
                                    Cover 
                                    <input type="url" className="form-control mb-2"
                                    value={this.state.cover}
                                    onChange={ ev => this.setState({cover: ev.target.value}) }
                                    required />

                                    <button className="btn btn-info btn-block" type="submit">
                                        Simpan
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default beranda;