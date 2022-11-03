import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { info } from "./Info";

function CustomForm() {

    //save the user's input
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }
    const textlHandler = (e) => {
        setMessage(e.target.value);
    }
    const hanldeSubmit = (e) => {
        e.preventDefault();
        console.log(email, message);
        alert('Thank you for your message!');
        const form = document.getElementById('contact-form');
        form.reset();

        fetch('https://instabackendclone2.herokuapp.com/api/email/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                body: message
            })
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))

    }
    

    return (
        <Container className='margin-130, w-50 mb-5'>
            <h1 className='text-center mb-5 mt-5'><span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Contact Me</span><span className='hand'>🤚</span></h1>
            <Form id="contact-form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={emailHandler}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={textlHandler}/>
                </Form.Group>
                Or use the links in the navbar to find me on social media
                <br />
                <Button variant="primary" type="submit" className='mt-4' onClick={hanldeSubmit}>
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default CustomForm;