import { useState, useId } from 'react'
import { PropTypes } from 'prop-types'

export function UploadSubmenu () {
  const [file, setFile] = useState(null)
  const [status, setStatus] = useState('initial')
  const fileInputId = useId()

  const handleFileChange = (event) => {
    if (event.target.files) {
      setStatus('initial')
      setFile(event.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (file) {
      setStatus('uploading')

      const formData = new FormData()
      formData.append('file', file)

      try {
        const result = await fetch('http://localhost:5005/api/orders/file', {
          method: 'POST',
          body: formData
        })

        const data = await result.json()

        console.log(data)
        setStatus('success')
      } catch (error) {
        console.error(error)
        setStatus('fail')
      }
    }
  }

  return (
    <>
      <div>
        <label htmlFor={fileInputId}>
          Choose a file
        </label>
        <input
          id={fileInputId}
          type='file'
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>
      {file && (
        <section>
          File details:
          <ul>
            <li>Name: {file.name}</li>
            <li>Type: {file.type}</li>
            <li>Size: {file.size} bytes</li>
          </ul>
        </section>
      )}

      {file && (
        <button onClick={handleUpload} className='submit'>
          Upload a file
        </button>
      )}

      <Result status={status} />
    </>
  )
}

const Result = ({ status }) => {
  if (status === 'success') {
    return <p>✅ File uploaded successfully!</p>
  } else if (status === 'fail') {
    return <p>❌ File upload failed!</p>
  } else if (status === 'uploading') {
    return <p>⏳ Uploading selected file...</p>
  } else {
    return null
  }
}

Result.propTypes = { status: PropTypes.string }
