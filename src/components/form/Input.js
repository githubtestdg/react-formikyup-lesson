import {ErrorMessage, useField} from "formik";
import classNames from "classnames";

export default function Input({label, ...props}){
    const [field,meta,helpers]= useField(props)

    return(
        <>
            <label className={'block w-full'}>
                <div className={'text-sm text-gray-600'}>{label}</div>
                <input className={classNames({
                    'w-full h-10 border-b-2 outline-none ': true,
                    'focus:border-black' : !meta.error || !meta.touched,
                    'border-red-600': meta.error && meta.touched
                })} {...props} {...field} />
            </label>
            <ErrorMessage name={field.name} component={'small'} className={'text-xs mt-1 text-red-600'}/>
        </>
    )
}