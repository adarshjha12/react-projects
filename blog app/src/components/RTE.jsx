import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {useForm} from 'react-hook-form'
import {Controller} from 'react-hook-form'

function RTE({name, control, label, defaultValue=''}) {

  return (
    <div className='w-full'>
        {label && <label> {label} </label>}
        <Controller
            name={name}
            control={control}
            render={({field: {onChange}}) => (
                <Editor
                    initialValue = {defaultValue}
                    init={{
                        height: 500,
                        menubar: true,
                        plugins: [
                        'a11ychecker', 'image', 'advlist','advcode','advtable','autolink','checklist','markdown',
                        'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
                        'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
                        ],
                        toolbar:
                        'undo redo | blocks | bold italic backcolor | ' +
                        'alignleft aligncenter alignright alignjustify | ' +
                        'bullist numlist checklist outdent indent | removeformat | ' +
                        'a11ycheck code table help'

                    }}
                    onEditorChange={onChange}
                />
            )}
        />
        
    </div>
  )
}

export default RTE