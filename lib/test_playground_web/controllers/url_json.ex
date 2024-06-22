defmodule TestPlaygroundWeb.UrlJSON do
  alias TestPlayground.Urls.Url

  @doc """
  Renders a list of users.
  """
  def index(%{users: users}) do
    %{data: for(url <- users, do: data(url))}
  end

  @doc """
  Renders a single url.
  """
  def show(%{url: url}) do
    %{data: data(url)}
  end

  defp data(%Url{} = url) do
    %{
      id: url.id,
      username: url.username,
      firstName: url.firstName,
      lastName: url.lastName,
      website: url.website
    }
  end
end
