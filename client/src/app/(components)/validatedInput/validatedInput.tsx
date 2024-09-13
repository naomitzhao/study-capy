import { useEffect, useState } from "react";
import styles from "./validatedInput.module.css";

interface ValidatedInputProps {
    field: string,
    chosenPassword?: string,
    setPassword?: Function,
    changeErrors: Function,
}

export default function ValidatedInput({ field, chosenPassword, setPassword, changeErrors } : ValidatedInputProps) {
    const EMAIL_REG_EXP: RegExp = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // min example: a@a
    const SPECIAL_CHAR_REG_EX: RegExp = /(?=.*[*.!@$%^&(){}[\]:;<>,.?\/~_+\-=|\\])/;
    const LOWERCASE_LETTER_REG_EX: RegExp = /(?=.*[a-z])/;
    const UPPERCASE_LETTER_REG_EX: RegExp = /(?=.*[A-Z])/;
    const NUMBER_REG_EX: RegExp = /(?=.*[0-9])/;

    const [errorMessages, setErrorMessages] = useState<Array<string>>([]);

    function validateEmail(value: string): Array<string> {
        if (EMAIL_REG_EXP.test(value)) {
            return [];
        } else {
            return ["Must enter valid email."];
        }
    }

    function validatePassword(value: string): Array<string> {
        const newErrorMessages: Array<string> = [];
        if (value.length < 8 || value.length > 32) {
            newErrorMessages.push("must be between 8 and 32 characters.");
        } 
        if (value.length == 0) {
            newErrorMessages;
        }
        if (!LOWERCASE_LETTER_REG_EX.test(value)) {
            newErrorMessages.push("must contain at least 1 lowercase letter.");
        }
        if (!UPPERCASE_LETTER_REG_EX.test(value)) {
            newErrorMessages.push("must contain at least 1 uppercase letter.");
        }
        if (!NUMBER_REG_EX.test(value)) {
            newErrorMessages.push("must contain at least 1 number.");
        }
        if (!SPECIAL_CHAR_REG_EX.test(value)) {
            newErrorMessages.push("must contain at least 1 special character.");
        }
        return newErrorMessages;
    }

    function validateConfirmPassword(value: string): Array<string> {
        const newErrorMessages: Array<string> = [];
        if (value != chosenPassword) {
            newErrorMessages.push("passwords must match.");
        }
        return newErrorMessages;
    }

    return (
        <div className={styles.validatedInput}>
            <input type={
                (field == "username") ? "text" : ((field == "confirm password") ? "password" : field )
            } 
            placeholder={field} 
            className={(errorMessages.length == 0) ? [styles.formInput].join(' ') : [styles.formInput, styles.invalidInput].join(' ')}
            onChange={(e) => {
                const pastErrors = errorMessages.length != 0;
                let currErrors: Array<string> = [];
                console.log(pastErrors);
                if (field == "email") {
                    currErrors = validateEmail(e.target.value);
                } else if (field == "password" && setPassword != null) {
                    setPassword(e.target.value);
                    currErrors = validatePassword(e.target.value);
                } else if (field == "confirm password") {
                    currErrors = validateConfirmPassword(e.target.value);
                }
                setErrorMessages(currErrors);
                if (currErrors.length != 0 && !pastErrors) {
                    changeErrors(1);
                } else if (currErrors.length == 0 && pastErrors) {
                    changeErrors(-1);
                }
            }}/>
            { errorMessages.map((message) => {
                return <p key={errorMessages.indexOf(message)} className={styles.errorMessage}>{message}</p>
            }) }
        </div>
    );
}