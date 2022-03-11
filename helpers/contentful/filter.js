export const getContentfulEntryItem = (object) => {
    let entryFieldData = {};
  
    object.items.map((itemData) => {
      entryFieldData = itemData.fields;
      console.log("Itemdata", itemData);
    });
    return entryFieldData;
  };
  
  export const getGenericpageFromPageData = (object) => {
    // console.log("heyoooog");
  
    return object.genericPages;
    console.log("heyoooog", object.genericPages);
  };
  // console.log("heyoooog", object.genericPages);
  console.log("getGenericpageFromPageData", getGenericpageFromPageData);
  
  export const getSectionsFromPageData = (object) => {
    // console.log("heyoooog");
    // console.log(object.sections);
    return object.sections || object.content;
  };
  export const getArticlesThumbnailForAPage = (object) => {
    //console.log(object.article);
    return object.article;
  };
  
  export const getIndivisualSectionData = (object, sectionID) => {
    let singleSectionData = {};
    if (object && object.sections) {
      object.sections.map((item) => {
        if (item.sys.contentType.sys.id == sectionID) {
          singleSectionData = item;
        }
        console.log("bbbbb", singleSectionData);
      });
    }
    if (object && object.content) {
      object.content.map((item) => {
        if (item.sys.contentType.sys.id == sectionID) {
          singleSectionData = item;
        }
      });
    }
  
    return singleSectionData;
  };
  export const getFileUrl = (content) => {
    if (content.hasOwnProperty("file")) {
      // const fileType = (content.file.contentType).includes('image')
      const fileType = checkFileType(content, "image");
      console.log(fileType);
      return fileType ? `${content.file.url}?fm=webp` : content.file.url;
    }
  };
  export const checkFileType = (fileObj, contentType) => {
    if (fileObj.file.hasOwnProperty("contentType")) {
      return fileObj.file.contentType.includes(contentType);
    }
  };
  export const getPageSectionWiseData = (object, sectionID) => {
    let getSection = getContentfulEntryItem(object);
    let sectionData = getIndivisualSectionData(getSection, sectionID);
  
    console.log("hey99999g");
    console.log(getSection);
    console.log(sectionData);
    return sectionData;
  };
  
  const getSectionDataByKey = (sectionDataArray, sectionId) => {
    // console.log(Object.entries(sectionDataArray.fields))
    for (const [key, value] of Object.entries(sectionDataArray.fields)) {
      if (key === sectionId) {
        return value;
      }
    }
  };
  
  export const getContentsBySectionKey = (ContentfulItems, sectionKey) => {
    if (ContentfulItems && ContentfulItems.items) {
      const sectionId = sectionKey.sectionId;
      //console.log(sectionId);
      let SectionData;
      ContentfulItems.items.forEach((sectionDataArray) => {
        SectionData = getSectionDataByKey(sectionDataArray, sectionId);
      });
      //console.log("hhhhhhhhhhhhhhh");
      //console.log(SectionData);
      return SectionData;
    }
  };
  