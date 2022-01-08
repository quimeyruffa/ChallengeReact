import styled from "styled-components";

const Table = ({ data, last_data}) => {
    const Duplicate = () => {
        const p = data?.findIndex((m) => m.ssn === last_data.ssn)
        if (p !== -1) {
            return true;
        } else {
            return false;
        }
    }
    
    return (
        <TableContainer>
            <Row>
                <div><h4>First Name</h4></div>
                <div><h4>Last Name</h4></div>
                <div><h4>Address</h4></div>
                <div><h4>SSN</h4></div>
            </Row>
            {data?.map(item => {
                return(
                <Row key={item.ssn}>
                    <div><h4>{item.firstName}</h4></div>
                    <div><h4>{item.lastName}</h4></div>
                    <div><h4>{item.address}</h4></div>
                    <div><h4>{item.ssn}</h4></div>
                </Row>)
            })}
            {last_data && !Duplicate() ?
                <Row key={last_data?.ssn}>
                    <div><h4>{last_data?.name}</h4></div>
                    <div><h4>{last_data?.lastName}</h4></div>
                    <div><h4>{last_data?.address}</h4></div>
                    <div><h4>{last_data?.ssn}</h4></div>
                </Row> : '' 
            }
                
        </TableContainer>
    )
}

export default Table;

const TableContainer = styled.div`
    width: 800px;
    display: flex;
    min-height: 500px;
    max-height: 500px;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    overflow-x: hidden;
    padding-top: 1em;
    background: rgb(195,84,86);
    background: linear-gradient(0deg, rgba(195,84,86,1) 16%, rgba(165,79,79,1) 100%);
    border-radius: 5px;
    box-shadow: -1px 18px 26px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: -1px 18px 26px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 18px 26px 0px rgba(0,0,0,0.75);
`

const Row = styled.div`
    display: flex;
    flex-direction:row;
    div{
        width: 200px;
        display: flex;
        flex-direction:row;
        align-items: center;
        justify-content: center;
        height: ${props => props.height ? '200px' : ''};
        padding-bottom: 10px;
        border-bottom: 2px solid whitesmoke;
        margin: 0;
        >h4{
            margin: 0;
            color: whitesmoke;
            font-weight: 700;
            font-family: 'Lato', sans-serif;
        }
    }
`