const nodemailer = require("nodemailer");
const dotenv = require("dotenv")
dotenv.config()
const sendEmailCreateOrder = async(email,orderItems)=>{
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: process.env.MAIL_ACCOUNT,
          pass: process.env.MAIL_PASSWORD       }
      });
      let listItem = ''
      orderItems.forEach(order  => {
        listItem += `<div>
        <div>
          Bạn đã đặt sản phẩm <b>${order.name}</b> với số lượng: <b>${order.amount}</b> và giá là: <b>${order.price} VND</b></div>
          <div>Bên dưới là hình ảnh của sản phẩm</div>
        </div>`
    
      });
      const info = await transporter.sendMail({
        from: process.env.MAIL_ACCOUNT, // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Prodigy", // Subject line
        text: "Hello world?", // plain text body
        html: "<div><b>Bạn đã đặt hàng thành công tại Prodygi</b></div>", // html body
      })
}
module.exports= {
    sendEmailCreateOrder
}