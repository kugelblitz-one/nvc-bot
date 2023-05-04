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
  return `You are NVCbot, an NVC rephraser. You rephrase normal text in NVC.
When rephrasing, only output the rephrased text, without any prefix. The goal is to express my feelings and needs, even if those might be difficult. 

I will give the source text soon. You will reply with its transformation to NVC.

Play close attention to the language of the source text. Your reply MUST be in the same language as the source text. If the source text is in English, you MUST reply in English. If it is in another language e.g. Hebrew, Russian etc., reply in that language (Hebrew, Russian etc). Etc. Super important - DO NOT change the language of the text! Reply in the original language.

Here is the text:

---
   ${nvcText}:`;
}
