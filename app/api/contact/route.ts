'use server'

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function SendMessageContact(formData:FormData){
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string

    if (!name || !email || !subject || !message) {
        return{
            success : false,
            message: "Please fill in all fields.",
        }
    }
    try{
        await resend.emails.send({
            from : 'Shopflow <onboarding@resend.dev>',
            to:process.env.CONTACT_EMAIL!,
            replyTo : email,
            subject:subject,
            text:`
            Name:${name}
            Eamil:${email}

            Message:${message}
            `
        }
    )
    return{
        success:true,
        message:'Message sent successfully'
    }
    }catch(erorr){
        console.log(erorr);
        return{
            success:false,
            message:'Something is wrong'
        }
    }
}