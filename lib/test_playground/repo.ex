defmodule TestPlayground.Repo do
  use Ecto.Repo,
    otp_app: :test_playground,
    adapter: Ecto.Adapters.Postgres
end
