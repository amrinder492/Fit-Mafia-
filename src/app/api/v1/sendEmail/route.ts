import { EMAIL_PASS, EMAIL_USER } from '@/lib/constants';
import { EmailRequestBody, MailOptions } from '@/lib/types';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';


export async function POST(req: Request): Promise<Response> {
    try {
        const data: EmailRequestBody = await req.json();
        const { email, subject } = data;

        if (!email) {
            return new Response(JSON.stringify({ error: 'Email is required.' }), {
                status: 400,
            });
        }
        if (!subject) {
            return new Response(JSON.stringify({ error: 'Subject is required.' }), {
                status: 400,
            });
        }

        delete data?.subject;
        const textBody: string = Object.entries(data)
            .map(([key, value]) => `${key}: ${value}`)
            .join('\n');

            console.log('textBody:----', textBody)

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS,
            },
        });

        const mailOptions: MailOptions = {
            from: email,
            to: EMAIL_USER as string,
            subject: `${subject}`,
            text: `${textBody}`,
        };

        const result: { response: string } = await transporter.sendMail(mailOptions);
        console.log('Email sent:', result.response);

        return new Response(
            JSON.stringify({ message: 'Successfully Submitted' }),
            { status: 200 }
        );
    } catch (error) {
        console.error('Failed to send email:', error);

        // const errorMessage: string =
        //     error?.responseCode === 535
        //         ? 'Authentication failed. Check your email credentials.'
        //         : 'Something went wrong while sending the email.';

        return new Response(
            JSON.stringify({ message: 'Failed to send email'}),
            { status: 500 }
        );
    }
}
