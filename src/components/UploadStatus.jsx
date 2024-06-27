import { PropTypes } from 'prop-types'

export const UploadStatus = ({ status }) => {
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

UploadStatus.propTypes = { status: PropTypes.string }
