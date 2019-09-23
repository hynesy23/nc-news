exports.getAllEndPoints = (req, res, next) => {
  const endpointsObject = {
    "GET /api": {
      description:
        "serves up a json representation of all the available endpoints of the api"
    },
    "GET /api/topics": {
      description: "serves an array of all topics",
      queries: [],
      exampleResponse: {
        topics: [{ slug: "football", description: "Footie!" }]
      }
    },
    "GET /api/users/:username": {
      description: "servers a user object",
      queries: [],
      exapleResponse: {
        user: {
          username: "rogersop",
          avatar_url:
            "https://avatars2.githubusercontent.com/u/24394918?s=400&v=4",
          name: "paul"
        }
      }
    },
    "GET /api/articles": {
      description: "serves an array of all topics",
      queries: ["author", "topic", "sort_by", "order"],
      exampleResponse: {
        articles: [
          {
            title: "Seafood substitutions are increasing",
            topic: "cooking",
            author: "weegembump",
            body: "Text from the article..",
            created_at: 1527695953341
          }
        ]
      }
    },
    "GET /api/articles/:article_id": {
      description: "serves an article object for the given article_id",
      queries: [],
      exampleResponse: {
        article: {
          title: "Seafood substitutions are increasing",
          topic: "cooking",
          author: "weegembump",
          body: "Text from the article..",
          created_at: 1527695953341
        }
      }
    },
    "GET /api/articles/:article_id/comments": {
      description:
        "serves an array of comment objects for the given article_id",
      queries: ["sort_by", "order"],
      exampleResponse: [
        {
          comment_id: 18,
          author: "butter_bridge",
          article_id: 1,
          votes: 16,
          created_at: "2000-11-26T12:36:03.389Z",
          body: "This morning, I showered for nine minutes."
        }
      ]
    },
    "POST /api/articles/:article_id/comments": {
      description:
        "accepts a comment object to post to an article based on article_id, and serves the posted object",
      queries: [],
      exampleRequest: {
        username: "rogersop",
        body: "Yes, I also believe that"
      },
      exampleResponse: {
        comment: {
          comment_id: 19,
          author: "rogersop",
          article_id: 2,
          votes: 0,
          created_at: "2019-09-22T17:15:44.383Z",
          body: "Yes, I also believe that"
        }
      }
    },
    "PATCH /api/articles/:article_id": {
      description:
        "accepts and object to increase number of votes of an article based on given article_id, serves updated article",
      queries: [],
      exampleRequest: { inc_votes: 10 },
      exampleResponse: {
        article: {
          article_id: 2,
          title: "Sony Vaio; or, The Laptop",
          body: "I am the body of this article",
          votes: 10,
          topic: "mitch",
          author: "icellusedkars",
          created_at: "2014-11-16T12:21:54.171Z"
        }
      }
    },
    "PATCH /api/comments/:comment_id": {
      description:
        "accepts and object to increase number of votes of a comment based on given comment_id, serves updated comment",
      queries: [],
      exampleRequest: { inc_votes: 10 },
      exampleResponse: {
        comment: [
          {
            comment_id: 2,
            author: "butter_bridge",
            article_id: 1,
            votes: 24,
            created_at: "2016-11-22T12:36:03.389Z",
            body:
              "The beautiful thing about treasure is that it exists. Got to find out what kind of sheets these are; not cotton, not rayon, silky."
          }
        ]
      }
    },
    "DELETE /api/comments/:comment_id": {
      description: "deletes comment by given comment_id",
      queries: [],
      exampleResponse: { status: 204 }
    }
  };
  res.json({ endpoints: endpointsObject });
};
