/*  ______    ___    __    ___     ___
   /  __  \  |   |  |__|   \  \   /  /
  /  /__\  \ |   |   __     \  \ /  /
  |  ____  | |   |  |  |    /  / \  \
  |  |  |  | |   |  |  |   /  /   \  \
  |__|  |__| |___|  |__|  /__/     \__\


ANYWAY, YOU MUST GIVE CREDIT TO MY CODE WHEN COPY IT
CONTACT ME HERE +50935959059
email;alixexadron7@gmail.com
*/


const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

async function shannzCdn(path) {
  const form = new FormData();

  const fileStream = fs.createReadStream(path);
  form.append("file", fileStream);

  try {
    const response = await axios.post("https://endpoint.web.id/server/upload", form, {
      headers: {
        ...form.getHeaders(), 
      },
    });

    return response.data
  } catch (error) {
    return error.message
  }
}

module.exports = { shannzCdn }
