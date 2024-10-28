import { Vonage } from '@vonage/server-sdk'

const vonage = new Vonage({
  apiKey: "5b88e59d",
  apiSecret: "jj2dItiQ4Y1S1JdM"
});

const from = "Xstream Battle"
const to = "+918235681352"
const text = 'Hello Mota'

async function sendSMS() {
    await vonage.sms.send({to, from, text})
        .then(resp => { console.log('Message sent successfully'); console.log(resp); })
        .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
}

sendSMS();