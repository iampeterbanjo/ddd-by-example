# Domain Driven Design by example

Domain-Driven Design is an approach to software development that centers the development on programming a domain model that has a rich understanding of the processes and rules of a domain. - [Martin Fowler, 2020](https://www.martinfowler.com/bliki/DomainDrivenDesign.html).

## Goal

This starter kit attempts to implement DDD using Typescript in a way that is accessible - less jargon, more code and including the necessary documentation.

Front-end frameworks are very prescriptive about how project files are organised e.g. nextjs, create-react-app et al. so they do not offer a good learning opportunity for learning DDD. For this, and other reasons, this repo will focus on the back-end.

## Application

A very simple implementation of an e-Commerce store that will cover the following use cases:

- A user viewing a list of products
- A user adding products to their cart
- A user creating an order with the product(s) in their cart

## Layout

Folders are organised like this -

``` shell
├── src
  ├── config
  ├── modules
      ├── stores
      ├── orders
  └── shared
      ├── domain
      ├── infra
      └── utils
```

- config: system level concerns e.g. enviornment variables.
- modules: our application's bounded contexts. In our case they are - stores, orders.
- shared: features shared by all modules e.g. database, network etc.
  - domain: DDD requirements like events, value objects etc.
  - infra: database, models etc.

## Domain storytelling

Show how we came up with bounded contexts via [Domain storytelling](https://domainstorytelling.org/).

TBD
