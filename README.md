[![Resultant Logo](/public/resultant-logo.png)](https://www.resultant.com)

# The Ed-Fi Tech Doc (Llama 3 powered chatbot)

This project is a [Next.js](https://nextjs.org/) application that demonstrates how to build a chatbot UI using the [Llama 3](https://replicate.com/meta/llama-3-70b-chat) language model and Replicate's [streaming API (private beta)](https://replicate.com/docs/streaming).

## Prepare Development Environment

- Install [Node.js](https://nodejs.org/en/download/prebuilt-installer) _*(Minimum Version : 18.17.0 to support Next JS)*_
- Pull this repository to your local machine
- Create a file called `.env.local` in the project's root directory

## Usage

- Install dependencies:

```console
npm install
```

- Add your [Replicate API token](https://replicate.com/account#token) to `.env.local`:

```
REPLICATE_API_TOKEN=<your-token-here>
```

- Run the development server:

```console
npm run dev
```

- Open [http://localhost:3000](http://localhost:3000) with a web browser. 
