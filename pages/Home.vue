<template>
  <h1>Hello vsf!</h1>
</template>

<script>
import {
  getContentfulEntryItem,
  getSectionsFromPageData,
} from "~/helpers/contentful";

export default {
  name: "Home",

  asyncData(context) {
    console.log("-----------I'm alive---------")
    return Promise.all([
      context.$CfClient.getEntries({
        content_type: "homePage",
        include: 9, 
        locale: "en-GB",
      }),
    ])
      .then(([entries]) => {
        let [homePageData, sections] = [{}, []];

        if (entries && Object.keys(entries).length) {
          console.log('entries',entries.items[0].fields.sections)
          homePageData = getContentfulEntryItem(entries);
          sections = getSectionsFromPageData(homePageData);

          console.log("------------------------",homePageData);
          console.log("$$$$$$$$$$$$$$$$$$$$$$$$",sections);
        }
        return {
          homePageData,
          sections,
        };
      })
      .catch(console.error);
  },
};
</script>

<style>

</style>
