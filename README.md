# Domain Driven Design by example

Domain-Driven Design is an approach to software development that centers the development on programming a domain model that has a rich understanding of the processes and rules of a domain. - [Martin Fowler, 2020](https://www.martinfowler.com/bliki/DomainDrivenDesign.html).

## Goal

We'll build a simple implementation of a cinema where movie-goers can watch a movie. This starter kit attempts to implement DDD using Typescript in a way that is accessible - less jargon, more code and including the necessary documentation.

Front-end frameworks are very prescriptive about how project files are organised e.g. nextjs, create-react-app et al. so they do not offer a good learning opportunity for learning DDD. For this, and other reasons, this repo will focus on the back-end.

## Layout

Folders are organised like this -

```shell
├── src
  ├── setup
  ├── modules
      ├── stores
      ├── orders
  └── shared
      ├── domain
      ├── data
      ├── network
      └── utils
```

- setup: system level concerns e.g. enviornment variables.
- modules: our application's bounded contexts. In our case they are - stores, orders.
- shared: features shared by all modules e.g. database access, networking etc.
  - domain: DDD requirements like events, value objects etc.
  - data: database, models etc.
  - network: http, graphql etc.
  - utils: other things etc.

## Process

1. [Domain storytelling](./docs/Domain-storytelling.md)
