import { config } from "dotenv";
import OpenAI from "openai";
config();

const OPENAI_APIKEY = process.env.OPENAI_APIKEY;
const openai = new OpenAI({
  apiKey: OPENAI_APIKEY,
});

const completion = openai.chat.completions.create({
  model: "gpt-4o-mini",
  store: true,
  messages: [
    {"role": "user", "content": "write a haiku about ai"},
  ],
});

completion.then((result) => console.log(result.choices[0].message));