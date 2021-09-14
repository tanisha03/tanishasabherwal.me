const extractTopicsFromGardenQuery = (posts) => {
    let topics=["All"];
    posts.forEach(note=>{
      note.properties.Tags.multi_select.map(topic=>topics.push(topic.name));
    });
    topics = [...new Set(topics)];
    return topics;
};

export {
    extractTopicsFromGardenQuery
};