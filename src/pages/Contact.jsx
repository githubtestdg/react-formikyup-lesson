import {Formik,Form, Field} from "formik";
import {Helmet} from 'react-helmet'
import Input from "../components/form/Input";
import File from "../components/form/File";
import Checkbox from "../components/form/Checkbox";
import Textarea from "../components/form/Textarea";
import Select from "../components/form/Select";



export default function Contact () {
    return(
        <div>
            <Helmet>
                <title>Contact</title>
                <meta name={'description'} content={'Contact Page description'} />
            </Helmet>

            <Formik initialValues={{name:'Tayfun',about:'',gender:2,accept:false,skills:['php','css'],avatar:''}} onSubmit={values => {console.log(values)}} >
                {({values}) => (
                    <Form className={'p-6'}>
                        <Input label={'Ad - Soyad'} name={'name'} /> <br/>
                        <Textarea label={'Hakkında'} name={'about'} rows={4}/> <br/>
                        <Checkbox label={"Kuralları kabul ediyorum!"} name={"accept"}/> <br/>
                        <Select label={'Cinsiyet'} name={'gender'} original={true} options={[
                            { key: 1, value: 'Kadın' },
                            { key: 2, value: 'Erkek' },
                        ]} />
                        <Select label={'Skills'} name={'skills'} multiple={true} options={[
                            {key :0, value : 'php'},
                            {key :1, value : 'css'},
                            {key :2, value : 'js'},
                            {key :3, value : 'html'},
                        ]} />
                        <File label={'Avatar'} name={'avatar'} /> <br/>
                        <button type="submit" disabled={!values.accept}>Gönder</button>
                        <pre> {JSON.stringify(values, null,2)} </pre>
                    </Form>

                )}
            </Formik>
            Contact Page
        </div>
    );
}