# tdf.offline.no: Vite-bygg med forhåndsrendrede sider, servert av Caddy på port 3000, uten root.
# PDF-en bygges ikke her (GitHub Action legger den i releasen latest-pdf); /tdf-reise.pdf sendes dit.
FROM node:22.23.3-alpine AS build
WORKDIR /app
ENV PUPPETEER_SKIP_DOWNLOAD=1
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build:fast

FROM caddy:2.11.6-alpine
ENV XDG_DATA_HOME=/tmp/caddy-data XDG_CONFIG_HOME=/tmp/caddy-config
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/dist/ /srv/
USER 65534:65534
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -q --spider http://127.0.0.1:3000/healthz || exit 1
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
