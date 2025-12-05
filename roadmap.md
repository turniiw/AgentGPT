# Roadmap (H1 2026)

This roadmap captures the highest-impact initiatives we should deliver next. It focuses on making AgentGPT more reliable in production, easier to extend, and better at solving complex, multi-step goals for real teams.

## Strategic Themes

1. **Agent Reliability & Autonomy** – reduce failure rates, add long-horizon planning, and keep agents grounded with verifiable context.
2. **Enterprise Readiness** – ship the features procurement and security teams need: SSO, auditability, usage controls, and SLAs.
3. **Developer & Ops Experience** – shorten setup time, strengthen tooling, and provide deep observability for deployed agents.
4. **Ecosystem Expansion** – grow the marketplace of tools, templates, and integrations so agents can act across more domains.

## Priority Initiatives

### 1. Agent Reliability & Autonomy
- **Hierarchical planning engine v2**: introduce task trees, checkpoints, and recovery policies to cut abandonment rate by 40%.
- **Fact-grounded reasoning loop**: cache recent tool outputs, run contradiction checks, and auto-verify search-derived facts.
- **Long-running task orchestration**: allow agents to pause/resume via durable queues (Redis + worker pods) with state snapshots.
- **Evaluation harness**: nightly regression suite with synthetic missions; publish win/loss dashboards in Grafana.

### 2. Enterprise Readiness
- **SSO & SCIM**: native Okta + Azure AD apps, automatic user/group provisioning.
- **Fine-grained policy engine**: role/goal scoping, token budgets, API/tool allowlists per workspace.
- **Audit & retention**: immutable event log, export to SIEM via webhooks, configurable data retention windows.
- **Compliance hardening**: SOC2 controls gap assessment, secrets rotation automation, VPC peering option for managed cloud.

### 3. Developer & Ops Experience
- **One-command bootstrap**: rewrite CLI to scaffold env vars, Docker profiles, Prisma migrations, and FastAPI seeds in <5 minutes.
- **Local-first story**: ship devcontainer + tiltfile for synced hot reload across Next.js and FastAPI.
- **Observability pack**: OpenTelemetry tracing, structured logs, and redaction filters; document dashboards for core KPIs.
- **Plugin SDK beta**: typed hooks, testing harness, and publishing flow so contributors can add tools without touching core repos.

### 4. Ecosystem Expansion
- **Tool marketplace**: curated catalog with metadata (auth, cost, latency) and install/upgrade UX inside the app.
- **Template gallery**: opinionated agent presets (researcher, marketer, ops analyst) with goal scaffolds and success metrics.
- **Partner integrations**: prioritize Salesforce, Notion, Jira, Slack, and Snowflake connectors with OAuth installers.
- **Community programs**: monthly build relays, public roadmap sync, and contributor success office hours.

## Timeline & Milestones (proposed)

| Month | Milestone |
|-------|-----------|
| Jan 2026 | Ship CLI/bootstrap rewrite, launch evaluation harness alpha |
| Feb 2026 | Release hierarchical planner v2, enable OTel tracing + dashboards |
| Mar 2026 | Deliver SSO/SCIM GA, roll out policy engine and audit log exports |
| Apr 2026 | Marketplace + template gallery beta, plugin SDK public beta |
| May 2026 | Long-running orchestration GA, partner integrations (Salesforce/Jira/Slack) |
| Jun 2026 | Compliance/SOC2 readiness package, community roadmap summit |

## Success Metrics

- Task completion success: **+35%** relative lift on benchmark missions.
- Setup time: **<10 minutes** from repo clone to working stack.
- Enterprise adoption: **10** design partners live in production environments.
- Ecosystem: **25** certified tools and **15** community-built templates in marketplace.

## Dependencies & Risks

- Planner v2 requires updated memory schema and token-budget forecasting.
- Policy engine depends on finishing unified auth model between Next.js and FastAPI services.
- OTel/observability work needs infra budget for long-term log retention.
- Marketplace launch contingent on finalizing plugin security guidelines and review flow.

## Next Steps

1. Align stakeholders on scope & sequencing; lock budget and owners.
2. Flesh out product briefs per initiative with user research + design artifacts.
3. Break epics into deliverables in Linear/Jira with engineering estimates.
4. Schedule fortnightly roadmap reviews to track blockers and adjust priorities.
