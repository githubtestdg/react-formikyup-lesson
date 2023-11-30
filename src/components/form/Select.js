import {useField} from "formik";

export default function Select({label, original = false, options, ...props}) {
    const [field, meta, helpers] = useField(props)

    const changeHandle = e => {
        let selected;
        if (props.multiple) {
            const multi = [...e.target.selectedOptions].map(e => +e.value)
            selected = options.filter(option => multi.includes((option.key)))
            helpers.setValue(selected || +e.target.value)
        } else {
            selected = options.find(option => option.key === +e.target.value)
            helpers.setValue(original ? selected : +e.target.value)
        }

    }

    return (
        <label className={'block w-full'}>
            <div className={'text-sm text-gray-600'}>{label}</div>
            <select className='w-full h-10 border-b-2 outline-none focus:border-black' {...props}
                    onChange={changeHandle} defaultValue={field.value}>
                {options.map((option, key) => (
                    <option value={option.key} key={key}>{option.value}</option>
                ))}
            </select>
        </label>
    );
}