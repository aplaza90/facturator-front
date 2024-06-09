import { useId, useState } from "react"
import { UploadIcon } from "../Icons"
import './UploadFileForm.css'

export function UploadFileForm () {
  const [file, setFile] = useState(null)
  const uploadCheckboxId = useId()
  const handleFileChange = (event) => {
    if (event.target.files) {
      setFile(event.target.files[0])
    }
  }
  const handleUpload = (event) => {
    event.preventDefault()
    console.log(event)
  }
  return (
    <>
      <div>
        <label className='upload-button' htmlFor={uploadCheckboxId}>
          <UploadIcon />
        </label>
        <input
          id={uploadCheckboxId}
          type='file'
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </div>
      {file && (
        <div className='upload-form-container'>
          <section>
            File details:
            <ul>
              <li>Name: {file.name}</li>
              <li>Type: {file.type}</li>
              <li>Size: {file.size} bytes</li>
            </ul>
          </section>
          <button onClick={handleUpload}>Subir</button>
        </div>
      )}
    </>
  )
}