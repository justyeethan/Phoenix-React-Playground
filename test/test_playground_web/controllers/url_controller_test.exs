defmodule TestPlaygroundWeb.UrlControllerTest do
  use TestPlaygroundWeb.ConnCase

  import TestPlayground.UrlsFixtures

  alias TestPlayground.Urls.Url

  @create_attrs %{
    username: "some username",
    firstName: "some firstName",
    lastName: "some lastName",
    website: "some website"
  }
  @update_attrs %{
    username: "some updated username",
    firstName: "some updated firstName",
    lastName: "some updated lastName",
    website: "some updated website"
  }
  @invalid_attrs %{username: nil, firstName: nil, lastName: nil, website: nil}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all users", %{conn: conn} do
      conn = get(conn, ~p"/api/users")
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create url" do
    test "renders url when data is valid", %{conn: conn} do
      conn = post(conn, ~p"/api/users", url: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, ~p"/api/users/#{id}")

      assert %{
               "id" => ^id,
               "firstName" => "some firstName",
               "lastName" => "some lastName",
               "username" => "some username",
               "website" => "some website"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, ~p"/api/users", url: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update url" do
    setup [:create_url]

    test "renders url when data is valid", %{conn: conn, url: %Url{id: id} = url} do
      conn = put(conn, ~p"/api/users/#{url}", url: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, ~p"/api/users/#{id}")

      assert %{
               "id" => ^id,
               "firstName" => "some updated firstName",
               "lastName" => "some updated lastName",
               "username" => "some updated username",
               "website" => "some updated website"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, url: url} do
      conn = put(conn, ~p"/api/users/#{url}", url: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete url" do
    setup [:create_url]

    test "deletes chosen url", %{conn: conn, url: url} do
      conn = delete(conn, ~p"/api/users/#{url}")
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, ~p"/api/users/#{url}")
      end
    end
  end

  defp create_url(_) do
    url = url_fixture()
    %{url: url}
  end
end
