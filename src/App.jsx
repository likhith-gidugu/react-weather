import { useState } from 'react'


import './App.css'
import axios from 'axios';


function App() {
  let apiKey="c32ffa7ed91073f74307800f3b874058";
  const [city,setcity]=useState("")
  const [result,setresult]=useState('')
  const[display,setdisplay]=useState('')
  const changeHandler=e=>{
 setcity(e.target.value)
 

  }

  const submitHandler =e=>{
    e.preventDefault();
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then((res)=>{
   
    // console.log(res.data)
    const {name,main,weather}=res.data
    setresult(main.temp)
    setdisplay(name)
    setcity('')
    
  
  }).catch((error)=>{
    alert('error city name')
  })

   

    }
     


  

  return (
    <>
      
      <div className='w-[50%] h-[100%] m-auto   border rounded-lg bg-gray-100 '>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
       

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="" method="POST" className="space-y-6" onSubmit={submitHandler}>
            <div>
           
              <h3 className='text-center text-gray-900 text-3xl font-bold'>Weather Application </h3>
              
              <div className="mt-2">
                <input
                  id="city"
                  name="city"
                  type="city"
                  required
                  value={city}
                  onChange={changeHandler}

                  placeholder='Enter City '
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

          

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Weather Report
              </button>
            </div>
            
          </form>
    
          <h3 class=" font-semibold   p-4 rounded-lg ">
    Temperature At <label class='text-orange-600'>{display}</label> is  <label class='text-green-600'>{result}</label>°C
</h3>
        </div>
      </div>
      
      </div>
   

      
    </>
  )
}

export default App
