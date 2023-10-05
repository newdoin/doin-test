FROM podman/base

RUN apt-get update && apt-get install -y nodejs

WORKDIR /app

COPY . .

CMD ["node", "app.js"]
