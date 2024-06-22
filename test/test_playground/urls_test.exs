defmodule TestPlayground.UrlsTest do
  use TestPlayground.DataCase

  alias TestPlayground.Urls

  describe "users" do
    alias TestPlayground.Urls.Url

    import TestPlayground.UrlsFixtures

    @invalid_attrs %{username: nil, firstName: nil, lastName: nil, website: nil}

    test "list_users/0 returns all users" do
      url = url_fixture()
      assert Urls.list_users() == [url]
    end

    test "get_url!/1 returns the url with given id" do
      url = url_fixture()
      assert Urls.get_url!(url.id) == url
    end

    test "create_url/1 with valid data creates a url" do
      valid_attrs = %{username: "some username", firstName: "some firstName", lastName: "some lastName", website: "some website"}

      assert {:ok, %Url{} = url} = Urls.create_url(valid_attrs)
      assert url.username == "some username"
      assert url.firstName == "some firstName"
      assert url.lastName == "some lastName"
      assert url.website == "some website"
    end

    test "create_url/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Urls.create_url(@invalid_attrs)
    end

    test "update_url/2 with valid data updates the url" do
      url = url_fixture()
      update_attrs = %{username: "some updated username", firstName: "some updated firstName", lastName: "some updated lastName", website: "some updated website"}

      assert {:ok, %Url{} = url} = Urls.update_url(url, update_attrs)
      assert url.username == "some updated username"
      assert url.firstName == "some updated firstName"
      assert url.lastName == "some updated lastName"
      assert url.website == "some updated website"
    end

    test "update_url/2 with invalid data returns error changeset" do
      url = url_fixture()
      assert {:error, %Ecto.Changeset{}} = Urls.update_url(url, @invalid_attrs)
      assert url == Urls.get_url!(url.id)
    end

    test "delete_url/1 deletes the url" do
      url = url_fixture()
      assert {:ok, %Url{}} = Urls.delete_url(url)
      assert_raise Ecto.NoResultsError, fn -> Urls.get_url!(url.id) end
    end

    test "change_url/1 returns a url changeset" do
      url = url_fixture()
      assert %Ecto.Changeset{} = Urls.change_url(url)
    end
  end
end
