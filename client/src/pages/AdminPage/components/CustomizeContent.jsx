import {
  UserOutlined,
  AppstoreOutlined,
  ShoppingCartOutlined,
  CommentOutlined,
  ArrowRightOutlined
} from "@ant-design/icons";
import './style.scss'

const CustomizedContent = (props) => {
  const { data, setKeySelected } = props;

  return (
    <div style={{ display: "flex", gap: "40px", justifyContent: "center" }}>
      {(data && Object.keys(data))?.map((item) => {
        return (
          <div className="item"  key={Math.random()}>
              <div className="top">
                <div className="left" style={{display:'flex' ,flexDirection:'column' , justifyContent:'center'}}>
                  <span style={{color:'black', fontWeight:'bold', fontSize:'35px' }}>  {data[item]}</span>
                  <span style={{color:'grey' , textTransform:'uppercase'}}> {item}</span>
                </div>
                <div className="right">
                <div style={{ borderRadius:'25px', backgroundColor:'#F6F7F9' , padding:'16px'}}>
                  {item === "users" && <UserOutlined style={{fontSize:'29px' , color:'blue'}} />}
                  {item === "products" && <AppstoreOutlined  style={{fontSize:'29px' , color:'blue'}}/>}
                  {item === "orders" && <ShoppingCartOutlined  style={{fontSize:'29px' , color:'blue'}}/>}
                  {item === "comment" && <CommentOutlined  style={{fontSize:'29px' , color:'blue'}}/>}         
                </div>
                </div>
              </div>
              <div className="bot"  onClick={() => setKeySelected(item)}> 
                  {item === "users" && <span style={{color:'blue' }}  onClick={()=> {setKeySelected('users')}}>View all users</span> }
                  {item === "products" && <span  style={{color:'blue' }} onClick={()=> {setKeySelected('products')}}>View all products</span>}
                  {item === "orders" &&<span  style={{color:'blue' }} onClick={()=> {setKeySelected('orders')}}>View all orders</span> }
                  {item === "comments" && <span  style={{color:'blue' }} onClick={()=> {setKeySelected('comments')}}>View all comments</span> }         
              
              
              <ArrowRightOutlined  className="icon" />
              </div>
            </div>

        )
       })}
          



    </div>
  );
};

export default CustomizedContent;
