import './style.css'
import typescriptLogo from './assets/typescript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header>
  </header>
  <main>
    <div>
      <h1>Minalan</h1>
      <h2>DevOps Engineer  ·  Cloud Infrastructure  ·  SRE</h2>
    </div>
    <p>I'm Minalan. I build and operate cloud infrastructure at scale. I design the AWS environments and automation systems their production teams rely on every day. I'm based in Bengaluru, Karnataka.</p>
    <h3>Study</h3>
    <p>I studied at NIT Trichy — one of India's top technical institutes — graduating in May 2022 with first-class distinction. My engineering grounding gave me a rigorous systems-thinking approach I carry into infrastructure work every day.</p>
    <h3>Experience</h3>
    <p>At Microland, I own the cloud infrastructure layer for a multi-account AWS environment spanning 10+ accounts and 250+ EC2 instances. I designed the networking stack from scratch — VPCs, Transit Gateway, PrivateLink, NACLs, ALB/NLB — and codified all of it in Terraform and CloudFormation. I built the end-to-end observability platform on Grafana and CloudWatch, with SLO/SLA dashboards and alerting that meaningfully reduced MTTR across the estate.</p>
    <p> On the delivery side, I engineered the CI/CD pipelines (Jenkins + AWS CodePipeline) that brought client deployment cycles from two days down to four hours, enabling daily releases. I led blue-green OS upgrades across 140+ production instances with zero unplanned downtime, and automated multi-account inventory reporting in Python/Lambda — cutting a full day of manual work to ten seconds. I also led production on-call, owning incident management, root cause analysis, and the fixes that prevent recurrence.</p>
    <p>Beyond the day-to-day, I proposed and architected a hybrid file storage solution using Azure File Sync that reduced on-premises storage utilisation by 80%, and contributed to cloud migration initiatives moving workloads from on-prem to AWS. Security is woven through all of it — WAF, KMS, Secrets Manager, Qualys, and a disciplined least-privilege posture across every environment.</p>
    <h3>skills</h3>
  </main>
  <footer>
  </footer>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
