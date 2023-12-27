import React, { useState } from 'react'
import AddPostView from './AddPostView'
import AddPostModel from '../AddPostModel';
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AddPostController = () => {
  const navigate = useNavigate()
    // classın (modelin) örneğini oluşturma

    const model = new AddPostModel()
    // console.log(model)

    // state'in ilk değerini modele eşitledik..
    const [form, setForm] = useState(model.state)
    // console.log(form)

    const onInputChange = (key,e) => {
        /* setForm metodunu state güncellemek
        için çağırdık. İçerisinde spread operator 
        yardımı ile tüm form objesini aldık.
        Köşeli parantez ile bir obje keyi 
        geleceğini belirttik. Key'e karşılık dışardan 
        gelen value'yu ekledik */
        setForm({...form, [key]:e.target.value})
    }

    // console.log(form)
    const handleSubmit = (e) => {
      e.preventDefault()

      if(!form.user || !form.text){
        alert("Formu Doldurunuz")
        return
      }
      // console.log(form)
      axios.post("http://localhost:3005/posts" ,form)
      .then((res) => navigate("/"))
      .catch((err) => console.log(err))
    }
  return (
    <AddPostView onInputChange={onInputChange} handleSubmit={handleSubmit}/>
  )
}

export default AddPostController;