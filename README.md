# K3ntako.com

This is a resume website for me, Kentaro Kaneki, and can be visited at <a href="https://www.k3ntako.com" target="_blank">K3ntako.com</a>.

I am a full-stack developer based in New York, NY, and I am currently looking for a position in software engineering. I started in 2018 after graduating from Launch Academy, a full-stack web development bootcamp. Since then I co-founded Wakebird, a dragon boat team management website, and worked at 8th Light.

For more information, please visit the website or contact me at <a href="mailto:kentarokaneki@gmail.com" target="_blank">kentarokaneki@gmail.com</a>.

## Getting Started

1. `npm run dev` to start server and Webpack.
2. Make changes on branches based on the `staging` branch
   - For more details look at the Deployment section below.
3. Visit `localhost:3001`

## Deployment

This project is configured in Heroku to deploy automatically:

- Any changes `staging` branch on Github will be pushed to a <a href="https://k3ntako-staging.herokuapp.com/" target="_blank">staging environment</a>.
- Any changes `master` branch on Github will be pushed to the production environment, <a href="https://www.k3ntako.com" target="_blank">K3ntako.com</a>.
  - Do no directly commit to mater.

### Steps

1. Commit changes to `staging`.
2. Test changes in staging envornment.
   - Fix any issues (repeat steps 1 and 2 as necessary).
3. Merge staging into `master` via PR or following command on the `master` branch

```
  $ git merge staging
```

### Contact Me

- Email: <a href="mailto:kentarokaneki@gmail.com" target="_blank">kentarokaneki@gmail.com</a>.
- LinkedIn: <a href="https://www.linkedin.com/in/kentaro-kaneki/" target="_blank">https://www.linkedin.com/in/kentaro-kaneki/</a>.
