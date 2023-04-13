import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetDeleteData,PrePopulateData } from '../Action/action';
import { useNavigate } from 'react-router-dom';


export default function DataTable() {

    const myStyle = {
        margin : '0 auto',
        width : '600px'
    }

    const myData = useSelector((state) => state.product.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const singleUser = (id)=>{
        dispatch(PrePopulateData(id))
        navigate("/")
    }

    return (
        <div style={myStyle}>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>MobileNumber</th>
                        <th scope='col'></th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myData?.map((value)=>{
                            return (
                                <tr>
                                    <th scope='row'>{value.name}</th>
                                    <td>{value.mobileNumber}</td>
                                    <td><button className='btn btn-primary' onClick={()=>singleUser(value.id)}>Edit</button></td>
                                    <td><button className='btn btn-danger' onClick={()=>dispatch(GetDeleteData(value.id))}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </div>
    )
}
