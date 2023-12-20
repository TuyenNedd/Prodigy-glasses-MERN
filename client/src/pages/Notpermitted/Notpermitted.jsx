
import { Button, Result } from 'antd'
import { useNavigate} from 'react-router-dom'
const Notpermitted = () => {
    const navigate =  useNavigate()
    return (
        <>
            <Result
                status="403"
                title="403"
                subTitle="Sorry, you do not have permission to access this page "
                extra={<Button style={{backgroundColor:'#4168E1' ,color:'white' ,border:'1px solid white' , height:'40px', borderRadius:'5px'}} type="primary" onClick={ ()=> navigate('/') }>Back Home</Button>}
            />
        </>
    )
}

export default Notpermitted