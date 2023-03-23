import { useState } from "react"

function ContactList({list}) {
    const [filterText,setFilterText] = useState('');
    const filtered = list.filter((item)=>{
        return Object.keys(item).some((key)=>
            item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
        )
    })
    console.log(filtered)
  return (
    <div>
        <input type="text" placeholder="Filter" onChange={(e) => { setFilterText(e.target.value)}}/>
        {
            filtered.map((contact,index)=>(
                <li key={index}>{contact.fullname}</li>
            ))
        }
    </div>
  )
}

export default ContactList