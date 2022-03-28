import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../features/Users'
import Form from './Form'

import Modal from 'react-modal'


const User = ({ user }) => {

    Modal.setAppElement('#root');

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const dispatch = useDispatch()
    const { id, name, email } = user


    const handleDelete = () => {
        dispatch(deleteUser({ id }))
    }

    const handleEdit = () => {

        setModalIsOpen(true)


    }

    const customStyles = {
        content: {
            height: "fit-content",
            width: "auto",
        }
    }

    return (
        <>
            <div className="col">
                <div className="card h-100">
                    <div className="card-body">
                        <h5 className="card-title"><i className="bi bi-person"></i> : {name}</h5>
                        <h5 className="card-text"><i className="bi bi-at"></i> : {email}</h5>
                    </div>
                    <div className='d-flex  justify-content-evenly p-1 mb-2'>
                        <div className=''>
                            <button className='btn btn-outline-success' onClick={handleEdit}><i className="bi bi-pencil"></i> Edit</button>
                        </div>
                        <div className=''>
                            <button className='btn btn-outline-danger' onClick={handleDelete}><i className="bi bi-trash"></i> Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={() => { setModalIsOpen(false) }} style={customStyles}>
                <Form isEdit={true} user={user} setModalIsOpen={setModalIsOpen} />
            </Modal>
        </>
    )
}

export default User