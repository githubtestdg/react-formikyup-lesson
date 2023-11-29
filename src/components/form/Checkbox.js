import {useField} from "formik";
import {FiCheck} from "react-icons/fi";

export default function Checkbox({label, ...props}){
    const [field,meta,helpers]= useField(props)

    const changHandle = e => {
        helpers.setValue(e.target.files[0])
    }
    return(

        <label className={'block w-full'}>
            <div className={'text-sm text-gray-600'}>{label}</div>
            <input className={'w-full h-10 rounded border-b outline-none focus:border-black'} {...props} onChange={changHandle} type={"file"} />
        </label>
    )
}