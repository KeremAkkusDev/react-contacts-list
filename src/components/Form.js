import {useState} from "react"
function Form({list,setList}) {
    
    const [form,setForm] = useState({fullname:"", phone_number:""})

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]:e.target.value})
    }

    const addContact = (e) =>{
        e.preventDefault();
        setList([...list,form])
        setForm({fullname:"", phone_number:""})
    }
  return (
    <div>
        <form onSubmit={addContact}>
            <div>
                <input name="fullname" placeholder="Fullname" value={form.fullname} onChange={onChangeInput}/>
            </div>
            <div>
                <input name="phone_number" placeholder="Phone Number" value={form.phone_number} onChange={onChangeInput}/>
            </div>
            <div>
                <button onClick={addContact}>Add Contact List</button>
            </div>
        </form>
        
    </div>
  )
}

export default Form