# Serverless GraphQL API on AWS with real-time data

Built with SAM, AppSync and TypeScript.

## Free Tier

This application uses various AWS services and there are costs associated with these services after the Free Tier usage - please see the [AWS Pricing page](https://aws.amazon.com/free/?trk=9ab5159b-247d-4917-a0ec-ec01d1af6bf9&sc_channel=ps&ef_id=CjwKCAiA29auBhBxEiwAnKcSqjFPqsVKc8MDCTmVv3CTSig7NhPZGnhq0D0MFKvZpCDZxIiER3iMLhoC2LsQAvD_BwE:G:s&s_kwcid=AL!4422!3!645133561113!e!!g!!aws%20pricing!19579657595!152087369904&gclid=CjwKCAiA29auBhBxEiwAnKcSqjFPqsVKc8MDCTmVv3CTSig7NhPZGnhq0D0MFKvZpCDZxIiER3iMLhoC2LsQAvD_BwE&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all) for details. 

**You are responsible for any AWS costs incurred. No warranty is implied in this example.**

## Requirements
- [AWS Account](https://aws.amazon.com)
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)
- [pnPM](https://pnpm.io) or [npm](https://www.npmjs.com)

## Installation

In the project root directory, run:

```
pnpm install
```

## Scripts

- Rebuild types defined in GraphQL schema (useful during development)

  ```
  pnpm run build-schema
  ```

- Build resolvers

  ```
  pnpm run build-resolvers
  ```
- Build all (including SAM template)

  ```
  pnpm run build
  ```

## Deployment

1. Build resolvers and SAM template

   ```
   pnpm run build
   ```

2. Deploy
   ```
   sam deploy --guided
   ```
## Cleanup

Simply run:

```
sam destroy
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
