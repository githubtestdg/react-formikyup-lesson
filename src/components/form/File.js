import {useField} from "formik";
import {FiCheck} from "react-icons/fi";

export default function File({label, ...props}) {
    const [field, meta, helpers] = useField(props)

    async function fileOpen() {
        try {
            const [fileHandle] = await window.showOpenFilePicker()
            const file = await fileHandle.getFile()
            helpers.setValue(file)
        } catch (e) {
            helpers.setValue('')
        }
    }

    return (
        <label className='block w-full'>
            <div className='text-sm text-gray-600'>{label}</div>

            <button type={'button'} onClick={fileOpen} className='px-5 text-sm rounded bg-blue-50 h-10 text-blue-500'>
                {field.value && <>Dosya seçildi <FiCheck size={15}/></>}
                {!field.value && 'Dosya Seç'}
            </button>
        </label>
    )
}