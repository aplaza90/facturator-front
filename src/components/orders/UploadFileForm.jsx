import { useId } from "react";
import { UploadIcon } from "../Icons";
import { UploadSubmenu } from "./UploadSubmenu";
import './UploadFileForm.css'

export function UploadFileForm () {
  const uploadCheckboxId = useId()
  return (
    <>
      <label className='upload-button' htmlFor={uploadCheckboxId}>
        <UploadIcon />
      </label>
      <input id={uploadCheckboxId} type='checkbox' style={{ display: 'none' }} />

      <aside className='upload-submenu'>
        <UploadSubmenu />
      </aside>
    </>
  )
}