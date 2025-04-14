import nodemailer from "nodemailer"
const sendDemoMails=({email,name,demoType})=>{
    const transporter=nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        service:"Gmail",
        secure:true,
        auth:{
            user:'anmolwalia025@gmail.com',
            pass:process.env.APP_PASSWORD
        }
        
    })
    const mailOptions={
        from:'anmolwalia025@gmail.com',
        to: email,
        subject:`Demo Class Booking Confirmation`,
        html:`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f8f8f8;
                    color: #333;
                    padding: 20px;
                }
                .container {
                    max-width: 600px;
                    margin: auto;
                    background: #fff;
                    padding: 20px;
                    border-radius: 5px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                h1 {
                    color: #d7d4d4;
                }
                p {
                    line-height: 1.5;
                }
                .footer {
                    margin-top: 20px;
                    font-size: 0.9em;
                    color: #888;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Welcome to M2F Gym !</h1>
                <h2>Hey <strong>${name}</strong>,</h2>
                <p>Thank you for booking a demo class for<strong> ${demoType}</strong> at M2F Gym! We are excited to welcome you.</p>

                <h2>Your Booking Details:</h2>
                <ul>
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Demo Class Date:</strong>Upcoming Sunday</li>
                </ul>

                <p>If you have any questions or need to reschedule, don't hesitate to contact us.</p>

                <p>If you have any questions, feel free to contact us at <a href="mailto:anmolwalia025@gmail.com">anmolwalia025@gmail.com</a> or 99XXXXXXXX</p>

                <p>We look forward to seeing you in class!</p>

                <div class="footer">
                    Thanks and Regards,<br>
                    The M2F Gym Team
                </div>
            </div>
        </body>
        </html>
       `
    }

    transporter.sendMail(mailOptions,(err,info)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log('Email sent: '+info.response)
        }
    })
}

export default sendDemoMails;