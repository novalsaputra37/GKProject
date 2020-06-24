import React, { Component } from 'react'


const Album = (props)=>{
            return (
                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                        <img src={props.gambar}/>
                        <div className="card-body">
                            <p className="card-text">{props.caption}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
    
}

export default Album