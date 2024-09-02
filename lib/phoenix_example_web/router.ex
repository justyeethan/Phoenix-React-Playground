defmodule PhoenixExampleWeb.Router do
  @moduledoc """
  This holds the router logic for different routes for Phoenix.
  We want to also hold all the route mappings in React Router if
  the route can be accessed through the frontend.
  """
  use PhoenixExampleWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :put_root_layout, html: {PhoenixExampleWeb.Layouts, :root}
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  # Creates a scope for API version 1
  scope "/api/v1", PhoenixExampleWeb do
    pipe_through :api
    # An example of a resource route for the API
    resources "/users", UrlController, except: [:new, :edit]
  end

  scope "/", PhoenixExampleWeb do
    pipe_through :browser

    # Frontend Page routes
    get "/*path", PageController, :home
  end

  # Enable LiveDashboard and Swoosh mailbox preview in development
  if Application.compile_env(:phoenix_example, :dev_routes) do
    # If you want to use the LiveDashboard in production, you should put
    # it behind authentication and allow only admins to access it.
    # If your application does not have an admins-only section yet,
    # you can use Plug.BasicAuth to set up some basic authentication
    # as long as you are also using SSL (which you should anyway).
    import Phoenix.LiveDashboard.Router

    scope "/dev" do
      pipe_through :browser

      live_dashboard "/dashboard", metrics: PhoenixExampleWeb.Telemetry
      forward "/mailbox", Plug.Swoosh.MailboxPreview
    end
  end
end
