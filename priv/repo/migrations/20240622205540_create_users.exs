defmodule TestPlayground.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :username, :string
      add :firstName, :string
      add :lastName, :string
      add :website, :string

      timestamps(type: :utc_datetime)
    end
  end
end
