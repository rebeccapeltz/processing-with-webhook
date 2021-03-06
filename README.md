This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Serve Netlify functions locally

```bash
npm install -g netlify-cli
```

### create netlify.toml file
```toml
[build]
  publish = "./public"
  functions = "./functions"
```

To test functions locally: `netlify dev`

then open new terminal
```bash
netlify functions:invoke
```

## Deploy Next to Netlify
https://www.netlify.com/blog/2020/11/30/how-to-deploy-next.js-sites-to-netlify/


## Twilio SendGrid

https://app.sendgrid.com/

samples
https://rpeltz-webhook-processing.netlify.app/.netlify/functions/chuck-norris

## Use Cases

### Eager Upload/Explicit

We create derived assets on upload or after the upload has already occurred (explicit).

We can specify an eager_notification_url which is a webhook.  The response gets posted to this endpoint when the derived assets are complete.
You can use the free https://webhook.site or you can write a serverless function that implements an email API to send you email to notify you that the 
processing is complete.

### Multi Method

Create an animated image, video, or single PDF from a set of images.

## CREDITS

Image by <a href="https://pixabay.com/users/larisa-k-1107275/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=19830">Larisa Koshkina</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=19830">Pixabay</a>

Image by <a href="https://pixabay.com/users/roverhate-1759589/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1127666">Ronny Overhate</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1127666">Pixabay</a>


Image by <a href="https://pixabay.com/users/garoch-10307/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=142506">Garoch</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=142506">Pixabay</a>