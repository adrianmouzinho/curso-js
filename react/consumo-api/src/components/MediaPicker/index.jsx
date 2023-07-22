import { useState } from 'react'
import { Image, InputFile } from './styles'

export function MediaPicker() {
  const [preview, setPreview] = useState(null)

  function onFileSelected(event) {
    const { files } = event.target

    if (!files) {
      return
    }

    const previewURL = URL.createObjectURL(files[0])

    setPreview(previewURL)
  }

  return (
    <>
      <InputFile
        onChange={onFileSelected}
        type="file"
        name="avatarUrl"
        id="media"
        accept="image/*"
      />

      {preview && <Image src={preview} alt="" />}
    </>
  )
}
