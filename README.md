Translates "normal text" to [NVC](https://www.nvcanimation.org/).

Make sure your .env is initialized with the OPEN-AI key (copy .env.example to .env)

Start with:

npm install
npm run dev

site: http://www.nvcbot.ai/


## Testing

Testing is done with [vitest](https://vitest.dev/). 
To run tests:

```shell
npm test
```

The tests will run in a "watch" mode - when a files changes that is retated to the tests, they will run again. 
