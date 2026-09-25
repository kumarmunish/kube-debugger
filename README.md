# Kube Debugger

Interactive troubleshooting tool for Kubernetes Deployments, Services, and Ingresses.
Pick what's broken, answer a few questions, land on the fix.

## How it works

Select one or more layers to debug (Deployment → Pods → Service → Ingress).
The tool walks you through the flowchart bottom-up with MCQ questions and the exact
`kubectl` commands to run at each step.

---

Built from the [learnk8s troubleshooting guide](https://learnk8s.io/troubleshooting-deployments).
