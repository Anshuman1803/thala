import { useState } from 'react'
import './App.css'
import audio from './assets/BgAudio.mp3'
import GGgif from './assets/GG.gif'
import moyeMoye from './assets/MoyeAudio.mp3'
function App() {
  const [Isthala, setIsThala] = useState(false);
  const [IsNotthala, setIsNotThala] = useState(false);
  const [inputValue, setInputValue] = useState('')

  const handleSubmitClick = (e) => {
    const formContainer__form = document.querySelector(".formContainer__form")
    e.preventDefault();
    if (isNaN(inputValue)) {
      if (inputValue.length === 7 || inputValue.toLocaleLowerCase() === "dhoni" || inputValue.toLocaleLowerCase() === "mahi") {
        formContainer__form.style.display = "none"
        setIsThala(true)
      } else {
        formContainer__form.style.display = "none"
        setIsNotThala(true)
      }
    } else {
      let temp = [...inputValue];
      let sum = temp.reduce((acc, val) => Number(acc) + Number(val));
      if (Number(sum) === 7) {
        formContainer__form.style.display = "none"
        setIsThala(true)
      } else {
        formContainer__form.style.display = "none"
        setIsNotThala(true)
      }
    }
  }

  const handleOnChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleCloseClick = (e) => {
    e.preventDefault();
    const formContainer__form = document.querySelector(".formContainer__form");
    formContainer__form.style.display = "block";
    setInputValue("")
    setIsThala(false);
    setIsNotThala(false);
  }
  return (
    <section className="formContainer">
      {Isthala ? <></> : <h2 className='formContainer_heading'>Everything Has A Reason</h2>}
      <form className='formContainer__form'>
        <input type="text" placeholder='Type Any Thing....' className='form__formItem' onChange={handleOnChange} value={inputValue} />
        <button className='form__formItemButton' onClick={handleSubmitClick}>Check</button>
      </form>

      {Isthala && <div className='resultContainer'>
        <span className='resultContainer__textLabel'>{inputValue}, thala for a reason</span>
        <img src="https://media1.tenor.com/m/DIrUjkTnopsAAAAd/dhoni-funny-dance-bole-jo-koyal-bago-me.gif" alt="MsDhoni" className='resultContainer__Poster' />

        <audio controls src={audio} autoPlay className='audioTrack'>
        </audio>

        <button className='form__formItemButton' onClick={handleCloseClick}>Close</button>
      </div>}

      {
        IsNotthala && <div className='resultContainer'>
          <span className='resultContainer__textLabel'>{inputValue}, No thala for a reason</span>
          <img src={GGgif} alt="Images" className='resultContainer__poster'/>

          <audio controls src={moyeMoye} autoPlay className='audioTrack'>
          </audio>

          <button className='form__formItemButton' onClick={handleCloseClick}>Close</button>
        </div>
      }

    </section>
  )
}

export default App
