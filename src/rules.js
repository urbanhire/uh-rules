const PUBLISH_JOBS_FREE = 1
const PUBLISH_JOBS_STARTER = 3
const PUBLISH_JOBS_STANDARD = 5
const PUBLISH_JOBS_PROFESSIONAL = 10
const PUBLISH_JOBS_ENTERPRISE = 999

// const COMPANY_PLAN_ARRAY        = ['beta', 'trial', 'free', 'starter', 'standard', 'profesional', 'enterprise']
const COMPANY_PLAN_BETA = 'beta'
const COMPANY_PLAN_TRIAL = 'trial'
const COMPANY_PLAN_FREE = 'free'
const COMPANY_PLAN_STARTER = 'starter'
const COMPANY_PLAN_STANDARD = 'standard'
const COMPANY_PLAN_PROFESSIONAL = 'professional'
const COMPANY_PLAN_ENTERPRISE = 'enterprise'

module.exports = {
  checkLimit: function (plan, currentPublishCount) {
    var allowToCreate = false

    switch (plan) {
      case COMPANY_PLAN_TRIAL:
        allowToCreate = true
        break

      case COMPANY_PLAN_BETA:
        allowToCreate = true
        break

      case COMPANY_PLAN_FREE:
        allowToCreate = currentPublishCount < PUBLISH_JOBS_FREE
        break

      case COMPANY_PLAN_STARTER:
        allowToCreate = currentPublishCount < PUBLISH_JOBS_STARTER
        break

      case COMPANY_PLAN_STANDARD:
        allowToCreate = currentPublishCount < PUBLISH_JOBS_STANDARD
        break

      case COMPANY_PLAN_PROFESSIONAL:
        allowToCreate = currentPublishCount < PUBLISH_JOBS_PROFESSIONAL
        break

      case COMPANY_PLAN_ENTERPRISE:
        allowToCreate = currentPublishCount < PUBLISH_JOBS_ENTERPRISE
        break

      default:
        allowToCreate = false
    }

    return allowToCreate
  }
}
