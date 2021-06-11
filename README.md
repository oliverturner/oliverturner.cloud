![example image](static/images/screenshot.png)

[![Netlify Status](https://api.netlify.com/api/v1/badges/d0ad803b-7971-49f4-8e85-bd174003d38e/deploy-status)](https://app.netlify.com/sites/oliverturner/deploys)

## Features

- CSS optimised by [Critical](https://github.com/addyosmani/critical)
- Service Worker generated by [Workbox](https://developers.google.com/web/tools/workbox/)
- Hosted on [Netlify](https://www.netlify.com/)
- Headers checked with [Security Headers](https://securityheaders.com/?q=codedsignal.co.uk&followRedirects=on)
- Powered by [Eleventy](https://www.11ty.io/)…

## Commands

Develop: 
```sh
yarn dev
```

Preview: 
```sh
yarn test
```

Deploy: 
```sh
yarn build
```

## NEW

Get a JSON-encoded list of Netlify apps:
```sh
ntl sites:list --json > _data/sites-raw.json
```
Extract useful values by piping the raw `sites` data through [jq](https://stedolan.github.io/jq/)
```sh
jq '[.[] | {
  label:.custom_domain,
  url,
  screenshot_url,
  repo_url:.build_settings.repo_url,
  created_at,
  updated_at
}]' _data/sites-raw.json > _data/sites.json
```