import { addonsById, planFeatureData, plansData, renewalEstimate, subscriptionData, updateSubscription } from "./mocks/mockData"

const subscriptionId = 1
const activities = {
  getSubscriptions: {
    method: 'GET',
    url: `ubx/organisations/-/subscriptions`,
    response: subscriptionData
  },
  getBundleFeatureMatrix: {
    method: 'GET',
    url: `ubx/plans/-/features/${subscriptionId}`,
    response: planFeatureData
  },
  getSubscriptionRenewalEstimate: {
    method: 'GET',
    url: `ubx/subscriptions/${subscriptionId}/renewal_estimate`,
    response: renewalEstimate
  },
  getPlans: {
    method: 'GET',
    url: `ubx/plans`,
    response: plansData
  },
  getAddonsByIds: {
    method: 'POST',
    url: `ubx/addons/getAddonsById`,
    response: addonsById
  },
  getSubscriptionEstimate: {
    method: 'POST',
    url: 'ubx/estimates/update_subscription',
    response: updateSubscription
  },
}
export default activities
