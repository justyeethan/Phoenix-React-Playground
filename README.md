# React/Phoenix PhoenixExample

A boilerplate for a React/Phoenix application. This boilerplate is a fullstack application that uses Phoenix as the backend and React as the frontend. We are using Typescript for all React components.

## Table of Contents

- [Getting Started](#getting-started)
- [Renaming Your App](#renaming-your-app)
- [Adding Components](#adding-components)
- [Adding API Endpoints](#adding-api-endpoints)
- [Further Tasks:](#further-tasks)
- [Learn more](#learn-more)

## Getting Started

To start your Phoenix server:

  * Run `mix setup` to install and setup dependencies
  * Start up your postgres server in Docker with `docker-compose up -d` (NOTE: Make sure Docker is running in the background)
  * Start Phoenix endpoint with `mix phx.server` or inside IEx with `iex -S mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check Phoenix's deployment guides](https://hexdocs.pm/phoenix/deployment.html).

## Renaming Your App

Since you probably don't want to keep the name of this project as TestPlayground, we are using the incredibly useful rename functionality provided by [MainShayne233's Rename package](https://github.com/MainShayne233/rename). To rename, simply run the following command:

```bash
mix rename <OldAppName> <NewAppName> <old_app_name> <new_app_name>
```

Make sure you are following the conventions of the app, where OldAppName and NewAppName are in PascalCase, and the old_app_name and new_app_name are in snake_case.

Don't forget to migrate all of your tables and schemas using `mix ecto.migrate` after renaming your app.

## Adding Components

All React components are located in assets/js/components. We are currently using Typescript for all React components.

API routes can be added through controllers in our phoenix_example_web/controllers directory.

## Adding API Endpoints

With Phoenix, we can easily add API endpoints by creating a new controller. For example, if we wanted to add a new API endpoint for a user, we use the built in generator:

```bash
mix phx.gen.json Accounts User users name:string email:string
```

This is just an example of generating a new controller for a User. We can then add the necessary routes in our router.ex file.

router.ex
```elixir
scope "/api", PhoenixExampleWeb do
  pipe_through :api

  resources "/users", UserController, except: [:new, :edit]
end
```

You can consult the current implementation in this codebase for /api/users.

This route specifically grabs user data from the database and returns it as JSON. We can also submit data using a post request to this endpoint.

Once we run that bash command, we can run `mix ecto.migrate` to create the database table for our User model.

After that, your api route should be ready to go!

## Further Tasks:

- [ ] Add example authentication
- [ ] Create a user registration page
- [ ] Write better tests
- [X] ~~Generate a actual landing page~~
- [X] ~~Add TailwindCSS for styling~~
- [X] ~~Add ShadCN for our component Library~~
- [X] ~~Add useful hooks for fetching data using React Query~~


## Learn more

  * Official website: https://www.phoenixframework.org/
  * Guides: https://hexdocs.pm/phoenix/overview.html
  * Docs: https://hexdocs.pm/phoenix
  * Forum: https://elixirforum.com/c/phoenix-forum
  * Source: https://github.com/phoenixframework/phoenix
