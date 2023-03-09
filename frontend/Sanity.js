import {createClient}  from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url";

const client = createClient({
    projectId: "aakg497n", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  useCdn: true, //
  apiVersion: "2021-10-21",
  // apiVersion: '2022-03-25'
})

// const builder = ImageUrlBuilder(client);
// export const urlFor = (source) => builder.image(source);

export default client;
