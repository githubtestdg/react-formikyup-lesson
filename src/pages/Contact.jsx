import {Formik,Form, Field} from "formik";
import {Helmet} from 'react-helmet'
import Input from "../components/form/Input";

export default function Contact () {
    return(
        <div>
            <Helmet>
                <title>Contact</title>
                <meta name={'description'} content={'Contact Page description'} />
            </Helmet>

            <Formik initialValues={{name:'Tayfun',about:'',gender:2,accept:false,skills:['php','css'],avatar:''}} onSubmit={values => {console.log(values)}} >
                {({values}) => (
                    <Form>
                        <Input name={'name'} /> <br/>
                        <Field component={'textarea'} cols={20} rows={5} name={'about'} /> <br/>
                        <label>
                            <Field type={'checkbox'} name={'accept'}/>
                            Kuralları kabul ediyorum!
                        </label><br/>
                        <Field component={'select'} name={'gender'}>
                            <option value={1}>Kadın</option>
                            <option value={2}>Erkek</option>
                        </Field><br/>
                        <Field component={'select'} name={'skills'} multiple={true}>
                            <option value={'php'}>Php</option>
                            <option value={'css'}>Css</option>
                            <option value={'js'}>JavaScript</option>
                            <option value={'html'}>Html</option>
                        </Field><br/>
                        <Field type={'file'} name={'avatar'} /> <br/>
                        <button type="submit" disabled={!values.accept}>Gönder</button>
                    </Form>
                )}
            </Formik>

            Contact Page
        </div>
    );
}