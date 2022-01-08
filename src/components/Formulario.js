import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import UserContext from '../context/user/UserContext';



const Formulario = ({SetLastUser}) => {
    const { user_data, setUserData } = useContext(UserContext);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [ssn, setSsn] = useState('');
    const [formValidate, setFormValidate] = useState(true);
    const errors = {};

    useEffect(() => {
        CheckState();
    }, [name, lastName, address, ssn]);


    const Duplicate = () => {
        const p = user_data?.findIndex((m) => m.ssn === ssn)
        if (p !== -1) {
            return true;
        } else {
            return false;
        }
    }

    const FormatSsn = () => {
        const regex = /^\d{3}-\d{2}-\d{4}$/
        if (regex.test(ssn) === false) {
            return true;
        }else{
            return false;
        }

    }
    function validString(item) {
        return typeof item === 'string' && item.trim().length > 1
    }

    const Clear = () => {
        setName('')
        setLastName('')
        setAddress('')
        setSsn('')
    }

    const CheckState = () => {
        if (!validString(name) || !validString(lastName) || !validString(address)) {
            errors["input"] = 'Invalid first name, last name or address';

        }

        if (isEmpty(errors) && !Duplicate() && !FormatSsn()) {
            setFormValidate(false)
        } else {
            setFormValidate(true)
        }
    }

    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    const formatSnn = (value) => {
        var val = value.replace(/\D/g, '');
        var newVal = '';
        if (val.length > 4) {
            setSsn(val);
        }
        if ((val.length > 3) && (val.length < 6)) {
            newVal += val.substr(0, 3) + '-';
            val = val.substr(3);
        }
        if (val.length > 5) {
            newVal += val.substr(0, 3) + '-';
            newVal += val.substr(3, 2) + '-';
            val = val.substr(5);
        }
        newVal += val;
        setSsn(newVal.substring(0, 11));
    }

    const Submit = e => {
        e.preventDefault();
        const user ={name, lastName, address, ssn}
        SetLastUser(user)
        setUserData(name, lastName, address, ssn)
    }

    return (
        <FormContainer>
            <Title>
                <h1>Welcome!</h1>
            </Title>
            <ContainerGroup valid={validString(name)}>
                <InputContainer placeholder="First Name" onChange={(e) => setName(e.target.value)} value={name} type="text" />
                <p>Invalid First Name</p>
            </ContainerGroup>

            <ContainerGroup valid={validString(lastName)}>
                <InputContainer placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" />
                <p>Invalid Last Name</p>
            </ContainerGroup>

            <ContainerGroup valid={validString(address)}>
                <InputContainer placeholder="Address Name" onChange={(e) => setAddress(e.target.value)} value={address} type="text" />
                <p>Invalid Address</p>
            </ContainerGroup>

            <ContainerGroup valid={!FormatSsn()} repeat={!Duplicate()}>
                <InputContainer placeholder="SSN" onChange={(e) => formatSnn(e.target.value)} value={ssn} type="text" />
                <p>Invalid SSN</p>
                <div>
                    <span>Duplicate SSN</span>
                </div>
            </ContainerGroup>
            <ButtonContainer >
                <Button onClick={Clear}>Reset</Button>
                <Button onClick={e => Submit(e)} formValidate={formValidate} > Save</Button>
            </ButtonContainer>
        </FormContainer>
    )
}

export default Formulario;


const ContainerGroup = styled.div`
    p{
        margin: 0;
        padding: 0;
        display: ${props => props.valid ? 'none' : ''};
        color:darkred;
    }
    span{
        margin: 0;
        padding: 0;
        display: ${props => props.repeat ? 'none' : ''};
        color:darkred;
    }
    height: 70px;
`

const FormContainer = styled.form`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgb(195,84,86);
    background: linear-gradient(0deg, rgba(195,84,86,1) 16%, rgba(165,79,79,1) 100%);
    border-radius: 5%;
    box-shadow: -1px 18px 26px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: -1px 18px 26px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 18px 26px 0px rgba(0,0,0,0.75);
`

const InputContainer = styled.input`
    outline: none;
    background:transparent;
    border: none;
    border-bottom: 2px solid whitesmoke;
    color:white;
    height: 40px;
    width: 300px;
    padding-left: 1em;    
    ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
    font-weight: 700;
    font-size: 14px;
    font-family:'Lato', sans-serif;
  }
`

const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        color:white;
    }

    `
const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`


const Button = styled.button`
        border: 2px solid whitesmoke;
        background:transparent;
        font-family: 'Lato', sans-serif;
        border-radius:5px;
        font-weight: 300;
        width: 130px;
        height:40px;
        margin: 1em;
        opacity: ${props => props.formValidate ? 0.4 : 1};
        color:white;
        transition: all .4s ease-in-out;
        &:hover{
            background: ${props => props.formValidate ? '' : 'white'};
            color:${props => props.formValidate ? '' : 'rgb(195,84,86)'};
        }
`