defmodule PhoenixExample.Urls.Url do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :username, :string
    field :firstName, :string
    field :lastName, :string
    field :website, :string

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(url, attrs) do
    url
    |> cast(attrs, [:username, :firstName, :lastName, :website])
    |> validate_required([:username, :firstName, :lastName, :website])
  end
end
