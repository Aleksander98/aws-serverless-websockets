import {
  Context,
  NONERequest,
  AppSyncIdentityCognito,
  util,
  extensions,
} from '@aws-appsync/utils';
import { Event } from '../types/graphql-schema';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars, no-unused-vars
export function request(ctx: Context<any>): NONERequest {
  return { payload: null };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function response(ctx: Context<any, object, object, object, Event>) {
  const identity = ctx.identity as AppSyncIdentityCognito;
  const filter = { userId: { eq: identity.sub } };

  extensions.setSubscriptionFilter(util.transform.toSubscriptionFilter(filter));

  // Important: return null in the response.
  return null;
}
