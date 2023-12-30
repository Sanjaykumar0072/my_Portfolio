import React, { Component } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';

const failedToaster = () => toast.error('Some Field Is Empty (or) Captcha Does Not Match');
const successToaster = () => toast.success('We appreciate your interest and Will Get Back To You Soon🔥');


class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.inputRefs = [
            React.createRef(),
            React.createRef(),
            React.createRef()
        ];

        this.state = {
            loading: false
        };
    }

    componentDidMount() {
        emailjs.init(import.meta.env.VITE_PUBLIC_KEY);
    }

    doSubmit = (e) => {
        e.preventDefault(); // Prevent the form from submitting by default

        const inputsFilled = this.inputRefs.slice(0, 3).every(ref => ref.current.value.trim() !== '');

        if (inputsFilled) {
            this.handleSubmit();
        } else {
            failedToaster();
        }
    };


    handleSubmit = async (e) => {
        // Prevent form submission if it's triggered by an event
        if (e) {
            e.preventDefault();
        }

        const serviceId = import.meta.env.VITE_SERVICEID;
        const templateId = import.meta.env.VITE_TEMPLATEID;

        try {
            this.setState({ loading: true });

            await emailjs.send(serviceId, templateId, {
                from_name: this.inputRefs[0].current.value,
                from_email: this.inputRefs[1].current.value,
                from_message: this.inputRefs[2].current.value
            });

            // Clear the input fields
            this.inputRefs.forEach(ref => ref.current.value = '');
            successToaster();
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ loading: false });
        }
    };

    render() {
        const { loading } = this.state;

        return (
            <>
                <form className="contact-form">
                    <h2>Send me a message</h2>
                    <div className="inputs">
                    <input ref={this.inputRefs[0]} type="text" placeholder="Enter your Sweet name" name="name" size="30" required />
                    <input ref={this.inputRefs[1]} type="email" placeholder="abc@gmail.com" name="email" size="30" required />
                    <textarea ref={this.inputRefs[2]} name="message" id="" cols="30" rows="6" placeholder="Project Details🌟"></textarea>
                    </div>
                    <button
                        className={`btn ${loading ? 'loading' : ''}`}
                        disabled={loading}
                        onClick={(e) => this.doSubmit(e)}
                    >
                        {loading ? 'Sending..' : 'send'}
                    </button>

                    <Toaster
                        toastOptions={{
                            className: '',
                            duration: 3000,
                            style: {
                                background: '#2b2833',
                                color: '#c9ac8c',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                maxWidth: '500px',
                                margin: '0 auto',
                            }
                        }}
                    />
                </form>
            </>
        );
    }
}

export default ContactForm;
