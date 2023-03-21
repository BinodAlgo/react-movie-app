// import React from 'react'

const Form = () => {
  const handleSubmit = (event)=>{
        event.preventDefault()
        const form = event.target
        const formData = new FormData(form)
        const formJson = Object.fromEntries(formData.entries())
 
        console.log(formJson)



  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit} method="post">
        <label>Pick your fruit
          <select name="selectedFruits" defaultValue="Orange" >
              <option value={"Apple"}>Apple</option>
              <option value={"Orange"}>Orange</option>
              <option value={"Banana"}>Banana</option>
          </select>
        </label>
        <label>
        Pick all your favorite vegetables:
        <select
          name="selectedVegetables"
          multiple={true}
          defaultValue={['corn', 'tomato']}
        >
          <option value="cucumber">Cucumber</option>
          <option value="corn">Corn</option>
          <option value="tomato">Tomato</option>
        </select>
      </label>
      </form>
    </div>
  )
}

export default Form