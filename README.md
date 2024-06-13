# Ed-Fi llama 3 chat

This is a [Next.js](https://nextjs.org/) app that demonstrates how to build a chat UI using the [Llama 3](https://replicate.com/meta/llama-3-70b-chat) language model and Replicate's [streaming API (private beta)](https://replicate.com/docs/streaming).

## Usage

Install dependencies: 

```console
npm install
```

Add your [Replicate API token](https://replicate.com/account#token) to `.env.local`:

```
REPLICATE_API_TOKEN=<your-token-here>
```

Run the development server:

```console
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

To update the training prompt modify:

https://github.com/jacobnoah/ed-fi-chatbot/blob/5b882f3f886c69432f83055bd3ccfac23d7a78a1/app/page.js#L101-L103

