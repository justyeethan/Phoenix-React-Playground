# React/Phoenix TestPlayground

To start your Phoenix server:

  * Run `mix setup` to install and setup dependencies
  * Start up your postgres server in Docker with `docker-compose up -d` (NOTE: Make sure Docker is running in the background)
  * Start Phoenix endpoint with `mix phx.server` or inside IEx with `iex -S mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](https://hexdocs.pm/phoenix/deployment.html).

## Adding Components

All React components are located in assets/js/components. We are currently using Typescript for all React components.

API routes can be added through controllers in our test_playground_web/controllers directory.

## Further Tasks:

- [X] Generate a actual landing page
- [X] Add TailwindCSS for styling
- [X] Add ShadCN for our component Library
- [ ] Add useful hooks for fetching data using React Query


## Learn more

  * Official website: https://www.phoenixframework.org/
  * Guides: https://hexdocs.pm/phoenix/overview.html
  * Docs: https://hexdocs.pm/phoenix
  * Forum: https://elixirforum.com/c/phoenix-forum
  * Source: https://github.com/phoenixframework/phoenix
