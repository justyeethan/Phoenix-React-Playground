defmodule TestPlaygroundWeb.UrlController do
  use TestPlaygroundWeb, :controller

  alias TestPlayground.Urls
  alias TestPlayground.Urls.Url

  action_fallback TestPlaygroundWeb.FallbackController

  def index(conn, _params) do
    users = Urls.list_users()
    render(conn, :index, users: users)
  end

  def create(conn, %{"url" => url_params}) do
    with {:ok, %Url{} = url} <- Urls.create_url(url_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", ~p"/api/users/#{url}")
      |> render(:show, url: url)
    end
  end

  def show(conn, %{"id" => id}) do
    url = Urls.get_url!(id)
    render(conn, :show, url: url)
  end

  def update(conn, %{"id" => id, "url" => url_params}) do
    url = Urls.get_url!(id)

    with {:ok, %Url{} = url} <- Urls.update_url(url, url_params) do
      render(conn, :show, url: url)
    end
  end

  def delete(conn, %{"id" => id}) do
    url = Urls.get_url!(id)

    with {:ok, %Url{}} <- Urls.delete_url(url) do
      send_resp(conn, :no_content, "")
    end
  end
end
