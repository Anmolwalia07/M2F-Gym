import nodemailer from "nodemailer"
const sendmail=async(props)=>{
    const email=props.email;
    const subject=props.subject;
    const user=props.user;
    const path=props.path;
    const {userpassword}=props;
    const username=user.username;
    let transporter =nodemailer.createTransport({
        host: 'smtp.gmail.com',
        service:"Gmail",
        port: 587,
        secure: true, 
        auth: {
            user: 'anmolwalia025@gmail.com',
            pass: process.env.APP_PASSWORD || 'qhwp ants jrtw qaad'
        }
        });
        let mailOptions = {
            from: 'anmolwalia025@gamil.com',
            to: email,
            subject:subject ,
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Registration Confirmation</title>
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
                        .img{
                            margin-left:20px;
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
                        <h2>Hey <strong>${user.name}</strong>,</h2>
                        <p>Thank you for registering at M2F Gym! We're excited to have you as part of our community.</p>
                        
                        <h2>Your Registration Details:</h2>
                        <ul>
                            <li><strong>Username:</strong> ${username}</li>
                            <li><strong>Password:</strong>${userpassword}</li>
                        </ul>
                        <strong>Qr Code For Entry</strong><br><br>
                        <img class="img" src="cid:welcomeImage" alt="Welcome Image" />
                        <p>If you have any questions, feel free to contact us at <a href="mailto:anmolwalia025@gmail.com">anmolwalia025@gmail.com</a> or 999XXXXXXX.</p>

                        <p>Welcome aboard, and we look forward to seeing you soon!</p>

                        <div class="footer">
                            Thanks and Regards,<br>
                            The M2F Gym Team
                        </div>
                    </div>
                </body>
                </html>
            `,
            attachments: [
                {
                filename: 'Anmol.jpg',   
                path: path,        
                cid: 'welcomeImage'                      
                }
            ]
            };
        transporter.sendMail(mailOptions,(err,info)=>{
            if(err){    
                console.log(err)
            }
            else{
                console.log('Email sent: '+info.response)
            }
        })
}

export default sendmail;