import { sendEmail } from './send-email';
sendEmail(
    'skyngthowhing@gmail.com',
       'Can we get there?',
    'Elon, here’s one destination you guys should consider [link]',
 { cc: 'liwentran@gmail.com' }
).then(() => {
    console.log('Your message was successfully sent!');
});