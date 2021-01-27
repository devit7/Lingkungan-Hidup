import React from 'react'
import './card.css'
class card extends React.Component{
render(){
    return(
    <div>
        <div class="col">
            <div class="card h-100">
            <img src={this.props.cover} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">{ this.props.judul }</h5>
                <p class="card-text">{this.props.tanggal}</p>
            </div>
            <div class="card-footer">
                {/* button untuk mengedit */}
                <button className="btn btn-sm btn-primary m-1"
                    onClick={this.props.onEdit}>
                        Edit
                </button>
                    {/* button untuk menghapus */}
                <button className="btn btn-sm btn-danger m-1"
                    onClick={this.props.onDrop}>
                        Hapus       
                </button>                                  
            </div>
            </div>
        </div>
    </div>
        )
    }
}
export default card;