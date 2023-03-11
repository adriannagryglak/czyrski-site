import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const basicSchema = yup.object().shape({
    name: yup.string().required("prosimy podać imię"),
    email: yup.string().email("niepoprawny adres e-mail").required("prosimy podać adres email"),
    tel: yup.string().matches(phoneRegExp, "niepoprawny numer telefonu"),
    message: yup.string().min(10, "wiadomość za krótka").required("prosimy wpisać wiadomość"),
    agreement: yup.bool().oneOf([true], 'prosimy wyrazić zgodę na przetwarzanie danych'),
});