# Portfolio website

![GitHub release (latest by date)](https://img.shields.io/github/v/release/JanSzewczyk/janszewczyk.github.io)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/JanSzewczyk/janszewczyk.github.io)](https://github.com/JanSzewczyk/janszewczyk.github.io/pulls)
[![GitHub issues](https://img.shields.io/github/issues/JanSzewczyk/janszewczyk.github.io)](https://github.com/JanSzewczyk/janszewczyk.github.io/issues)
![GitHub Repo stars](https://img.shields.io/github/stars/JanSzewczyk/janszewczyk.github.io?style=social)

[![Publish 🚀](https://github.com/JanSzewczyk/janszewczyk.github.io/actions/workflows/publish.yml/badge.svg)](https://github.com/JanSzewczyk/janszewczyk.github.io/actions/workflows/publish.yml)

---

# Table of contents

- [About The App](#about-the-app)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
  - [Clone repo](#clone-repo)
  - [Install packages](#install-packages)
  - [Set envs](#set-envs)
  - [Run app](#run-app)
  - [Clone repo](#clone-repo)
  - [Build](#build)
- [Demo](#demo)
- [Changelog](#changelog)

# About The App

My portfolio website was created using [Next.JS](https://nextjs.org/) 13, [React](https://reactjs.org/) and the [Tailwindcss](https://tailwindcss.com/) library. The content of the website is managed using [Sanity.io](https://www.sanity.io/) CMS.

# Screenshots

<img width="1666" alt="image" src="https://user-images.githubusercontent.com/29024606/221841999-596a2322-df66-4338-89b8-48ff140e04a6.png">

# Technologies

Technologies used to build this application:

![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/JanSzewczyk/janszewczyk.github.io/react)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/JanSzewczyk/janszewczyk.github.io/next)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/JanSzewczyk/janszewczyk.github.io/sanity)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/JanSzewczyk/janszewczyk.github.io/next-sanity)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/JanSzewczyk/janszewczyk.github.io/react-hook-form)

![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/JanSzewczyk/janszewczyk.github.io/dev/typescript)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/JanSzewczyk/janszewczyk.github.io/dev/tailwindcss)

I also used my packages:

[![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/JanSzewczyk/janszewczyk.github.io/@szum-tech/design-system)](https://www.npmjs.com/package/@szum-tech/design-system)
[![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/JanSzewczyk/janszewczyk.github.io/dev/@szum-tech/semantic-release-preset)](https://www.npmjs.com/package/@szum-tech/semantic-release-preset)

# Setup

Below you find all scripts to clone, run and build this application.

## Clone repo

```bash
git clone https://github.com/JanSzewczyk/janszewczyk.github.io.git
```

## Install packages

```bash
npm install
# or
yarn
```

## Set envs

Before starting development server add all [environment variables](https://nextjs.org/docs/basic-features/environment-variables), all required variables are in [.env.example](https://github.com/JanSzewczyk/janszewczyk.github.io/blob/main/.env.example) file.

## Run app

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

```bash
npm run build
# or
yarn build
```

To run build application in local environment, use:

```bash
npm run start
# or
yarn start
```

# Demo

[See DEMO](https://janszewczyk.vercel.app)

# Changelog

The [changelog](https://github.com/JanSzewczyk/janszewczyk.github.io/blob/main/CHANGELOG.md) is regularly updated to reflect what's changed in each new release.
