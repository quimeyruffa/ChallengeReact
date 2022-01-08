import styled from "styled-components"
import Table from "./components/Table"

// Context
import { useContext, useEffect } from 'react';
import UserContext from './context/user/UserContext';

const TableData = ({last_user}) => {
    const { user_data, reload  } = useContext(UserContext);

    setTimeout(() =>{
        reload();
    },120000)
    
    useEffect(() => {
    }, [user_data])
    return (
        <TableDataContainer>
            <Table data={user_data} last_data={last_user}/>
        </TableDataContainer>
    )
}

export default TableData;


const TableDataContainer = styled.div`
    display: flex;
    padding-top: 95px;
    justify-content: center;
    align-items: center;
`