import {useField} from "formik";

export default function File({label, ...props}){
    const [field,meta,helpers]= useField(props)

    const changeHandle = e => {
        helpers.setValue(e.target.files[0])
    }
    return(
        <label className='block w-full'>
            <div className='text-sm text-gray-600'>{label}</div>
            <input className='hidden' type={'file'} onChange={changeHandle} {...props} />
            <button className='px-5 pointer-events-none rounded bg-blue-50 h-10 text-blue-500'> Dosya seç</button>
        </label>
    )
}