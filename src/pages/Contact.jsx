import {Formik, Form, Field, useFormikContext} from "formik";
import {Helmet} from 'react-helmet'
import Input from "../components/form/Input";
import File from "../components/form/File";
import Checkbox from "../components/form/Checkbox";
import Textarea from "../components/form/Textarea";
import Select from "../components/form/Select";
import Radio from "../components/form/Radio";
import {useEffect} from "react";
import {SampleSchema, ContactSchema} from "../validation";


const AutoSubmitCode = () => {
    const {values, submitForm} = useFormikContext()
    useEffect(()=>{
        if (values.code.length === 6){
            submitForm()
        }
    },[values])
    return null
}

export default function Contact () {
    return(
        <div>
            <Helmet>
                <title>Contact</title>
                <meta name={'description'} content={'Contact Page description'} />
            </Helmet>

            <Formik initialValues={{
                code : ''
            }} onSubmit={values => {
                console.log(values)
            }}
            validationSchema={SampleSchema}>
                {({values})=>(
                    <Form className={'hidden'}>
                        <Input label={'Kodu Girin'} name={'code'}/>
                        <button type={'submit'}> Gönder</button>
                        <AutoSubmitCode />
                    </Form>
                )}
            </Formik>

            <Formik
                initialValues={{name:'',about:'',gender:2,accept:false,skills:[],avatar:'',level:''}}
                onSubmit={values => {console.log(values)}}
                validationSchema={ContactSchema}>
                {({values}) => (
                    <Form className={'p-6 m-4 border rounded grid gap-y-4 shadow-lg'}>
                        <Input label={'Ad - Soyad'} name={'name'} />
                        <Textarea label={'Hakkında'} name={'about'} rows={4}/>
                        <Checkbox label={"Kuralları kabul ediyorum!"} name={"accept"}/>
                        <Select label={'Cinsiyet'} name={'gender'} options={[
                            { key: '', value: 'Seçin' },
                            { key: 1, value: 'Kadın' },
                            { key: 2, value: 'Erkek' },
                        ]} />
                        <Select label={'Skills'} name={'skills'} multiple={true} options={[
                            {key :0, value : 'php'},
                            {key :1, value : 'css'},
                            {key :2, value : 'js'},
                            {key :3, value : 'html'},
                        ]} />
                        <File label={'Avatar'} name={'avatar'} />
                        <Radio label={'Seviyenizi seçin'} name={'level'} options={[
                            {key : 'jr', value : 'Jr. Developer'},
                            {key : 'sr', value : 'Sr. Developer'},
                            {key : 'ninja', value : 'Ninja'},
                        ]}/>
                        <button type="submit" className={'h-10 rounded bg-black text-sm text-white px-5'} >Gönder</button>
                    </Form>

                )}
            </Formik>
        </div>
    );
}