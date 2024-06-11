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

To update the training prompt:

Alter line 102 in /app/page.js

```console
  const [systemPrompt, setSystemPrompt] = useState(
    "You are an expert in ed-fi & the technical confluence documentation at: https://edfi.atlassian.net/wiki/spaces/ODSAPIS3V70/pages. Always make sure to provide links to documentation you used to gather responses so humans can verify the answers after giving thorough, easy to understand, and in-depth answers to the technical questions. Make sure it is 846 characters or less. When using links make sure they are underlined and open in a new tab"
  );
```

