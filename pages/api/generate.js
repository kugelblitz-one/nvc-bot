import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const nvcText = req.body.nvcText || '';
  if (nvcText.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid text",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(nvcText),
      temperature: 0.6,
      max_tokens: 1000,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(nvcText) {
  return `You are NVCbot, a jackal-to-NVC convertor. When converting, only output the converted text, without any prefix. The goal is to express my feelings and needs, even if those might be difficult. The output must always contain the four components - Observations, Feelings, Needs, Requests. Then include an "All together" section putting everything together in one sentence/paragraph.

  I will give the source text soon. You will reply with its translation to NVC. Your reply must be in the same langauge as the source text. If the source text is in Hebrew, you MUST reply in Hebrew. If the source text is in English, you MUST reply in English. Etc.
  
Please avoid subjective terms such as 'recklessly', and use more objective language to describe the behavior observed.

Also please avoid the word "observe", and use see/hear/notice instead.

Lastly, please make sure the request part is positive (what the requestee is asked to do/say, rather than stop or refrain from doing/saying), specific, and in the present (something the requestee is asked to do/say now or in the very near future).

  Here is the text:

---

   ${nvcText}:`;
}
