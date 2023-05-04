import { useState } from "react"
// Write your code here
import { AppContainer, InputContainer, Heading, Text, Input, ErrorText } from "./styledComponents.js"

const PasswordValidator = () => {
    const [userInput, setFunction] = useState("")
    const onChangeInput = event => {
        setFunction(event.target.value)
    }
    const lengthOfPassword = userInput.length < 8
    return (
        <AppContainer>
            <InputContainer>
                <Heading>Password Validator</Heading>
                <Text>Check how strong and secure is your password</Text>
                <Input type="password" value={userInput} onChange={onChangeInput} />
                {lengthOfPassword && <ErrorText>Your password must be at least 8 characters</ErrorText>}
            </InputContainer>
        </AppContainer>
    )
}
export default PasswordValidator
