This is a Web development challenge by Revive Superfoods where a [wireframe](https://www.figma.com/file/TgoWK7cqR67b1XczeRqYZZ/WEB-DEV-TEST?node-id=1307%3A1076) was provided and then recreated using Next.js, Emotion's Styled Components, and Mailchimp for the email subscribe form.
## Live Version
checkout the live version [here](https://revive-web-dev-test.vercel.app/)
### 1. To Run Locally

First, install dependencies
```bash
npm install
```

### 2. Set up Mailchimp for email subscriptions
Second, create a [mailchimp](https://www.mailchimp.com) account, then go to Create, open the  'Sign up form' and click on the 'Embedded Form' option. 

Click Begin.

In the "Copy/Paste Onto Your Site" section look for the form element:
```
<form action="https://gmail.us6.list-manage.com/subscribe/post?u=8ad0ea4efed0d98add6eb2617&amp;id=******" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
```
copy the string inside the action attribute

In your root folder create a .env.local file on the root of your folders

and create ```NEXT_PUBLIC_MAILCHIMP_URL``` environment variable and assign it the string you just copied from mailchimp:

```
NEXT_PUBLIC_MAILCHIMP_URL=https://gmail.us6.list-manage.com/subscribe/post?u=8ad0ea4efed0d98add6eb2617&amp;id=******
```

### 3. Run the server

```bash
npm run dev
```

### 4. Open with your browser
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

