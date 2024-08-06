import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css"

export default function RegistrationPage() {
    return(
    <div>
        <h2 className={css.formTitle}>Register your account</h2>
        <RegistrationForm />
    </div>)
}