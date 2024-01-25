const { test, expect } = require("@playwright/test");

const baseurl = "https://reqres.in/api";

test("GET request - Get all users", async ({ request }) => {
    const response = await request.get(`${baseurl}/users`);
    const responseData = JSON.parse(await response.text());

    console.log(responseData);
  
    expect(response.status()).toBe(200);
    expect(responseData.data).toBeInstanceOf(Array);
    expect(responseData.data.length).toBeGreaterThan(0);
  
    // make assertions on the first user in the list
    const firstUser = responseData.data[0];
    expect(firstUser.id).toBeTruthy();
    expect(firstUser.first_name).toBeTruthy();
    expect(firstUser.last_name).toBeTruthy();
  });
  
  test("POST - Create New User", async ({ request }) => {
    const response = await request.post(`${baseurl}/users`, {
      data: {
        id: 1000,
      },
    });

    const repsonse_body = JSON.parse(await response.text());
    console.log(repsonse_body);
    expect(response.status()).toBe(201);
    expect(repsonse_body.id).toBe(1000);
    expect(repsonse_body.createdAt).toBeTruthy();
  });

  test("PUT - Edit user", async ({ request }) => {
    const response = await request.put(`${baseurl}/users/2`, {
      data: {
        name: "josipa",
        job: "IT",
      },
    });;

    const repsonse_body = JSON.parse(await response.text());
    console.log(repsonse_body);
    expect(response.status()).toBe(200);
    expect(repsonse_body.name).toBe('josipa')
    expect(repsonse_body.job).toBe('IT')
  });