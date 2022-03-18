import { useState } from 'react';
import './Form.css';

function Form({ addPlace }) {
    const [formData, setFormData] = useState(
        {
          title: "", 
          location: "", 
          startDate: "", 
          endDate: "", 
          description: "",
          imageUrl: ""
        }
      )

      function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
      } 

      function resetForm() {
          setFormData(
            {
                title: "", 
                location: "", 
                startDate: "", 
                endDate: "", 
                description: "",
                imageUrl: ""
            }
          )
      }

      function handleSubmit(event) {
        event.preventDefault()
        addPlace(formData)

        resetForm()
    }

    return(
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} placeholder="Title" />
                <input type="text" name="location" id="location" value={formData.location} onChange={handleChange} placeholder="Location" />
                <input type="text" name="startDate" id="startDate" value={formData.startDate} onChange={handleChange} placeholder="Start date" />
                <input type="text" name="endDate" id="endDate" value={formData.endDate} onChange={handleChange} placeholder="End date" />
                <input type="text" name="description" id="description" value={formData.description} onChange={handleChange} placeholder="Description" />
                <input type="text" name="imageUrl" id="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="Image url" />

                <button className='form-submit'>Add travel</button>
            </form>
        </div>
    )
}
export default Form;