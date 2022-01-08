// CSS
import styled from 'styled-components';

// Components
import Formulario from "./components/Formulario";

// Context
import { useContext, useEffect } from 'react';
import UserContext from './context/user/UserContext';

const Home = ({SetLastUser}) => {
    const { getUserData , Login} = useContext(UserContext);
   
    
    useEffect(()=>{
        const log = async () => {
            await getUserData()
        }
        log()
    },[])

    const SetLastDataUser =(e)=> SetLastUser(e)

    return (
        <HomeContainer>
            <Formulario SetLastUser={SetLastDataUser}/>
        </HomeContainer>
    )
}

export default Home;

const HomeContainer = styled.div`
    display: flex;
    padding-top: 95px;
    justify-content: center;
    align-items: center;
`