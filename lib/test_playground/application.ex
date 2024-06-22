defmodule TestPlayground.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      TestPlaygroundWeb.Telemetry,
      TestPlayground.Repo,
      {DNSCluster, query: Application.get_env(:test_playground, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: TestPlayground.PubSub},
      # Start the Finch HTTP client for sending emails
      {Finch, name: TestPlayground.Finch},
      # Start a worker by calling: TestPlayground.Worker.start_link(arg)
      # {TestPlayground.Worker, arg},
      # Start to serve requests, typically the last entry
      TestPlaygroundWeb.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: TestPlayground.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    TestPlaygroundWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
