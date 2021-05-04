FROM node:14-alpine as builder

LABEL stage=intermediate

COPY ./package.json ./project/
WORKDIR /project/
RUN npm i

COPY ./ /project/


RUN npm run build

FROM nginx:alpine

WORKDIR /
COPY --from=builder /project/out/ /usr/share/nginx/html/

HEALTHCHECK --interval=10s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost || exit 1

WORKDIR /usr/share/nginx/html/
