# 🌐 Portfólio - João Renato Alves

Este é o meu portfólio profissional desenvolvido em **Next.js** e hospedado no **Vercel**, com pipeline **CI/CD**, monitoramento e práticas de **Site Reliability Engineering (SRE)**.

---
## 🚀 Tecnologias

- [Next.js](https://nextjs.org/) (Frontend e API)
- [Tailwind CSS](https://tailwindcss.com/) (Estilização)
- [Vercel](https://vercel.com/) (Hospedagem e Deploy)
- [GitHub Actions](https://github.com/features/actions) (CI/CD)

---
## ⚙️ CI/CD e SRE

O fluxo de entrega é definido em `.github/workflows/deploy.yml`.

### 🛡️ Monitoramento e Resposta a Incidentes (SRE)

O projeto expõe um **Endpoint de Health Check** para monitoramento externo:
```
/api/health
```
**Ações em caso de falha:** O monitoramento externo (ex: UptimeRobot) deve ser configurado para verificar este endpoint a cada 1 minuto e:
1. Enviar alerta por Email/WhatsApp/Telegram.
2. Abrir automaticamente uma Issue no GitHub via Webhook (para rastreio de incidentes).

### 🔑 Configurações CI/CD (Secrets)

Para que o deploy automático funcione, adicione estes Secrets no repositório GitHub (`Settings > Secrets and variables > Actions`):
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

---
## 🔧 Rodando Localmente

```bash
# 1. Instale as dependências (na pasta do projeto)
npm install

# 2. Rodar localmente
npm run dev

# 3. Acesse
http://localhost:3000
http://localhost:3000/api/health
```

---
## 📞 Contato

LinkedIn: [linkedin.com/in/jraalves](https://linkedin.com/in/jraalves)
GitHub: [github.com/jraalves](https://github.com/jraalves)
