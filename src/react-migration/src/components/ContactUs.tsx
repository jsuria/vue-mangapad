import React from "react";

type ContactUsProps = {
    children?: React.ReactNode;
};

type ContactFieldProps = {
    children?: React.ReactNode | React.ReactElement;
};

type FormTextAreaProps = {
    textId: string
    textLabel: string
    textName?: string
    placeHolder?: string
};

type FormInputProps = {
    inputId: string
    inputLabel: string
    inputName?: string
    placeHolder?: string
};

type FormButtonProps = {
    buttonId: string
    buttonLabel: string
    buttonAction?: () => void
}

function displayFeedback(){
    alert(document.getElementById('customer_feedback')?.textContent)
}

const FormInput = ({ inputName, inputId, inputLabel }: FormInputProps) => {
    return (
        <>
            <label>{ inputLabel }</label> 
            <input name={inputName} id={inputId} />
        </>
    );
}

const FormTextArea = ({ textId, textLabel, textName, placeHolder }: FormTextAreaProps) => {
    return (
        <>
            <label>{ textLabel }</label>
            <textarea id={textId} name={ textName }>{ placeHolder }</textarea>
        </>
    )
}

const FormButton = ({ buttonId, buttonLabel }: FormButtonProps) => {
    return (
        <button id={buttonId} onClick={ () => displayFeedback() } >{buttonLabel}</button>
    )
}

const ContactFields = ({ children }: ContactFieldProps) => {
    return ( 
            <>
                <FormInput inputLabel="First Name" inputId="first_name"/>
                <FormInput inputLabel="Last Name" inputId="last_name"/>
                <FormTextArea textId="customer_feedback" textLabel="Your Feedback" />
                <FormButton buttonId="submit_form" buttonLabel="Press Me" />
            </>
    );
} 


export function ContactUs({ children } : ContactUsProps){
    return (
        <ContactFields />
    );
}