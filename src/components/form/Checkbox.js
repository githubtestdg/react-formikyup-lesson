import {useField} from "formik";
import {FiCheck} from "react-icons/fi";
import classNames from "classnames";


export default function Checkbox({label, ...props}){
    const [field,meta,helpers]= useField(props)

    const changHandle = e => {
        helpers.setValue(e.target.files[0])
    }

    const checkHandle = () => {
        helpers.setValue(!field.value)
    }

    return(
        <label className={'flex cursor-pointer gap-x-2 items-center text-sm'}>
            <button onClick={checkHandle} className={classNames(
                {
                    'w-5 h-5 rounded transition-all border flex items-center justify-center ' : true,
                    'text-transparent border-gray-300' : !field.value,
                    'border-blue-600 bg-blue-600 text-white' : field.value
                }
            )}>
                 <FiCheck size={16}/>
            </button>
            {label}
        </label>
    )
}