import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAddData, GetUpdateData, GetSetItemState } from '../Action/action'
import shortid from 'shortid';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Home() {

    const style = {
        width: '600px',
        margin: '0 auto'
    }

    const [data, setData] = useState(
        {
            name: '',
            mobileNumber: '',
        }
    )

    const {item} = useSelector(state=>state.product)
    console.log(item !== null);
    const [singleData,setSingleData] = useState({
        name: '',
        mobileNumber: '',
        id: ''
    })

    useEffect(() => {
        setSingleData({...item})
    }, [item])

    console.log('singleData',singleData)
    const {name,mobileNumber} = singleData;

    const [error, setError] = useState('')

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        console.log(e);
        if(item == null)
        setData({ ...data, [e.target.name]: e.target.value })
        else
        setSingleData({ ...singleData, [e.target.name]: e.target.value})
    }

    const submitData = () => {
        if (!data.name || !data.mobileNumber) {
            setError('please fill the details.')
        }
        else {
            Object.assign(data, { id: shortid.generate() })
            dispatch(GetAddData(data))
            navigate('/DataTable')
        }
    }

    const updateData = () => {
        if(!name || !mobileNumber){
            setError('please update the detail.')
        }
        else {
            dispatch(GetUpdateData(singleData))
            dispatch(GetSetItemState())
            navigate('/DataTable')
        }
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='md col-6 sm col-12 auto'>
                        <form style={style}>
                            {error &&
                                <span style={{color: 'red'}}>{error}</span>}
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter name" name="name" value={name} onChange={handleChange} />
                            </div>
                            <div class="form-group">
                                <label for="mobileNumber">Mobile Number</label>
                                <input type="number" class="form-control" id="mobileNumber" placeholder="Mobile Number" name="mobileNumber" value={mobileNumber} onChange={handleChange} />
                            </div>
                            {
                                item == null ?
                                <button type="button" class="btn btn-primary" onClick={submitData}>Submit</button>
                                :
                                <button type="button" class="btn btn-primary" onClick={updateData}>Update</button>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
