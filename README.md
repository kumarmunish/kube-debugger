# Kube Debugger

Interactive troubleshooting tool for Kubernetes Deployments, Services, and Ingresses.
Pick what's broken, answer a few questions, land on the fix.

**Live:** https://kumarmunish.github.io/kube-debugger/

## How it works

Select one or more layers to debug (Deployment → Pods → Service → Ingress).
The tool walks you through the flowchart bottom-up with MCQ questions and the exact
`kubectl` commands to run at each step.

## Run locally

```bash
git clone https://github.com/kumarmunish/kube-debugger.git
cd kube-debugger
npx serve .        # or: python3 -m http.server 8080
```

Open http://localhost:3000 (or `:8080` if using Python).
No build step — it's a single HTML file.

---

References the [learnk8s troubleshooting guide](https://learnk8s.io/troubleshooting-deployments).
