import { useState } from 'react'
import { addUser, editUser } from '../features/Users';
import { useSelector, useDispatch } from 'react-redux';


const Form = ({ isEdit, user, setModalIsOpen }) => {


    const dispatch = useDispatch()
    const userListLength = useSelector((state) => state.users.value).length

    const [formData, setFormData] = useState({
        id: "",
        name: "",
        email: ""
    })

    const [updateUser, setUpdateUser] = useState(user)

    const { name, email } = formData

    const handleUpdateDataChange = (e) => {

        setUpdateUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))

        console.log(updateUser)

    }

    const handleFormDataChange = (e) => {

        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))

    }

    const handleSubmit = (e) => {

        e.preventDefault()

        if (isEdit) {
            if (updateUser.name && updateUser.email) {
                dispatch(editUser(updateUser))
                setModalIsOpen(false)
            }
        } else {
            if (name && email)
                dispatch(addUser({ id: userListLength + 1, name, email }))
            setFormData({
                id: "",
                name: "",
                email: ""
            })

        }

    }


    return (
        <form onSubmit={handleSubmit} className="mt-2 d-flex justify-content-center">
            <div className="row g-2 w-50">
                <div className="col-md">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInputGrid" placeholder="Enter Name" name="name"
                            value={isEdit ? updateUser.name : name}
                            onChange={isEdit ? handleUpdateDataChange : handleFormDataChange} />
                        <label htmlFor="floatingInputGrid">Name</label>
                    </div>
                </div>
                <div className="col-md">
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInputGrid" placeholder="Enter Email address" name="email"
                            value={isEdit ? updateUser.email : email}
                            onChange={isEdit ? handleUpdateDataChange : handleFormDataChange} />
                        <label htmlFor="floatingInputGrid">Email address</label>
                    </div>
                </div>
            </div>

            <button className="btn btn-lg btn-outline-success mx-3" > {isEdit ? <> <i className="bi bi-pencil"></i> Update User </> : <> <i className="bi bi-person-plus"></i> Add User </>}</button>

        </form>
    )
}

export default Form