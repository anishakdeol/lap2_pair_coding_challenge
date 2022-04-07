const db = require("../init");

class Post {
  constructor(data) {
    (this.id = data.id),
      (this.title = data.title),
      (this.pseudonym = data.pseudonym),
      (this.body = data.body);
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        let postData = await db.query("SELECT * FROM publish");
        let posts = postData.rows.map((b) => new Post(b));
        resolve(posts);
      } catch (err) {
        reject("Could not retrieve any posts.");
      }
    });
  }

  static findById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        let postData = await db.query("SELECT * FROM publish WHERE id = $1;", [
          id,
        ]);
        let post = new Post(postData.rows[0]);
        resolve(post);
      } catch (err) {
        reject("Post not found.");
      }
    });
  }

  static create(postInfo) {
    return new Promise(async (resolve, reject) => {
      try {
        const { title, pseudonym, body } = postInfo;
        let postData = await db.query(
          "INSERT INTO publish (title, pseudonym, body) VALUES ($1, $2, $3) RETURNING *",
          [title, pseudonym, body]
        );
        resolve(postData.rows[0]);
      } catch (err) {
        reject("Could not create a post");
      }
    });
  }
}

module.exports = Post;
