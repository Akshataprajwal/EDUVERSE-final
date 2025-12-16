import nodemailer from 'nodemailer';

// Create transporter
const createTransporter = () => {
    return nodemailer.createTransporter({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
};

// Send email
export const sendEmail = async (options) => {
    try {
        const transporter = createTransporter();

        const mailOptions = {
            from: `EDUVERSE <${process.env.EMAIL_USER}>`,
            to: options.email,
            subject: options.subject,
            html: options.message
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Email sending failed:', error);
        throw new Error('Email could not be sent');
    }
};

// Send certificate email
export const sendCertificateEmail = async (studentEmail, studentName, courseName, certificatePath) => {
    const message = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
        .button { display: inline-block; background: #2563eb; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎓 Congratulations ${studentName}!</h1>
        </div>
        <div class="content">
          <h2>You've Earned Your Certificate!</h2>
          <p>We are thrilled to inform you that you have successfully completed the <strong>${courseName}</strong> course.</p>
          <p>Your dedication and hard work have paid off. Your certificate is attached to this email and is also available in your student dashboard.</p>
          <p>Keep learning and growing with EDUVERSE!</p>
          <a href="${process.env.FRONTEND_URL}/student/dashboard" class="button">View Dashboard</a>
          <p style="margin-top: 30px; color: #64748b; font-size: 14px;">
            Best regards,<br>
            The EDUVERSE Team
          </p>
        </div>
      </div>
    </body>
    </html>
  `;

    await sendEmail({
        email: studentEmail,
        subject: `🎓 Your ${courseName} Certificate - EDUVERSE`,
        message
    });
};
