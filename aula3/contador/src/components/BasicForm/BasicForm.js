import {useState} from 'react';
import {Formik, Form, ErrorMessage, Field} from 'formik'

function BasicForm() {
    const [amountOfUsers, setAmountOfUsers] = useState(1)

    const generateUserId = () => {
        setAmountOfUsers(amountOfUsers + 1)
    }

    const handleSubmit = (values, actions) => {
        generateUserId()
        setTimeout(() => { }, 100)
        values = {
            ...values,
            id: amountOfUsers
        }
        setTimeout(() => {
            //linha seguinte seria um pedido de HTTP de POST/PUT para guardar dados numa API
            alert(JSON.stringify(values));
            actions.setSubmitting(false);
        }, 1000);
    }

    const validation = (values) => {
        const errors = {};
        if (values.name.length < 5) {
            errors.name = 'Name should have at least 5 characters.'
        }
        if (values.password.length < 10) {
            errors.password = 'Password should have at least 10 characters'
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/.test(values.password)) {
            errors.password = 'Password should contain numbers, letters and special characters.'
        }
        
        return errors
    }

    return (
        <section>
            <h1>Form Section</h1>
            <Formik
                initialValues={{ name: '', password: '' }}
                onSubmit={(values, { setSubmitting }) => handleSubmit(values, { setSubmitting })}
                validate={(values) => validation(values)}
            >
                {({isSubmitting}) => (
                    <Form>
                        <div>
                            <label htmlFor='name'>Name</label>
                            <Field type='name' name='name'/>
                            <ErrorMessage name='name' component='p'/>
                        </div>
                        <div>
                            <label htmlFor='password'>Password</label>
                            <Field type='password' name='password'/>
                            <ErrorMessage name='password' component='p'/>
                        </div>
                        <div>
                            <button type="submit" disabled={isSubmitting}>Submit</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </section>
    )
}

export default BasicForm;