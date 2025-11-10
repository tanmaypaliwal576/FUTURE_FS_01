// emails/UserContacted.js
export default function UserContacted(name, email, textarea) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Portfolio Contact</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f4f6f8;font-family:'Segoe UI',Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f6f8;padding:40px 0;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.1);">
            <tr>
              <td style="background-color:#2563eb;color:white;padding:20px 30px;text-align:center;">
                <h2 style="margin:0;font-size:24px;">📩 New Message from Your Portfolio</h2>
              </td>
            </tr>
            <tr>
              <td style="padding:30px;color:#333;">
                <p style="font-size:16px;margin-bottom:10px;">Hey <strong>Tanmay</strong> 👋,</p>
                <p style="font-size:15px;line-height:1.6;">You’ve received a new message through your portfolio contact form. Here are the details:</p>
                <table style="margin-top:20px;width:100%;border-collapse:collapse;">
                  <tr>
                    <td style="padding:8px;font-weight:bold;width:120px;">Name:</td>
                    <td style="padding:8px;background-color:#f8f9fa;border-radius:4px;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px;font-weight:bold;">Email:</td>
                    <td style="padding:8px;background-color:#f8f9fa;border-radius:4px;">${email}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px;font-weight:bold;vertical-align:top;">Message:</td>
                    <td style="padding:8px;background-color:#f8f9fa;border-radius:4px;white-space:pre-line;">${textarea}</td>
                  </tr>
                </table>
                <p style="margin-top:25px;font-size:14px;color:#666;">
                  Sent on: <strong>${new Date().toLocaleString()}</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td style="background-color:#f1f3f5;padding:15px;text-align:center;font-size:13px;color:#777;">
                This email was automatically sent from your portfolio website.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}
