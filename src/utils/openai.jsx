import OpenAI from "openai";

const openai = new OpenAI({
  apiKey:
    process.env["sk-proj-9BssxhoSR0I25AUYUBwKT3BlbkFJviH0lQap0bbwwuzK00ST"],
  dangerouslyAllowBrowser: true,
});

export default openai;
